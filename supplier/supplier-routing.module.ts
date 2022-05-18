import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierPage } from './supplier.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierPage
  },
  {
    path: 'add-supplier',
    loadChildren: () => import('./add-supplier/add-supplier.module').then(m => m.AddSupplierPageModule)
  },
<<<<<<< HEAD
=======
  {
    path: 'supplier-detail',
    loadChildren: () => import('./supplier-detail/supplier-detail.module').then(m => m.SupplierDetailsPageModule)
  },
  {
    path: 'supplier-edit',
    loadChildren: () => import('./supplier-edit/supplier-edit.module').then(m => m.SupplierEditPageModule)
  }
>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierPageRoutingModule { }
