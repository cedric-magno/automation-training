const fs = require("fs");

const readme = fs.readFileSync("Automation Training Plan.md", "utf8");

// Match week headers like:
// # 🔵 WEEK 0-1: Something
const weekRegex = /^#.*WEEK\s([0-9]+(?:-[0-9]+)?)/gm;

const matches = [...readme.matchAll(weekRegex)];

const weeks = [];

for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const next = matches[i + 1];

  const startIndex = current.index;
  const endIndex = next ? next.index : readme.length;

  const block = readme.slice(startIndex, endIndex);

  const weekLabel = current[1]; // "0-1", "2", etc.

  const total = (block.match(/- \[[ xX]\]/g) || []).length;
  const done = (block.match(/- \[[xX]\]/g) || []).length;

  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  weeks.push({
    label: weekLabel,
    done,
    total,
    percent
  });
}

// helper badge generator
function badge(label, percent) {
  if (label === "Overall") {
    return {
      schemaVersion: 1,
      label: "Overall",
      message: `${percent}%`,
      color: percent < 30 ? "red" : percent < 70 ? "yellow" : "green"
    };
  }
  return {
    schemaVersion: 1,
    label: `Week ${label}`,
    message: `${percent}%`,
    color: percent < 30 ? "red" : percent < 70 ? "yellow" : "green"
  };
}

let overallDone = 0;
let overallTotal = 0;

weeks.forEach((w) => {
  overallDone += w.done;
  overallTotal += w.total;

  fs.writeFileSync(
    `.github/progress-week${w.label}.json`,
    JSON.stringify(badge(w.label, w.percent), null, 2)
  );
});

const overall = overallTotal === 0
  ? 0
  : Math.round((overallDone / overallTotal) * 100);

fs.writeFileSync(
  ".github/progress-overall.json",
  JSON.stringify(badge("Overall", overall), null, 2)
);

console.log("Progress updated from WEEK headers (emoji-safe)");