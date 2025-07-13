# Hevy MCP Server

A Node.js/TypeScript server that provides a unified API for interacting with the [Hevy fitness app](https://www.hevy.com/) via its public API. This project lets you fetch, create, and manage workouts, routines, exercise templates, routine folders, and webhooks using a single `/mcp/execute` endpoint.

## Features
- Fetch and create workouts
- Fetch and manage routines
- Fetch exercise templates
- Organize routines into folders
- Webhook subscription management
- All endpoints proxy to the official Hevy API (see `docs.json` for schema)
