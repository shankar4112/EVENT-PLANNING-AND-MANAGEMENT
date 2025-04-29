# EVENT-PLANNING-AND-MANAGEMENT


# Schema Diagram

```mermaid
erDiagram
    ORGANIZER {
        int OrganizerID PK
        string Name
        string Email
        string Phone
    }

    EVENT {
        int EventID PK
        int OrganizerID FK
        string Title
        string Description
        date EventDate
        time StartTime
        time EndTime
        int VenueID FK
    }

    VENUE {
        int VenueID PK
        string Name
        string Location
        int Capacity
    }

    ATTENDEE {
        int AttendeeID PK
        string Name
        string Email
        string Phone
    }

    TICKET {
        int TicketID PK
        int EventID FK
        int AttendeeID FK
        float Price
        string TicketType
    }

    PAYMENT {
        int PaymentID PK
        int TicketID FK
        date PaymentDate
        float AmountPaid
        string PaymentMethod
        string Status
    }

    ORGANIZER ||--o{ EVENT: "organizes"
    VENUE ||--o{ EVENT: "hosts"
    EVENT ||--o{ TICKET: "has"
    ATTENDEE ||--o{ TICKET: "buys"
    TICKET ||--o| PAYMENT: "paid_by"

