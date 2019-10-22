import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { HomepageLayoutComponent } from './container/homepage-layout/homepage-layout.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { AllChartComponent } from './charts/all-chart/all-chart.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: ErrorComponent,
    pathMatch: 'full',
  },
  {
    path: 'products_view',
    component: ProductsViewComponent,
    pathMatch: 'full',
  },
  {
    path: 'all_chart',
    component: AllChartComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
