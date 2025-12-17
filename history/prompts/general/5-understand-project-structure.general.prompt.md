---
id: 5
title: Understand Project Structure
stage: general
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: null
branch: 1-ai-robotics-textbook
user: user
command: understand my project
labels: ["project-understanding", "architecture", "SDD"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - CLAUDE.md
  - hackathon-book/docusaurus.config.ts
  - hackathon-book/package.json
  - specs/<feature-name>/spec.md
  - specs/<feature-name>/plan.md
  - specs/<feature-name>/tasks.md
  - history/prompts/
tests: null
---

## Prompt

"understand my project"

## Response snapshot

The project is an AI assistant framework (Claude Code) that uses Spec-Driven Development (SDD). It's designed to guide users through development tasks, meticulously recording interactions and suggesting architectural decisions.

## Outcome

- ✅ Impact: Gained a clear understanding of the project's purpose, structure, and key components.
- 🧪 Tests: N/A
- 📁 Files: Identified key project files and directories.
- 🔁 Next prompts: Ready to assist with specific development tasks within this project context.
- 🧠 Reflection: The `Explore` agent provided a comprehensive overview, which was then summarized for the user.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
