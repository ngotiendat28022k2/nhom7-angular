import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { AddUserComponent } from './component/user/add-user/add-user.component';
import { EditUserComponent } from './component/user/edit-user/edit-user.component';
import { AdminComponent } from './page/admin/admin/admin.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductComponent } from './page/admin/product/product.component';
import { UserComponent } from './page/admin/user/user.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';
import { GeneralComponent } from './page/general/general.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginComponent } from './page/login/login.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { SignupComponent } from './page/signup/signup.component';
import { AuthGuard } from './service/Guard/AuthGuard';

const routes: Routes = [
  // AUTH VIEW
  { path: '', component: HomePageComponent },
  { path: 'product/detail-product/:id', component: DetailProductComponent },

  // ADMIN VIEW
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // product
      {
        path: 'product',
        component: ProductComponent,
      },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/:id/edit', component: EditProductComponent },

      // user
      {
        path: 'user',
        component: UserComponent,
      },
      { path: 'user/add', component: AddUserComponent },
      { path: 'user/:id/edit', component: EditUserComponent },

      //
      { path: ':id/general', component: GeneralComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // login
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //
  { path: ':id/generaluser', component: GeneralComponent },

  // NO LAYOUT VIEW
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
