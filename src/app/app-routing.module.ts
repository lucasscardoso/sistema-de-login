import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './core/components/auth/auth.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/components/auth/auth.module').then(m => AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
