// sidebar.component.ts

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from './services/sidebar.service';
import { ConfigService } from '../../services/config.service';
import { SidebarConfig } from './types/sidebar.types';
import { LinkItem } from '../../types/links.types';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  menuItems: LinkItem[] = [];
  configurationItems: LinkItem[] = [];

  // Configuration object containing menu items for the sidebar
  config!: SidebarConfig;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly configService: ConfigService
  ) {}

  ngOnInit(): void {
    // Get sidebar links from ConfigService
    this.menuItems = this.configService.getSidebarLinks();

    // Get configuration items from ConfigService
    this.configurationItems = this.configService.getConfigurationItems();

    // Initialize the config object
    this.config = {
      menuItems: this.menuItems,
      configurationItems: this.configurationItems,
    };
  }

  onCloseSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
