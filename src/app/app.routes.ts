import { Routes } from '@angular/router';
import { MembersFormComponent } from './pages/members-form/members-form.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';


export const routes: Routes = [
{path:'staff-member-form', component: MembersFormComponent},
{path:'staff-member-form/:id', component: MembersFormComponent},
{path:'assignments', component: AssignmentComponent},
{path:'assignments/:id', component: AssignmentComponent},
];
