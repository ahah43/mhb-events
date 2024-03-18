import { Injectable, inject } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { StaffMemberClass,EventClass } from './mhb-class.model';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
// import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {
  members$: Observable<StaffMemberClass[]>;
  events$: Observable<EventClass[]>;

  firestore: Firestore = inject(Firestore);
  eventsCollection: import("@angular/fire/firestore").CollectionReference<import("@angular/fire/firestore").DocumentData, import("@angular/fire/firestore").DocumentData>;
  staffCollection: import("@angular/fire/firestore").CollectionReference<import("@angular/fire/firestore").DocumentData, import("@angular/fire/firestore").DocumentData>;

  constructor() {
    this.staffCollection = collection(this.firestore, 'StaffMembers');
    this.members$ = collectionData(this.staffCollection) as Observable<StaffMemberClass[]>;
    this.eventsCollection = collection(this.firestore, 'Events');
    this.events$ = collectionData(this.eventsCollection) as Observable<EventClass[]>;
  }
  getAllStaff(): Observable<StaffMemberClass[]> {
    return this.members$;
  }
  getAllEvents(): Observable<EventClass[]> {
    console.log(this.events$)
    return this.events$;
  }

  async addEvent(eventToAdd:EventClass){
    await addDoc(this.eventsCollection,eventToAdd)
  }

  // async assignMemeberToEvent(event:string, member:string){
  //   await addDoc(this.eventsCollection,event)
  // }

}

// @Injectable({
//   providedIn: 'root'
// })
// export class TutorialService {
  
//   private dbPath = '/tutorials';

//   tutorialsRef: AngularFireList<StaffMemberClass>;

//   constructor(private db: AngularFireDatabase) {
//     this.tutorialsRef = db.list(this.dbPath);
//   }

//   getAll(): AngularFireList<StaffMemberClass> {
//     return this.tutorialsRef;
//   }

//   create(tutorial: StaffMemberClass): any {
//     return this.tutorialsRef.push(tutorial);
//   }

//   update(key: string, value: any): Promise<void> {
//     return this.tutorialsRef.update(key, value);
//   }

//   delete(key: string): Promise<void> {
//     return this.tutorialsRef.remove(key);
//   }

//   deleteAll(): Promise<void> {
//     return this.tutorialsRef.remove();
//   }
// }
