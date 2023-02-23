import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/pages/login/login.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { PrivateRouteGuard } from './shared/guards/private-route.guard';
import { PublicRouteGuard } from './shared/guards/public-route.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [PublicRouteGuard] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PrivateRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
