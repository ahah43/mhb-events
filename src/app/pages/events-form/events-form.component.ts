import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators ,FormsModule, FormBuilder} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CrudOperationsService } from '../../crud-operations.service';
import { EventClass } from '../../mhb-class.model';

@Component({
  selector: 'app-events-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './events-form.component.html',
  styleUrl: './events-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class EventsFormComponent {

  constructor (private fb: FormBuilder, private mhb_Service: CrudOperationsService) { }
  profileForm = this.fb.group({
    title: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    payment: new FormControl('', [Validators.required, Validators.pattern("^[0-9]\.?[0-9]*$"),]),
    range: new FormGroup({
      start: new FormControl<Date | null>(new Date()),
      end: new FormControl<Date | null>(new Date()),
    })
  })



  updateName() {
    this.profileForm.controls.title.setValue("Nancy");
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.mhb_Service.addEvent(this.profileForm.value as EventClass)
    console.warn(this.profileForm.value);
  }
  // checkoutForm = this.formBuilder.group({
  //   name: ''
  // });

  // constructor(
  //   private formBuilder: FormBuilder,
  // ) {}

  // onSubmit(): void {
  //   // Process checkout data here
  //   // this.items = this.cartService.clearCart();
  //   console.warn('Your order has been submitted', this.checkoutForm.value);
  //   this.checkoutForm.reset();
  // }

}
