#!/usr/bin/env bash
# Tallies source docx content with generated en/ and de/ case study files.
# Run from project root.

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRAPED_DIR="${SCRIPT_DIR}/../docs/scraped"
cd "$SCRAPED_DIR"

echo "=== Case Study Content Tally ==="
echo ""

# Source -> output mapping
declare -a PAIRS
PAIRS=(
    "Tecsofiy Case Study - SolutionPlus.docx.aspx:tecsofy-case-study"
    "AAI Case Study - SolutionPlus.docx.aspx:aai-case-study"
    "Hospitality Case Study - SolutionPlus.docx(1).aspx:hospitality-case-study"
    "Democorder Case Study - SolutionPlus.docx.aspx:democorder-case-study"
    "SolutionPlus Case Study Notes.docx.aspx:case-study-notes"
)

printf "%-25s %8s %8s %8s %10s\n" "File" "Source" "en" "de" "Status"
printf "%-25s %8s %8s %8s %10s\n" "----" "-----" "--" "--" "------"

for pair in "${PAIRS[@]}"; do
    src="${pair%%:*}"
    out="${pair##*:}"
    [[ ! -f "$src" ]] && { printf "%-25s %8s %8s %8s %10s\n" "$out" "—" "—" "—" "SOURCE MISSING"; continue; }
    src_lines=$(textutil -convert txt -stdout "$src" 2>/dev/null | wc -l | tr -d ' ')
    en_lines="—"
    de_lines="—"
    [[ -f "en/${out}.txt" ]] && en_lines=$(wc -l < "en/${out}.txt" | tr -d ' ')
    [[ -f "de/${out}.txt" ]] && de_lines=$(wc -l < "de/${out}.txt" | tr -d ' ')
    
    status="OK"
    if [[ "$en_lines" != "$src_lines" ]] && [[ "$en_lines" != "—" ]]; then
        status="EN MISMATCH"
    fi
    [[ "$de_lines" == "—" ]] && status="${status} (no de)"
    
    printf "%-25s %8s %8s %8s %10s\n" "$out" "$src_lines" "$en_lines" "$de_lines" "$status"
done

echo ""
echo "Legend:"
echo "  Source = lines from docx (textutil)"
echo "  en     = lines in docs/scraped/en/*.txt (converted from docx)"
echo "  de     = lines in docs/scraped/de/*.txt (German translation)"
echo ""
echo "Note: en should match source (direct conversion). de is condensed translation."
