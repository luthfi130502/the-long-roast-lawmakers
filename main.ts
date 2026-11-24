import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence roast: lawmakers who regulate AI but cannot convert a file to PDF.
// Original line, written fresh for this entry.
const LINE =
  "They spent nine hours debating whether an algorithm should be allowed to think, then adjourned without a verdict — the ruling itself still sits in the chamber's downloads folder, a Word file no one there could turn into a PDF.";

function main(): void {
  const text = LINE.trim();
  if (text.length < 1 || text.length > 320) {
    throw new Error(`entry length ${text.length} outside 1..320`);
  }
  if (/\n/.test(text)) {
    throw new Error("entry must be a single line");
  }
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`entry must be exactly one sentence, got ${sentences.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
