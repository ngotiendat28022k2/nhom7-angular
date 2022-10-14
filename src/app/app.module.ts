import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//********************************** */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserComponent } from './page/admin/user/user.component';
import { ProductComponent } from './page/admin/product/product.component';
import { FooterAdminComponent } from './component/footer/footer-admin/footer-admin.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { HeaderComponent } from './component/header/header/header.component';
import { HeaderAdminComponent } from './component/header/header-admin/header-admin.component';
import { NavbarAdminComponent } from './component/navbar/navbar-admin/navbar-admin.component';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { DropdownsUserComponent } from './component/dropdowns/dropdowns-user/dropdowns-user.component';
import { AdminComponent } from './page/admin/admin/admin.component';
import { LoginComponent } from './src/page/login/login.component';
import { GeneralComponent } from './page/general/general.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { AddUserComponent } from './component/user/add-user/add-user.component';
import { EditUserComponent } from './component/user/edit-user/edit-user.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    DashboardComponent,
    UserComponent,
    ProductComponent,
    FooterAdminComponent,
    FooterComponent,
    HeaderComponent,
    HeaderAdminComponent,
    NavbarAdminComponent,
    NavbarComponent,
    DropdownsUserComponent,
    AdminComponent,
    LoginComponent,
    GeneralComponent,
    AddProductComponent,
    EditProductComponent,
    AddUserComponent,
    EditUserComponent,
    DetailProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
