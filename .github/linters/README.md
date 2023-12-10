# TEMPLATES
The files in this folder are template rules for the linters that will run against your codebase. If you choose to copy these to your local repository in the .github/linters/ directory, they will be used at runtime. If rule files are not present locally, the templates will be used by default.

The file(s) will be parsed at runtime on the local branch to load all rules needed to run the Super-Linter GitHub Action. The GitHub Action will inform the user via the Checks API on the status and success of the process.

> This is a mirror of the readme in the templates folder.https://github.com/super-linter/super-linter/blob/main/TEMPLATES/README.md

## USAGE:

- Repo: https://github.com/iPoetDev/AlpineTicTacToe
- Folder: .github/linters
- File: README.md

### Purpose

This ⬇️ file is used to describe the purpose of the linter rules in this folder. It is used to document actual implentation from the Super-Linter GitHub Action.

### Use Linters

 In Use | Language              | Linter                    | Template <br> `.github/linters`          | Local <br> `(root)`                        | Ignore            | Docs                                                             | GitHub
--------|-----------------------|---------------------------|------------------------------------------|--------------------------------------------|-------------------|------------------------------------------------------------------|----------------------------------------------------------
 ✅      | editorconfig          | editorconfig              | [.ecrc](.ecrc)                           | [.editorconfig](../../.editorconfig)       |                   | [Docs](https://editorconfig.org/)                                |
 ❓      | gherkin               | gherkin-lint              | [.gherkin-lint.yml](.gherkin-lintrc.yml) | [.gherkin-lintrc.yml](../../.gherkin-lintrc.yml) |                   | [Docs](https://github.com/gherkin-lint/gherkin-lint)             |
 ✅      | secrets               | gitleaks                  | [.gitleaks.yml](.gitleaks.yml)           | [.gitleaks.yml](../../.gitleaks.yml)             | `.gitleaksignore` | [Docs](https://github.com/gitleaks/gitleaks)                     | https://github.com/zricethezav/gitleaks
 ✅      | HTML                  | htmlhint                  | [.htmlhintrc.json](.htmlhintrc.json)      | [.htmlhintrc.json](../../.htmlhintrc.json)       |                   | [Docs](https://htmlhint.com/)                                    | https://github.com/htmlhint/HTMLHint
 ✅      | JavaScript EsLint     | eslint                    | [.eslint.json](.eslintrc.yml)            | [.eslintrc.json](../../.eslintrc.json)           |                   | [Docs](https://eslint.org/)                                      | https://github.com/eslint/eslint
 ✅      | JavaScript StandardJs | eslint )(sharable config) | [.eslint.json](.eslintrc.yml)            | [.eslintrc.json](../../.eslintrc.json)           |                   | [Docs](https://standardjs.com/)                                  | https://github.com/standard/standard
 ❓      | JSON                  | eslint                    | [.eslint-plugin-json](.eslintrc.yml)     | [eslint-plugin-json](../../.eslintrc.json)       |                   | [Docs](https://eslint.org/)                                      | https://github.com/eslint/eslint
 ❓      | JSONC                 | eslint                    | [.eslint-plugin-json](.eslintrc.yml)     | [eslint-plugin-json](../../.eslintrc.json)       |                   | [Docs](https://eslint.org/)                                      | https://github.com/eslint/eslint
 ❓     | Markdown              | markdownlint              | [.markdownlint.json](.markdownlint.json) | [.markdownlint.json](../../.markdownlint.json)   |                   | [Docs](https://github.com/igorshubovych/markdownlint-cli#readme) | https://github.com/igorshubovych/markdownlint-cli#readme
  ✅ | Prettier | prettier                  | ---                                      | [.prettierrc.json](../../.prettierrc.json)       | `.prettierignore`   | [Docs](https://prettier.io/)                                     | https://github.com/prettier/prettier


### How it is used:

- ✅ Created a `.github/linters/README.md` to document the linter rules
- ✅ Created a `.github/workflows/super-linter.yml` for a CI/Actions workflow
- ✅ Copied `superlinter code` from https://github.com/marketplace/actions/super-linter
  - Example file can be found at TEMPLATES/linter.yml
  - Added `GITHUB_TOKEN` to the `env` section
    - GitHub Super-Linter will mark the status of each individual linter run in the Checks section of a pull request.
    - no need to set the GitHub Secret as it is automatically set by GitHub, it only needs to be passed to the action.
- 🚧 Commit that file to a new branch
- 🚧 Open up a pull request and observe the action working
- 🚧 Enjoy your more stable, and cleaner codebase
- 🚧 Check out the Wiki for customization options

### Image Used
- [ ]  ✅ `super-linter/super-linter:slim-v5`
  - Removes rust linters, dotenv linters, armttk linters, pwsh linters, c# linterrs

### ENV Variables

 IN USE                            | ENV VAR     | Default Value | Used Value          | Linter (l)<br> / Action (a)
-----------------------------------|-------------|---------------|---------------------|-----------------------------
 ❓ | ACTIONS_RUNNER_DEBUG              |             |               |
 ❓ | CREATE_LOG_FILE                   |             |               |
| CSS_FILE_NAME                     |             |               |
| DEFAULT_BRANCH                    | `master`    | `main`        | super-linter.yml(a)
| DEFAULT_WORKSPACE                 | `/tmp/lint` | `/tmp/lint`   | super-linter.yml(a)
| DISABLE_ERRORS                    |             |               |
| EDITORCONFIG_FILE_NAME            |             |               |
| ERROR_ON_MISSING_EXEC_BIT         |             |               |
| EXPERIMENTAL_BATCH_WORKER         |             |               |
| FILTER_REGEX_EXCLUDE              |             |               |
| FILTER_REGEX_INCLUDE              |             |               |
| GITHUB_ACTIONS_CONFIG_FILE        |             |               |
| GITHUB_ACTIONS_COMMAND_ARGS       |             |               |
| GITHUB_DOMAIN                     |             |               |
| GITLEAKS_CONFIG_FILE              |             |               |
| IGNORE_GENERATED_FILES            |             |               |
| IGNORE_GITIGNORED_FILES           |             |               |
| JAVASCRIPT_DEFAULT_STYLE          |             |               |
| JAVASCRIPT_ES_CONFIG_FILE         |             |               |
| LINTER_RULES_PATH                 |             |               |
| LOG_FILE                          |             |               |
| LOG_LEVEL                         |             |               |
| MARKDOWN_CONFIG_FILE              |             |               |
| MULTI_STATUS                      |             |               |
| SSL_CERT_SECRET                   |             |               |
| SSH_KEY                           |             |               |
| SSH_SETUP_GITHUB                  |             |               |
| SSH_INSECURE_NO_VERIFY_GITHUB_KEY |             |               |
| SUPPRESS_FILE_TYPE_WARN           |             |               |
| USE_FIND_ALGORITHM                |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
|                                   |             |               |
