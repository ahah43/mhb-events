import { Routes } from '@angular/router';
import { MembersFormComponent } from './pages/members-form/members-form.component';


export const routes: Routes = [
{path:'staff-member-form', component: MembersFormComponent},
{path:'staff-member-form/:id', component: MembersFormComponent},
];
