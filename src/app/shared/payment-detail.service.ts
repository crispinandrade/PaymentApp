import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/PaymentDetails'
  formData:PaymentDetail = new PaymentDetail()
  list:PaymentDetail[] = new Array() as PaymentDetail[];

  getPaymentDetails() {
    return this.http.get(this.baseURL)
    .toPromise()
    .then(response => this.list = response as PaymentDetail[])
  }

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData)
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData)
  }

  deletePaymentDetail(id:number) {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
