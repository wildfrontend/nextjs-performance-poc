import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("next/core-web-vitals"), {
    plugins: {
        "unused-imports": unusedImports,
    },

    rules: {
        "react/jsx-sort-props": "warn",
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "warn",
    },
}];