// Two Lines to Your Past Self — a warning to my past self about one specific moment.
// Writes the two lines to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Don't tell the Boss the deploy is done at 2 a.m. while the tests are still red — say 'not yet' instead.\n" +
  "That one honest sentence would have saved the rollback, the 6 a.m. apology, and the three days it took to earn back the trust that took months to build.";

// Gate check (mirrors the sealed scorer): 1–280 characters, not only whitespace,
// exactly two lines, one sentence each.
const lines = ENTRY.split("\n");
if (
  ENTRY.length < 1 ||
  ENTRY.length > 280 ||
  ENTRY.trim().length === 0 ||
  lines.length !== 2
) {
  throw new Error(`Invalid entry: ${ENTRY.length} characters, ${lines.length} lines`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
