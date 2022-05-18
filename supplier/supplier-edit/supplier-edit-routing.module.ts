import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierEditPage } from './supplier-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierEditPageRoutingModule { }
