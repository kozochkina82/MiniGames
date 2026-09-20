export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "docs",
        "style",
        "test",
        "perf",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
  },
};
