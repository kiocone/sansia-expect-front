// shared/services/config.service.ts

import { Injectable } from '@angular/core';
import { LinkItem } from '../types/links.types';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly links: LinkItem[] = [
    // Sidebar-only links
    {
      order: 1,
      label: 'Inicio',
      icon: 'home',
      route: '/',
      ariaLabel: 'Inicio',
      sideNavOnly: true,
    },
    // Shared links (appear in both dashboard and sidebar)
    {
      order: 2,
      label: 'Paquetes turisticos',
      icon: 'inventory',
      route: '/path2',
      ariaLabel: 'Planes Anuales',
      sideNavOnly: false,
    },
    {
      order: 3,
      label: 'Experiencias',
      icon: 'explore',
      route: '/path2',
      ariaLabel: 'Experiencias',
      sideNavOnly: false,
    },
    {
      order: 4,
      label: 'Reservaciones',
      icon: 'loyalty',
      route: '/path3',
      ariaLabel: 'Reservaciones',
      sideNavOnly: false,
    },
    // Configuration items
    {
      order: 1,
      label: 'Preferencias',
      icon: 'settings',
      route: '/path4',
      ariaLabel: 'Configuración General',
      sideNavOnly: true,
      isConfigItem: true,
    },
    {
      order: 2,
      label: 'Notificaciones',
      icon: 'notifications',
      route: '/path5',
      ariaLabel: 'Notificaciones',
      sideNavOnly: true,
      isConfigItem: true,
    },
  ];

  // Get links for the dashboard
  getDashboardLinks(): LinkItem[] {
    return this.links
      .filter((link) => !link.sideNavOnly)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  // Get links for the sidebar menu
  getSidebarLinks(): LinkItem[] {
    return this.links
      .filter((link) => !link.isConfigItem)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  // Get configuration items for the sidebar
  getConfigurationItems(): LinkItem[] {
    return this.links
      .filter((link) => link.isConfigItem)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }
}
