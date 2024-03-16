import { Timestamp } from "@angular/fire/firestore";

class StaffMemberClass {
        name?: string;
        email?: string;
        phone?: string;
        role?: string
}
class EventClass {
        end_date?: Timestamp;
        location?: string;
        payment?: number;
        start_date?: Timestamp;
}

export {StaffMemberClass, EventClass}