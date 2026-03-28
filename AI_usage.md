# AI Usage

This document describes how AI tools were used during the development of this project.

## Tool Used

**Claude (Anthropic)** — accessed via Claude Code (CLI/IDE extension)

## How AI Was Used

### Pair Programming / Buddy Mode

Claude acted as a coding buddy throughout the project. The workflow was:

1. Claude explained how a given piece of code works and why it is structured that way
2. Claude provided code snippets with explanations of the logic behind each line
3. I reviewed, understood, and integrated the code into the project
4. Claude helped debug issues and answered questions along the way

### Specific Areas

- **Project setup** — scaffolding Vite + TypeScript + Jest configuration
- **TypeScript types** — writing and explaining interface design for the sports event data structure
- **Data fixing** — identifying and repairing structural errors in the provided `data.json` file (malformed JSON: broken objects, missing brackets, premature array closings)
- **Service layer** — writing and explaining the event data service (loading, filtering, adding events)
- **Component architecture** — discussing and implementing how to split UI into logical components
- **Code snippets** — providing ready-to-use snippets with detailed explanations of what each part does and why
- **Testing** — writing and explaining Jest unit tests

## Transparency

I believe in full transparency about AI usage. Claude was an active collaborator in this project — providing code, explanations, and fixes. My role was to understand the code, make architectural decisions, integrate everything together, and learn from the process. All decisions about structure, features, and approach were made by me.

Using AI this way is similar to working with a senior developer who writes example code and explains it — the understanding and ownership of the project remain mine.
