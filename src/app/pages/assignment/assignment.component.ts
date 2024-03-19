import { Component, inject } from '@angular/core';
import { CrudOperationsService } from '../../crud-operations.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { EventAssignmentClass, EventClass, StaffMemberClass, rangeFields } from '../../mhb-class.model';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, CommonModule, ReactiveFormsModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss',
  providers: [provideNativeDateAdapter(), CrudOperationsService],
})


export class AssignmentComponent {

  constructor(private fb: FormBuilder, private mhb_Service: CrudOperationsService) { }
  members$: Observable<StaffMemberClass[]>=this.mhb_Service.members$;
  events$: Observable<EventClass[]>=this.mhb_Service.events$;
  firestore: Firestore = inject(Firestore);


  profileForm = this.fb.group({
    selectedEvent: new FormControl('', Validators.required),
    selectedMember: new FormControl('', Validators.required),
    // attendance: new FormControl('', Validators.required),
  })




}
