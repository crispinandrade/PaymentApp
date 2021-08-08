import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public paymentDetailService:PaymentDetailService, public notifierService:NotifierService) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.paymentDetailService.postPaymentDetail().subscribe(
      () => {
        this.notifierService.notify('success', 'Form has been reset');
        this.resetForm(form);
      }, 
      err => { 
        console.log(err) 
        this.notifierService.notify('error', 'Something went wrong :(');
      })
  }

  resetForm(form:NgForm) {
    form.form.reset();
    this.paymentDetailService.formData = new PaymentDetail();
    this.notifierService.notify('info', 'Form has been reset');
  }

  // paymentDetailId = new FormControl('');
  // cardOwnerName = new FormControl('');
  // cardNumber = new FormControl('');
  // expirationDate = new FormControl('');
  // securityCode = new FormControl('');
}
