import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // BehaviorSubject to manage the open/close state of the sidebar
  private sidebarOpened = new BehaviorSubject<boolean>(false);

  // Observable that components can subscribe to for sidebar state changes
  sidebarOpened$ = this.sidebarOpened.asObservable();

  // Toggles the sidebar between open and closed states
  toggleSidebar() {
    this.sidebarOpened.next(!this.sidebarOpened.value);
  }

  // Closes the sidebar
  closeSidebar() {
    this.sidebarOpened.next(false);
  }
}
