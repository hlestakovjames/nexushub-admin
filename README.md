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


## Role-specific experience prototypes

- `/console-preview` — responsive console shell and navigation prototype.
- `/platform-owner-preview` — Platform Owner / Highest Administrator dashboard prototype.

Both routes are demonstration interfaces only. Neither authenticates users, grants privileges, or reads live platform data. See `docs/architecture/PLATFORM-OWNER-DASHBOARD.md` for the role-specific boundary and implementation requirements.


- `/technical-administration-preview` — Technical and Platform Administration dashboard prototype.

The Technical and Platform Administration experience is an operational workspace for delegated technical responsibilities. It is distinct from the Platform Owner / Highest Administrator experience: operational administrators work within explicitly granted permissions and do not acquire the Platform Owner's highest ecosystem authority or corporate appointment powers.

The preview uses illustrative labels and unavailable-state placeholders. It does not connect to identity, infrastructure, monitoring, deployment or audit services, and it does not implement authentication or backend permission enforcement.
