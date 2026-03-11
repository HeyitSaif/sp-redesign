/**
 * In-memory IP-based rate limiter.
 * For production with multiple instances, consider Upstash Redis or similar.
 */

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

const WINDOW_MS = 60 * 1000; // 1 minute
const CONTACT_MAX = 5; // contact form: 5 per minute
const OG_MAX = 30; // OG images: 30 per minute

function cleanup() {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now >= entry.resetAt) store.delete(key);
  }
}

export function checkRateLimit(
  identifier: string,
  maxRequests: number = CONTACT_MAX
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry) {
    store.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (now >= entry.resetAt) {
    store.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true };
}

export const RATE_LIMITS = { contact: CONTACT_MAX, og: OG_MAX } as const;

// Run cleanup every 5 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  setInterval(cleanup, 5 * 60 * 1000);
}
