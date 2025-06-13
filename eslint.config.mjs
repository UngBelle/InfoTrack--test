import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import recommendedConfig from "eslint-plugin-prettier/recommended";
import playwright from "eslint-plugin-playwright";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  recommendedConfig,
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      "playwright/expect-expect": "off",
    },
  },
  {
    ignores: ["node_modules/**", "test-results/**", "playwright-report/**", "eslint.config.mjs"],
  },
);
