import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CreateCustomersComponent } from './create-customers/create-customers.component';

const routes: Routes = [
  {
    path : '', component : ListCustomersComponent
  },
  {
    path : 'create', component : CreateCustomersComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
