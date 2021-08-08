import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public paymentDetailService: PaymentDetailService, public notifierService: NotifierService) { }

  ngOnInit(): void {
    this.paymentDetailService.getPaymentDetails();
  }

  populateForm(selectedRecord:PaymentDetail) {
    this.paymentDetailService.formData = Object.assign({},selectedRecord)
  }

  deleteRecord(id:number) {
    this.paymentDetailService.deletePaymentDetail(id)
    .subscribe(
      res => {
        this.paymentDetailService.getPaymentDetails()
      },
      err => {
        this.notifierService.notify("error", "Record was not deleted")
        console.log(err.message)
      })
  }
}
