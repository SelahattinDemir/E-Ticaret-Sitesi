import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<AdminDashboardComponent> {
  canDeactivate(component: AdminDashboardComponent): boolean {
    return component.canExit()
  }

}