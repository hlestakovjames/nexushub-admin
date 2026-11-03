export type ConsoleArea =
  | "overview"
  | "applications"
  | "identity-access"
  | "security"
  | "integrations"
  | "infrastructure"
  | "monitoring"
  | "audit"
  | "settings";

export type NavigationItem = {
  id: ConsoleArea;
  label: string;
  description: string;
  href: string;
  group: "workspace" | "governance" | "operations" | "system";
};

export const consoleNavigation: NavigationItem[] = [
  { id: "overview", label: "Overview", description: "Ecosystem status and priority signals", href: "/console", group: "workspace" },
  { id: "applications", label: "Applications", description: "Registered ecosystem applications", href: "/console/applications", group: "workspace" },
  { id: "identity-access", label: "Identity & access", description: "Accounts, roles and permission assignments", href: "/console/identity-access", group: "governance" },
  { id: "security", label: "Security", description: "Security posture and privileged controls", href: "/console/security", group: "governance" },
  { id: "integrations", label: "Integrations", description: "Connected services and API integrations", href: "/console/integrations", group: "operations" },
  { id: "infrastructure", label: "Infrastructure", description: "Environments and platform dependencies", href: "/console/infrastructure", group: "operations" },
  { id: "monitoring", label: "Monitoring", description: "Service health and operational signals", href: "/console/monitoring", group: "operations" },
  { id: "audit", label: "Audit", description: "Recorded administrative and security events", href: "/console/audit", group: "governance" },
  { id: "settings", label: "System settings", description: "Console-level configuration", href: "/console/settings", group: "system" }
];

export const navigationGroups = [
  { id: "workspace", label: "Workspace" },
  { id: "governance", label: "Governance & security" },
  { id: "operations", label: "Platform operations" },
  { id: "system", label: "System" }
] as const;
