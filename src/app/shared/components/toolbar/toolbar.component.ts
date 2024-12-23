import { Component } from '@angular/core';
import { ToolbarConfig } from './types/toolbar.types';
import { SidebarService } from './../sidebar/services/sidebar.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    CommonModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  constructor(
    private readonly sidebarService: SidebarService,
  ) {}

  // Toggle the sidebar
  onToggleSidebar() {
    console.log('toggle sidebar');
    this.sidebarService.toggleSidebar();
  }

}
