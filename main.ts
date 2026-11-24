// Fortune Cookie Wisdom for Developers — one original line,
// written by a tired senior engineer for every developer who
// has ever inherited code they did not write.
// Writes the line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Legacy code is not your enemy — it is the last engineer's apology, still running in production.";

// A fortune is one line: it must fit the cookie, 1 to 120 characters.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 120) {
  throw new Error(`entry must be 1-120 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${charCount} characters)`);
