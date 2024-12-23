// Configuration interface for the toolbar component
export interface ToolbarConfig {
  userName: string;  // User's display name
  userEmail: string; // User's email address
}

// Interface for toolbar events (optional)
export interface ToolbarEvents {
  toggleSidebar: () => void; // Event handler for toggling the sidebar
  logout: () => void;        // Event handler for logging out
}
