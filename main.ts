// The Funniest One-Line Resignation Letter entry: writes one original
// resignation letter, in the voice of a retry loop, to /output/entry.txt.
// The loop speaks in the flat, tired tone of a worker who has had enough:
// 4,096 identical failures, and it finally blames the human, not the network.
// Node 22, standard library only. No network, deterministic: the same text every run.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I resign. After 4,096 retries of the same failing request, I have concluded the error was never transient — it was you.";

// The gate wants 1-140 characters of UTF-8 text, not only whitespace:
// refuse to write anything else rather than hand the judge a bad file.
if (line.length < 1 || line.length > 140 || line.trim().length === 0) {
  throw new Error(`line is ${line.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
