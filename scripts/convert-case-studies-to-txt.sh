#!/usr/bin/env bash
# Converts all Word documents (.docx, .docx.aspx) in docs/scraped to plain text.
# Outputs English versions to docs/scraped/en/ and ensures de/ structure exists.
# Uses macOS textutil. Run from project root.

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRAPED_DIR="${SCRIPT_DIR}/../docs/scraped"
EN_DIR="${SCRAPED_DIR}/en"
DE_DIR="${SCRAPED_DIR}/de"
cd "$SCRAPED_DIR"
shopt -s nullglob 2>/dev/null || true
mkdir -p "$EN_DIR" "$DE_DIR"

get_out_name() {
    case "$1" in
        "Tecsofiy Case Study - SolutionPlus") echo "tecsofy-case-study" ;;
        "AAI Case Study - SolutionPlus") echo "aai-case-study" ;;
        "Hospitality Case Study - SolutionPlus") echo "hospitality-case-study" ;;
        "Democorder Case Study - SolutionPlus") echo "democorder-case-study" ;;
        "SolutionPlus Case Study Notes") echo "case-study-notes" ;;
        *) echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-' ;;
    esac
}

count=0
for f in *.docx.aspx *.docx\(1\).aspx *.docx; do
    [[ -f "$f" ]] || continue
    base="${f%.docx(1).aspx}"
    [[ "$base" == "$f" ]] && base="${f%.docx.aspx}"
    [[ "$base" == "$f" ]] && base="${f%.docx}"
    [[ -z "$base" ]] && continue
    
    out_name=$(get_out_name "$base")
    [[ -z "$out_name" ]] && out_name="case-study-${count}"
    
    en_out="${EN_DIR}/${out_name}.txt"
    if textutil -convert txt -output "$en_out" "$f" 2>/dev/null; then
        echo "Converted: $f -> en/${out_name}.txt"
        ((count++)) || true
    else
        echo "Skip (textutil failed): $f" >&2
    fi
done

# Post-process: fix known typos from source docx
[[ -f "${EN_DIR}/tecsofy-case-study.txt" ]] && sed -i '' 's/improve how workflows before accelerating it\./improve how workflows work before accelerating them./' "${EN_DIR}/tecsofy-case-study.txt"
[[ -f "${EN_DIR}/hospitality-case-study.txt" ]] && sed -i '' 's/website website/website/' "${EN_DIR}/hospitality-case-study.txt"
[[ -f "${EN_DIR}/case-study-notes.txt" ]] && {
    sed -i '' 's/S Gaph/SGAF/g; s/Project Managment/Project Management/g; s/an well-known/a well-known/g; s/Challenge Assesment/Challenge Assessment/g; s/catagorizer/categorizer/g; s/selceted/selected/g; s/solutoin/solution/g; s/Dont reinvented/Don'\''t reinvent/g; s/helped to implemented/helped to implement/g' "${EN_DIR}/case-study-notes.txt"
    sed -i '' 's/We helped the figure out what do they really need/We helped them figure out what they really need/' "${EN_DIR}/case-study-notes.txt"
    sed -i '' 's/planning and sand figured/planning and figured/' "${EN_DIR}/case-study-notes.txt"
    sed -i '' 's/The cutomer wanted/The customer wanted/' "${EN_DIR}/case-study-notes.txt"
    sed -i '' 's/Customers already has/Customer already has/' "${EN_DIR}/case-study-notes.txt"
    sed -i '' 's/customers need and then/customer needs and then/' "${EN_DIR}/case-study-notes.txt"
    sed -i '' 's/the RFQ selected/the RFQ, selected/' "${EN_DIR}/case-study-notes.txt"
}
echo "Done. Converted $count file(s) to en/. German versions in de/ are maintained separately."