import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface StaffMember {
  name: string,
  email: string,
  phone: string,
  role: string,
};


@Component({
  selector: 'app-staff-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-member.component.html',
  styleUrl: './staff-member.component.scss'
})
export class StaffMemberComponent {
  members$: Observable<StaffMember[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'StaffMembers');
    this.members$ = collectionData(itemCollection) as Observable<StaffMember[]>;
  }

}
