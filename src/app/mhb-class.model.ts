import { Time } from "@angular/common";
import { Timestamp } from "@angular/fire/firestore";

interface StaffMemberClass {
        name?: string;
        email?: string;
        phone?: string;
        role?: string
}
interface EventClass {
        title?: String;
        location?: string;
        payment?: number;
        range?: rangeFields;
        isFinished?: string;
        capacity?: number;

}

class rangeFields {
        start!: Timestamp;
        end!: Timestamp;
        validate() {
                return this.end >= this.start
        }
        count_days() {
                // The number of milliseconds in all UTC days (no DST)
                const oneDay = 1000 * 60 * 60 * 24;
                const EndDate = this.end.toDate()
                const StartDate = this.start.toDate()
                EndDate.getUTCMilliseconds
                // A day in UTC always lasts 24 hours (unlike in other time formats)
                const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
                const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());
                // so it's safe to divide by 24 hours
                return (start - end) / oneDay + 1;
        }

}
interface EventAssignmentClass {
        event_id?: String;
        member_id?: string;
        ranges?: rangeFields[];
}


export { StaffMemberClass, EventClass, EventAssignmentClass, many_ranges_days, rangeFields };




function many_ranges_days(rs: rangeFields[]) {
        // calculates the total number of days in an array of date ranges
        return rs.reduce((accumulator, r) => accumulator + r.count_days(), 0);
}

// function range_validation(r:rangeFields){
//         return r.end >= r.start
// }

// functino 