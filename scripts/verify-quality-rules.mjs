import path from "node:path";
import { pathToFileURL } from "node:url";

import { RuleTester } from "eslint";

const target = process.argv[2] ?? "./eslint-rules/index.cjs";
const plugin = (await import(pathToFileURL(path.resolve(target)).href)).default;
const ruleTester = new RuleTester();
const lines = (count) =>
  Array.from({ length: count }, (_, index) => `const value${index} = ${index};`).join("\n") + "\n";

ruleTester.run("quality/max-lines", plugin.rules["max-lines"], {
  valid: [
    { code: lines(3), filename: "src/service.ts", options: [{ max: 10 }] },
    { code: lines(20), filename: "src/service.test.ts", options: [{ max: 10 }] },
    {
      code: Array.from({ length: 20 }, (_, index) => `export { item${index} } from "./module${index}";`).join("\n"),
      filename: "src/index.ts",
      options: [{ max: 10 }],
    },
  ],
  invalid: [
    {
      code: lines(20),
      filename: "src/service.ts",
      options: [{ max: 10 }],
      errors: [{ messageId: "tooLong" }],
    },
  ],
});

ruleTester.run("quality/no-direct-console", plugin.rules["no-direct-console"], {
  valid: [
    { code: "logger.info('hello');", filename: "src/service.ts" },
    { code: "console.log('test');", filename: "src/service.test.ts" },
  ],
  invalid: [
    {
      code: "console.log('hello');",
      filename: "src/service.ts",
      errors: [{ messageId: "banned", data: { method: "log", logger: "the project logging helper" } }],
    },
  ],
});

const dataAccess = {
  modules: ["@/db", "@/db/index"],
  layers: ["/src/app/", "/src/components/"],
  extensions: [".tsx"],
};

ruleTester.run("quality/no-direct-data-access", plugin.rules["no-direct-data-access"], {
  valid: [
    { code: "import { userColumns } from '@/db';", filename: "/repo/src/app/page.ts", options: [dataAccess] },
    { code: "import { db } from '@/db';", filename: "/repo/src/server/repository.ts", options: [dataAccess] },
  ],
  invalid: [
    {
      code: "import { db } from '@/db';",
      filename: "/repo/src/app/page.ts",
      options: [dataAccess],
      errors: [{ messageId: "forbidden", data: { module: "@/db" } }],
    },
  ],
});

console.log("quality rules: ok");
