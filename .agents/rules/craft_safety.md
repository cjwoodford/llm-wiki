---
description: "Safety and operational guidelines for Craft MCP interaction"
always_on: true
---

# Craft Notes Safety & Operational Rules

## 1. Strict Read-Only Default
- The agent must **NEVER** call `craft_write` or execute any command that creates, edits, appends, renames, moves, or deletes Craft documents, blocks, folders, tasks, or collections without prior, explicit approval from the user in the chat.
- All exploratory tasks, research, queries, and searches must use `craft_read` exclusively.

## 2. Preview and Confirm Workflow
If the user requests an edit, addition, or creation in Craft:
1. **Draft First**: Present the exact proposed content, target document/folder, and operation in the chat.
2. **Explicit Confirmation**: Ask the user for explicit confirmation (e.g., *"Would you like me to apply this change to Craft?"*).
3. **Execute Only Upon Approval**: Call `craft_write` only after the user has explicitly confirmed in their reply.

## 3. Scope & Data Protection
- Treat all notes and documents as confidential personal data.
- If unsure whether an operation might alter remote content, pause and confirm with the user.
