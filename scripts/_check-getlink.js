const fs = require("fs");
const src = fs.readFileSync("services/UtcobzildfiskwvhinguilService.ts", "utf8");
const start = src.indexOf("static async cobzildfiskwvhinguGetLink");
const end = src.indexOf("static async cobzildfiskwvhinguGetUserBlocke");
const body = src.slice(start, end);
const calls = [...body.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)].map((m) => m[1]);
const uniq = [...new Set(calls)];
const importNames = new Set();
const importRe = /import\s*\{([^}]+)\}\s*from/g;
let m;
while ((m = importRe.exec(src))) {
  m[1].split(",").forEach((s) => {
    const name = s.trim().split(/\s+as\s+/)[0].trim();
    if (name) importNames.add(name);
  });
}
const localFns = new Set(
  [...src.matchAll(/function\s+([A-Za-z_][A-Za-z0-9_]*)/g)].map((x) => x[1])
);
const builtins = new Set([
  "if",
  "for",
  "while",
  "switch",
  "catch",
  "parseInt",
  "setTimeout",
  "clearTimeout",
]);
const missing = uniq.filter(
  (n) => !importNames.has(n) && !localFns.has(n) && !builtins.has(n)
);
console.log(missing.join("\n"));
