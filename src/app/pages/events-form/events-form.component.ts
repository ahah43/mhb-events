import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-events-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './events-form.component.html',
  styleUrl: './events-form.component.scss'
})
export class EventsFormComponent {

}
