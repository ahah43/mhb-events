import { Component } from '@angular/core';
import { CrudOperationsService } from '../../crud-operations.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss',
  providers: [provideNativeDateAdapter()],
})


export class AssignmentComponent {

  constructor (private fb: FormBuilder, private mhb_Service: CrudOperationsService) { }

  




}
