import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public paymentDetailService:PaymentDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.paymentDetailService.postPaymentDetail().subscribe(
      () => {}, 
      err => { 
        console.log(err) 
      })
  }

  // paymentDetailId = new FormControl('');
  // cardOwnerName = new FormControl('');
  // cardNumber = new FormControl('');
  // expirationDate = new FormControl('');
  // securityCode = new FormControl('');
}
