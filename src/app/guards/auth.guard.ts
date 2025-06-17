import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);  // Use inject to get the Router instance

  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    return true;  // If authenticated, allow route navigation
  } else {
    router.navigate(['/login']);  // If not authenticated, redirect to login
    return false;  // Prevent navigation to the protected route
  }
};
