# Nexus Hub Administration Console

A dedicated administration interface for the Nexus Hub digital ecosystem.

> This repository is separate from `nexushub-frontend`, which remains the Nexus Hub corporate website.

## Project boundaries

The Administration Console is responsible for central technical administration, platform governance controls, security, access administration, integrations, infrastructure oversight, audit, monitoring and ecosystem-wide technical reporting.

It does not replace the Corporate Workspace, which remains responsible for internal organisational operations, or Corporate Governance and Leadership, which remains responsible for corporate authority, strategy and accountability.

## Experience model

- Public welcome and dashboard-preview experience using demonstration data only.
- Authentication followed by server-authoritative identity, role and permission resolution.
- Permission-filtered application experiences for Platform Owner / Highest Administrator, Technical and Platform Administration, Executive Oversight, and application administration.
- Frontend route guards improve user experience; backend services must enforce authentication, authorisation and data access.

## Status

Initial frontend foundation. Architecture specifications are proposed baseline documents and remain subject to later review and approval.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```


## Console shell prototype

A responsive shell prototype is available at `/console-preview`. It demonstrates the proposed navigation and module layout using placeholder states only. It is not an authenticated console and does not connect to live services or enforce permissions.

The navigation registry is maintained in `src/lib/console-navigation.ts`. The shell and module placeholders are in `src/components/console-shell-preview.tsx`.
