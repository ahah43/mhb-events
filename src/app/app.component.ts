import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AListComponent } from './a-list/a-list.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { EventsFormComponent } from './pages/events-form/events-form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AListComponent, StaffMemberComponent, EventsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mhb-events';

}
