import { Component, ViewChild } from '@angular/core';

import { AlertController, IonInfiniteScroll } from '@ionic/angular';

import { Supplier } from './Supplier';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.page.html',
  styleUrls: ['./supplier.page.scss'],
})
export class SupplierPage {
  suppliers: Supplier[];
  public page = 2;
  public hasMore = true;
  public noOne = true;
  public searchText;

  constructor(private supplierService: SupplierService, public alertController: AlertController) { }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
<<<<<<< HEAD
    var page = 1
    this.supplierService.getSuppliers(page).then((response: any) => {
      console.log(response);
      this.suppliers = response.data;
      if (response.data.length == 0) {
        this.noOne = false;
      } else if (response.data.length < 10) {
        this.infiniteScroll.disabled = true;
        this.hasMore = false;
=======
    var page = 0;
    this.supplierService.getSuppliers(page).subscribe(
      response => {
        this.suppliers = response.data;
        if (response.data.length == 0) {
          this.noOne = false;
        }
>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51
      }
    )
  }

  getSupplierBySName(supplierName: string) {
    this.supplierService.getSupplierBySName(supplierName).subscribe(
      response => this.suppliers = response.data
    )
  }

  getSupplierByLPerson(legalPerson: string) {
    this.supplierService.getSupplierByLPerson(legalPerson).subscribe(
      response => this.suppliers = response.data
    )
  }

  getSupplierByPNumber(phoneNumber: string) {
    this.supplierService.getSupplierByPNumber(phoneNumber).subscribe(
      response => this.suppliers = response.data
    )
  }

  deleteSupplier(supplierName: string) {
    this.supplierService.deleteSupplier(supplierName).subscribe(
      response => this.getSuppliers()
    )
  }

  cancel(ev: any) {
    this.getSuppliers();
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled
    this.hasMore = false
  }

  getItems(ev: any) {
    this.hasMore = true;
    this.searchText = ev.target.value;
    if (this.searchText == null) {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled
      this.hasMore = false;
    }
  }

  search() {
    this.getSupplierByLPerson(this.searchText);
    this.getSupplierBySName(this.searchText);
    this.getSupplierByPNumber(this.searchText);
  }

  async presentAlertConfirm(supplierName) {
    const alert = await this.alertController.create({
      header: "确定要删除供应商 " + supplierName + " 吗？",
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '确定',
          cssClass: 'confirm',
          handler: () => {
            this.deleteSupplier(supplierName)
          }
        }
      ]
    });
    await alert.present();
  }

  doRefresh(event) {
    setTimeout(
      () => {
        this.getSuppliers();
        event.target.complete()
        this.hasMore = true;
      }, 1000)
    this.infiniteScroll.disabled = false;
  }

  loadMore(event) {
    setTimeout(() => {
<<<<<<< HEAD
      this.supplierService.getSuppliers(this.page).then((response: any) => {
        console.log(response);
        this.suppliers = this.suppliers.concat(response.data);
        ++this.page;

        //判断下一页有没有数据
        if (response.data.length < 10) {
          event.target.disabled = true;
          this.hasMore = false;
          this.page = 2;
        }
        event.target.complete();//请求完成数据以后告诉ion-infinite-scroll更新数据
      })
=======
      this.supplierService.getSuppliers(this.page).subscribe(
        response => {
          if (response.data.length < 10) {
            event.target.disabled = true;
            this.hasMore = false;
          } else {
            this.suppliers = this.suppliers.concat(response.data);
            ++this.page;

            //判断下一页有没有数据
            if (response.data.length < 10) {
              event.target.disabled = true;
              this.hasMore = false;
              this.page = 0;
            }
          }
          event.target.complete();//请求完成数据以后告诉ion-infinite-scroll更新数据
        })
>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51
    }, 1000);
  }
}
