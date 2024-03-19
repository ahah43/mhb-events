import { Time } from "@angular/common";
import { Timestamp } from "@angular/fire/firestore";

class StaffMemberClass {
        name?: string;
        email?: string;
        phone?: string;
        role?: string
}
class EventClass {
        title?: String;
        location?: string;
        payment?: number;
        range?: rangeFields;
        isFinished?: string;
        capacity?: number;

}

interface rangeFields{
        start: Timestamp;
        end: Timestamp
}
class EventAssignmentClass {
        event_id?: String;
        member_id?: string;
        ranges?: rangeFields[];
}


export { StaffMemberClass, EventClass, EventAssignmentClass }