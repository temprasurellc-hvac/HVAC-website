// Generates src/data/services/index.ts and src/data/resources/index.ts from the files present,
// ordered by the slug lists in CONTENT-BRIEF.md.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
const brief = readFileSync("CONTENT-BRIEF.md", "utf8");
const section = (name) => { const m = new RegExp(`### ${name}[^\\n]*\\n([\\s\\S]*?)(?=\\n### |$)`).exec(brief); return m ? m[1].replace(/^[a-z-]+: /gm, "").split(/[,\s]+/).map((s) => s.trim()).filter((s) => /^[a-z0-9-]+$/.test(s)) : []; };
const exportName = (file) => { const src = readFileSync(file, "utf8"); const m = /export const (\w+)\s*:/.exec(src); return m ? m[1] : null; };
function gen(dir, order, typeName, constName) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts") && !f.startsWith("index"));
  const bySlug = new Map(files.map((f) => [f.replace(/\.ts$/, ""), f]));
  const ordered = [...order.filter((s) => bySlug.has(s)), ...[...bySlug.keys()].filter((s) => !order.includes(s)).sort()];
  const missing = order.filter((s) => !bySlug.has(s));
  const imports = ordered.map((s) => `import { ${exportName(`${dir}/${bySlug.get(s)}`)} } from "./${s}";`);
  const names = ordered.map((s) => exportName(`${dir}/${bySlug.get(s)}`));
  writeFileSync(`${dir}/index.ts`, `import type { ${typeName} } from "../types";\n${imports.join("\n")}\n\nexport const ${constName}: ${typeName}[] = [\n  ${names.join(",\n  ")},\n];\n`);
  console.log(`${dir}: ${ordered.length} entries${missing.length ? `, MISSING: ${missing.join(", ")}` : ""}`);
}
gen("src/data/services", section("Services"), "Service", "SERVICES");
gen("src/data/resources", section("Resources"), "Resource", "RESOURCES");
