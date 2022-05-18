import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

<<<<<<< HEAD:src/app/tab5/supplier/supplier-details/details.page.ts
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
=======
import { Supplier } from '../Supplier';
import { SupplierService } from '../supplier.service';

>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51:src/app/tab5/supplier/supplier-detail/supplier-detail.page.ts
@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.page.html',
  styleUrls: ['./supplier-detail.page.scss'],
})
export class SupplierDetailPage implements OnInit {
  public supplierName: string;
  public abcAccount: number
  public accountId: number
  public Address: string
  public bocAccount: number
  public bocomAccount: number
  public ccbAccount: number
  public cmbAccount: number
  public icbcAccount: number
  public legalPerson: string
  public mobileNumber: number
  public otherAccount: number
  public overdraftAmount: number
  public phoneNumber: number
  suppliers: Supplier[];
  public page: any = 1
  public update = false;

  constructor(private supplierService: SupplierService, public router: Router,
    public activatedRoute: ActivatedRoute, public alertController: AlertController, public nav: NavController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (data: any) => {
        this.supplierName = data.supplierName,
          this.abcAccount = data.abcAccount,
          this.accountId = data.accountId,
          this.Address = data.address,
          this.bocAccount = data.bocAccount,
          this.bocomAccount = data.bocomAccount,
          this.ccbAccount = data.ccbAccount,
          this.cmbAccount = data.cmbAccount,
          this.icbcAccount = data.icbcAccount,
          this.legalPerson = data.legalPerson,
          this.mobileNumber = data.mobileNumber,
          this.otherAccount = data.otherAccount,
          this.overdraftAmount = data.overdraftAmount,
          this.phoneNumber = data.phoneNumber
      }
    )
  }
<<<<<<< HEAD:src/app/tab5/supplier/supplier-details/details.page.ts

  // getSupplier() {
  //   this.supplierService.getSupplier(this.supplierName).then((response: any) => {
  //     console.log(response);
  //     this.supplier = response.data;
  //   })
  // }


  onSubmit() {
    const RequestBody = {
      "accountId": this.accountId,
      "supplierName": this.supplierName,
      "legalPerson": this.legalPerson,
      "phoneNumber": this.phoneNumber,
      "mobileNumber": this.mobileNumber,
      "address": this.Address,
      "overdraftAmount": this.overdraftAmount,
      "bocAccount": this.bocAccount,
      "abcAccount": this.abcAccount,
      "icbcAccount": this.icbcAccount,
      "ccbAccount": this.ccbAccount,
      "bocomAccount": this.bocomAccount,
      "cmbAccount": this.cmbAccount,
      "otherAccount": this.otherAccount
    }


    if (this.mobileNumber.toString().length < 11 && this.mobileNumber.toString().length > 0) {
      this.presentAlertConfirm1();
    } else if (this.phoneNumber.toString().length < 11 && this.phoneNumber.toString().length > 0) {
      this.presentAlertConfirm2();
    } else if ((this.bocAccount.toString().length < 19 && this.bocAccount.toString().length > 0) || (this.abcAccount.toString().length < 19 && this.abcAccount.toString().length > 0) || (this.icbcAccount.toString().length < 19 && this.icbcAccount.toString().length > 0) || (this.ccbAccount.toString().length < 19 && this.ccbAccount.toString().length > 0) || (this.bocomAccount.toString().length < 19 && this.bocomAccount.toString().length > 0) || (this.cmbAccount.toString().length < 19 && this.cmbAccount.toString().length > 0) || (this.otherAccount.toString().length < 19 && this.otherAccount.toString().length > 0)) {
      this.presentAlertConfirm3();
    } else {
      this.supplierService.updateSupplier(RequestBody).subscribe()
      this.back()
    }
  }


  getSuppliers() {
    this.supplierService.getSuppliers(this.page).then((response: any) => {
      console.log(response);

      this.suppliers = response.data;
    })
  }

  async presentAlertConfirm1() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '手机号码应为11位数字，更新失败！',
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
      message: '电话号码应为11位数字，更新失败！',
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
      message: '银行卡号应为19位数字，更新失败！',
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
      message: '供应商重复，更新失败！',
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

  goBack() {
    document.getElementById("accountid").setAttribute('readonly', 'true');
    document.getElementById("suppliername").setAttribute('readonly', 'true');
    document.getElementById("legalperson").setAttribute('readonly', 'true');
    document.getElementById("mobilenumber").setAttribute('readonly', 'true');
    document.getElementById("phonenumber").setAttribute('readonly', 'true');
    document.getElementById("address").setAttribute('readonly', 'true');
    document.getElementById("overdraftamount").setAttribute('readonly', 'true');
    document.getElementById("bocaccount").setAttribute('readonly', 'true');
    document.getElementById("abcaccount").setAttribute('readonly', 'true');
    document.getElementById("icbcaccount").setAttribute('readonly', 'true');
    document.getElementById("ccbaccount").setAttribute('readonly', 'true');
    document.getElementById("bocomaccount").setAttribute('readonly', 'true');
    document.getElementById("cmbaccount").setAttribute('readonly', 'true');
    document.getElementById("otheraccount").setAttribute('readonly', 'true');
    this.update = false;
  }


  edit() {
    document.getElementById("accountid").setAttribute('readonly', 'false');
    document.getElementById("suppliername").setAttribute('readonly', 'false');
    document.getElementById("legalperson").setAttribute('readonly', 'false');
    document.getElementById("mobilenumber").setAttribute('readonly', 'false');
    document.getElementById("phonenumber").setAttribute('readonly', 'false');
    document.getElementById("address").setAttribute('readonly', 'false');
    document.getElementById("overdraftamount").setAttribute('readonly', 'false');
    document.getElementById("bocaccount").setAttribute('readonly', 'false');
    document.getElementById("abcaccount").setAttribute('readonly', 'false');
    document.getElementById("icbcaccount").setAttribute('readonly', 'false');
    document.getElementById("ccbaccount").setAttribute('readonly', 'false');
    document.getElementById("bocomaccount").setAttribute('readonly', 'false');
    document.getElementById("cmbaccount").setAttribute('readonly', 'false');
    document.getElementById("otheraccount").setAttribute('readonly', 'false');
    this.update = true;
  }

=======
>>>>>>> 69295260089ad1860cdb7e6b4ebe51587747dc51:src/app/tab5/supplier/supplier-detail/supplier-detail.page.ts
}
