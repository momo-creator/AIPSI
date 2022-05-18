import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { Supplier } from '../Supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.page.html',
  styleUrls: ['./add-supplier.page.scss'],
})
<<<<<<< HEAD
export class AddSupplierPage implements OnInit {
  constructor(private supplierService: SupplierService, public alertController: AlertController, private router: Router) { }
  suppliers: Supplier[];
  public page: number = 0;

  account_id = ''
  supplier_name = ''
  legal_person = ''
  mobile_number = ''
  address = ''
  overdraft_amount = ''
  boc_account = ''
  abc_account = ''
  icbc_account = ''
  ccb_account = ''
  bocom_account = ''
  cmb_account = ''
  other_account = ''
  phone_number = ''


  ngOnInit() {
    this.account_id = ''
    this.supplier_name = ''
    this.legal_person = ''
    this.mobile_number = ''
    this.address = ''
    this.overdraft_amount = ''
    this.boc_account = ''
    this.abc_account = ''
    this.icbc_account = ''
    this.ccb_account = ''
    this.bocom_account = ''
    this.cmb_account = ''
    this.other_account = ''
    this.phone_number = ''
=======
export class AddSupplierPage {
  page: number = 0;
  suppliers: Supplier[]
  supplier: Supplier = {
    abcAccount: null,
    accountId: 1, // 将来这个数字会变，现在只是模拟
    address: '',
    bocAccount: null,
    bocomAccount: null,
    ccbAccount: null,
    cmbAccount: null,
    icbcAccount: null,
    legalPerson: '',
    mobileNumber: null,
    otherAccount: null,
    overdraftAmount: null,
    phoneNumber: null,
    supplierName: ''
>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51
  }

  constructor(private supplierService: SupplierService, public alertController: AlertController, private router: Router) { }

  async onSubmit() {
<<<<<<< HEAD
    const RequestBody = {
      "accountId": this.account_id,
      "supplierName": this.supplier_name,
      "legalPerson": this.legal_person,
      "mobileNumber": this.mobile_number,
      "address": this.address,
      "overdraftAmount": this.overdraft_amount,
      "bocAccount": this.boc_account,
      "abcAccount": this.abc_account,
      "icbcAccount": this.icbc_account,
      "ccbAccount": this.ccb_account,
      "bocomAccount": this.bocom_account,
      "cmbAccount": this.cmb_account,
      "otherAccount": this.other_account,
      "phoneNumber": this.phone_number,
    }

    if (this.mobile_number.toString().length < 11 && this.mobile_number.toString().length > 0) {
=======
    if (this.supplier.mobileNumber.toString().length < 11 && this.supplier.mobileNumber.toString().length > 0) {
>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51
      this.presentAlertConfirm1();
    } else if (this.supplier.phoneNumber.toString().length < 11 && this.supplier.phoneNumber.toString().length > 0) {
      this.presentAlertConfirm2();
    } else if ((this.supplier.bocAccount.toString().length < 19 && this.supplier.bocAccount.toString().length > 0)
      || (this.supplier.abcAccount.toString().length < 19 && this.supplier.abcAccount.toString().length > 0)
      || (this.supplier.icbcAccount.toString().length < 19 && this.supplier.icbcAccount.toString().length > 0)
      || (this.supplier.ccbAccount.toString().length < 19 && this.supplier.ccbAccount.toString().length > 0)
      || (this.supplier.bocomAccount.toString().length < 19 && this.supplier.bocomAccount.toString().length > 0)
      || (this.supplier.cmbAccount.toString().length < 19 && this.supplier.cmbAccount.toString().length > 0)
      || (this.supplier.otherAccount.toString().length < 19 && this.supplier.otherAccount.toString().length > 0)) {
      this.presentAlertConfirm3();
    } else {
      this.supplierService.addSupplier(this.supplier).subscribe()
      this.back()
    }
  }

  getSuppliers() {
    this.supplierService.getSuppliers(this.page).subscribe(
      response => this.suppliers = response.data
    )
  }

  async presentAlertConfirm1() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '手机号码应为11位数字，新增失败！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm2() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '电话号码应为11位数字，新增失败！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm3() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '银行卡号应为19位数字，新增失败！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm4() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '供应商重复，新增失败！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  back() {
    this.router.navigate(['/tab5/supplier']);
    this.getSuppliers();
  }
}
