// sidebar.types.ts

import { LinkItem } from "../../../types/links.types";

// Configuration interface for the sidebar component
export interface SidebarConfig {
  menuItems: LinkItem[];          // Primary navigation items
  configurationItems: LinkItem[]; // Secondary or settings items
}
