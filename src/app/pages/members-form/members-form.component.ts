import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-members-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './members-form.component.html',
  styleUrl: './members-form.component.scss'
})
export class MembersFormComponent {

}
