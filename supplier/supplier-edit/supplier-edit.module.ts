import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierEditPageRoutingModule } from './supplier-edit-routing.module';
import { SupplierEditPage } from './supplier-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierEditPageRoutingModule
  ],
  declarations: [SupplierEditPage]
})
export class SupplierEditPageModule { }
