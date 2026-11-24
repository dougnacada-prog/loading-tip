// Loading Screen Gold — entry program.
// Writes one loading-screen tip to the file the judge reads. The tip is
// the whole entry: a single line of 115 characters, and nothing else is
// written to the file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const tip =
  "Tip: the agent isn't stuck — it's rereading your prompt for the fifth time, hoping the words rearranged themselves.";

// ENTRY_OUTPUT overrides the default path when the grader sets it,
// otherwise the entry goes to /output/entry.txt.
function saveEntry(): void {
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, tip, "utf8");
}

saveEntry();
