import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
};

interface StaffMember {
  name: string,
  email: string,
  phone: string,
  role: string,
};

@Component({
  selector: 'app-a-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a-list.component.html',
  styleUrl: './a-list.component.scss'
})



export class AListComponent {
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }

}
