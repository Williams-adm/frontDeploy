import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomComponent
  },
  {
  path: 'customers',
  loadChildren: () => import('./modules/customers/customers.module')
    .then(m => m.CustomersModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
