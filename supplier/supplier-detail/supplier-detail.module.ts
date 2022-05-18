import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierDetailPageRoutingModule } from './supplier-detail-routing.module';
import { SupplierDetailPage } from './supplier-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierDetailPageRoutingModule
  ],
  declarations: [SupplierDetailPage]
})
export class SupplierDetailsPageModule { }
