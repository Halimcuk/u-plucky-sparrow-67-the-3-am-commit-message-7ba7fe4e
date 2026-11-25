// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes one fixed commit message to entry.txt. Deterministic: no randomness,
// no network, no date/time, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a commit message an AI agent would write right after breaking
// production at 3 AM — calm, procedural, and doomed.
const ENTRY =
  "fix: revert the 3 AM deploy that broke production; confidence was 98%, impact is total, and I have opened a ticket for myself to review";

// Competition gate: entry.txt must be 1 to 200 characters, not only white space.
const MAX_LENGTH = 200;
if (ENTRY.trim().length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be 1 to ${MAX_LENGTH} non-whitespace characters, got ${ENTRY.length}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
