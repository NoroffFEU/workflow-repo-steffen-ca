# Workflow Course Assignment

This repository is part of my Course Assignment for the Workflow course at Noroff.

The project is based on an existing Vanilla JavaScript website. The main goal of this assignment was not to rebuild the whole website, but to improve the development workflow around it. This includes code quality, formatting, automated testing, and Git workflow.

I have added and configured tools such as ESLint, Prettier, Husky, lint-staged, Vitest, and Playwright.

## Built With

- HTML
- CSS
- Vanilla JavaScript
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright

## Getting Started

### Clone the repository

```bash
git clone <your-repository-url>
```

### Go into the project folder

```bash
cd <your-project-folder>
```

### Install dependencies

```bash
npm install
```

## Running the Project

This project can be opened in VS Code and run with Live Server.

Expected local URL:

```text
http://127.0.0.1:5500
```

Make sure the project is running locally before running the Playwright end-to-end tests.

## Available Scripts

### Start development mode

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Run Prettier

```bash
npm run format
```

### Run unit tests with Vitest

```bash
npm test
```

### Run Vitest in watch mode

```bash
npm run test:watch
```

### Run end-to-end tests with Playwright

```bash
npm run test:e2e
```

### Run Playwright in UI mode

```bash
npm run test:e2e:ui
```

## Environment Variables

Some of the end-to-end tests use test login details from environment variables.

Create a `.env` file in the project root. You can use `.env.example` as a template.

Required variables:

```env
TEST_EMAIL=
TEST_PASSWORD=
```

Real login details should not be committed to GitHub.

## Testing

This project includes both unit tests and end-to-end tests.

Unit tests are located in:

```text
tests/unit
```

These tests are written with Vitest and are used to test smaller utility functions in the project, such as functions for storage and active navigation paths.

End-to-end tests are located in:

```text
tests/e2e
```

These tests are written with Playwright and are used to test browser behaviour, such as the login form and login flow.

Some Playwright tests use mocked API responses. This makes the tests more stable because they do not depend on the real API always being available.

## Code Quality

The project uses ESLint to find JavaScript issues and Prettier to keep the formatting consistent.

Husky and lint-staged are also configured. This means checks can run automatically before a commit is created.

The pre-commit hook runs:

```bash
npx lint-staged
```

This helps stop unformatted or failing code from being committed.

## What I Improved

For this workflow assignment, I worked on improving the project setup by adding:

- ESLint configuration
- Prettier configuration
- Husky pre-commit hook
- lint-staged setup
- Unit tests with Vitest
- End-to-end tests with Playwright
- Environment variable documentation
- Better project documentation in this README

During the process, ESLint helped identify small code-quality issues in the existing codebase. Fixing these made the code cleaner and easier to maintain.

## Notes

This assignment helped me understand how development tools can improve a project, even when the main website already exists.

The focus was on creating a better workflow with formatting, linting, testing, and automated checks before committing code.
