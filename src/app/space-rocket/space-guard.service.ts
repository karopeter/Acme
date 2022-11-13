import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable() 
export class SpaceDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid rocket id');
      // start a new laucnh 
      this.router.navigate(['/space-rocket']);
      // abort current navigation 
      return false;
    }
    return true;
  }
}