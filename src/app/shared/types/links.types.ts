// links.types.ts

export interface LinkItem {
  order?: number;      // Determines the display order
  label: string;      // Display text
  icon: string;       // Material icon name
  route: string;      // Navigation route
  ariaLabel?: string; // Optional ARIA label for accessibility
  sideNavOnly: boolean; // Indicates if the link is for the sidebar only
  isConfigItem?: boolean; // Indicates if the link is a configuration item
}
