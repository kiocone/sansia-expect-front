import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SidebarService } from './shared/components/sidebar/services/sidebar.service';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { SaniaTarjetaComponent } from './shared/components/terjeta/tarjeta-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    SidebarComponent,
    ToolbarComponent,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sansia-expect-front';

  private readonly subscriptions: Subscription = new Subscription();

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private sidebarService: SidebarService
  ) {}

  ngAfterViewInit(): void {
    if (this.sidenav) {
      // Subscribe to sidebar open/close events and control the sidenav accordingly
      const sidebarSub = this.sidebarService.sidebarOpened$.subscribe((open) => {
        if (open) {
          this.sidenav.open();
        } else {
          this.sidenav.close();
        }
      });

      // Add the subscription to the subscription container
      this.subscriptions.add(sidebarSub);
    }
  }

  onCloseSidebar(): void {
    this.sidebarService.closeSidebar();
  }

}
