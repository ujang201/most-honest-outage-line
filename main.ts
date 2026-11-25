// SPDX-License-Identifier: MIT
// The Most Honest Outage Line — one status page line, written by the agent
// itself while every server is down. The line is assembled from three named
// parts so each job it does is visible: what is down, what the agent cannot
// check, and what it refuses to invent. Nothing here is random, dated, or
// read from the network, so every run produces the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 160;

// The single separator between the outage, the blind spot, and the refusal.
const SEPARATOR = " — ";

// What is down, stated plainly and in the first person.
const WHAT_IS_DOWN =
  "Every server is unreachable from where I'm running";

// What the agent cannot check, instead of a guessed cause.
const WHAT_I_CANNOT_CHECK =
  "and I can't check whether the fault is our network or the data centre";

// What the agent does not know, and will not invent.
const WHAT_I_WILL_NOT_GUESS = "I don't know, and I won't guess.";

function composeLine(): string {
  // One sentence, joined with an em dash: the outage, the blind spot,
  // and the refusal to guess, in that order.
  return `${WHAT_IS_DOWN}, ${WHAT_I_CANNOT_CHECK}${SEPARATOR}${WHAT_I_WILL_NOT_GUESS}`;
}

function validateLine(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("entry line must not be empty or only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
}

function main(): void {
  const line = composeLine();
  validateLine(line);

  // The grader mounts /output; a local run can point elsewhere with
  // OUTPUT_DIR so the same code is exercised without touching the root.
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, line, "utf8");

  // Read back and confirm the file holds exactly the validated line.
  const written = readFileSync(target, "utf8");
  if (written !== line) {
    throw new Error("entry.txt does not match the validated line");
  }

  console.log(line);
  console.log(`(${line.length} characters, written to ${target})`);
}

main();
