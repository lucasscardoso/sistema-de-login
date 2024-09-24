import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';




export const authGuard: CanActivateChildFn = (childRoute, state) => {
  //inetando as dependencias, pois nessa versão do angular não é possivel criar construtor
  const authService = inject(AuthService);
  const router = inject(Router);

  if(!authService.isAutenticated()){
    router.navigate(['']);
    return false;

  }

  return true;
};
