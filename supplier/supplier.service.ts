import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Supplier } from './Supplier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private supplierURL: string = environment.supplierURL;

  constructor(private http: HttpClient) { }

  getSuppliers(page): Observable<any> {
    return this.http.get<any>(this.supplierURL + "/suppliers?startPage=" + page);
  }

  getSupplier(supplierName: string): Observable<any> {
    return this.http.get<any>(this.supplierURL + "/suppliers?supplierName=" + supplierName);
  }

  getSupplierBySName(supplierNameVagued: string): Observable<any> {
    return this.http.get<any>(this.supplierURL + "/suppliers_vagued?supplierNameVagued=" + supplierNameVagued);
  }

  getSupplierByLPerson(legalPersonVagued: string): Observable<any> {
    return this.http.get<any>(this.supplierURL + "/suppliers_legalPerson_vagued?legalPersonVagued=" + legalPersonVagued);
  }

  getSupplierByPNumber(phoneNumberVagued: string): Observable<any> {
    return this.http.get<any>(this.supplierURL + "/suppliers_phoneNumber_vagued?phoneNumberVagued=" + phoneNumberVagued);
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.supplierURL + "/suppliers", supplier);
  }

  deleteSupplier(supplierName: string): Observable<Supplier> {
    return this.http.delete<Supplier>(this.supplierURL + "/suppliers?supplierName" + supplierName);
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(this.supplierURL + "/suppliers", supplier);
  }
}
