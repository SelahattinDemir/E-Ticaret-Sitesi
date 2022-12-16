import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminDashboardComponent } from '../Pages/admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<AdminDashboardComponent> {
  canDeactivate(component: AdminDashboardComponent): boolean {
    // running according to canExit output which in dashboard comp.
    return component.canExit();
  }

}