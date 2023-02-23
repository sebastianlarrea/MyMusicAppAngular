import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PrivateRouteGuard implements CanActivate {
  constructor(private route: Router) {}

  canActivate(): boolean | UrlTree {
    return (
      !!localStorage.getItem('ACCESS_TOKEN') ||
      !!window.location.hash ||
      this.route.parseUrl('/')
    );
  }
}
