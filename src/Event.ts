import {
    StartTimeModified,
    EndTimeModified,
    MetadataModified,
    AttendeeInvited,
    AttendeeUninvited,
    AttendeeRsvpd,
    CommentAdded,
} from "../generated/templates/Event/Event";
import { Attendee, Web3Event, Comment } from "../generated/schema";
import { ipfs, json } from "@graphprotocol/graph-ts";
import { sendEPNSNotification } from "./EPNSNotification";

export function handleStartTimeModified(event: StartTimeModified): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        eve.startTime = event.params.newSTime;
        eve.save();

        // push notification to the attendees
        let recipient = eve.recipientList,
            type = "4",
            title = "Event Start time Updated",
            body = `Event Start time Updated by ${eve.creator}`,
            subject = "Event Start time Updated",
            message = `Event Start time Updated by ${eve.creator}`,
            image = "null",
            secret = "null",
            cta = "https://epns.io/";

        let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
        sendEPNSNotification(recipient, notification);
    }
}

export function handleEndTimeModified(event: EndTimeModified): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        eve.startTime = event.params.newETime;
        eve.save();

        // push notification to the attendees
        let recipient = eve.recipientList,
            type = "4",
            title = "Event End time Updated",
            body = `Event End time Updated by ${eve.creator}`,
            subject = "Event End time Updated",
            message = `Event End time Updated by ${eve.creator}`,
            image = "null",
            secret = "null",
            cta = "https://epns.io/";

        let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
        sendEPNSNotification(recipient, notification);
    }
}

export function handleMetadataModified(event: MetadataModified): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        let ipfsData = ipfs.cat(event.params.newMetadata.toString());
        if (ipfsData) {
            let jsonData = json.fromBytes(ipfsData);
            let object = jsonData.toObject();
            if (object) {
                eve.title = object.get("title")!.toString();
                eve.description = object.get("description")!.toString();
            }
        }
        eve.save();

        // push notification to the attendees
        let recipient = eve.recipientList,
            type = "4",
            title = "Event Details Updated",
            body = `Event Details(title, description) Updated by ${eve.creator}`,
            subject = "Event Details Updated",
            message = `Event Details(title, description) Updated by ${eve.creator}`,
            image = "null",
            secret = "null",
            cta = "https://epns.io/";

        let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
        sendEPNSNotification(recipient, notification);
    }
}

export function handleAttendeeInvited(event: AttendeeInvited): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        let list: string[] | null = eve.attendees;
        let obj = new Attendee(
            event.params.eventAddress.toHex() + event.params.attendee.toHex()
        );
        obj.address = event.params.attendee;
        obj.status = "INVITED";
        obj.rsvpResponse = "PENDING";
        obj.save();
        list!.push(
            event.params.eventAddress.toHex() + event.params.attendee.toHex()
        );
        eve.attendees = list;
        eve.recipientList =
            eve.recipientList + "," + event.params.attendee.toHex();
        eve.save();

        // push notification to the attendee invited
        let recipient = event.params.attendee.toHex(),
            type = "3",
            title = "New Event Created",
            body = `New Event created by ${eve.creator}`,
            subject = "Event created",
            message = `You are invited to the new Event created by ${eve.creator}`,
            image = "null",
            secret = "null",
            cta = "https://epns.io/";

        let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
        sendEPNSNotification(recipient, notification);
    }
}

export function handleAttendeeUninvited(event: AttendeeUninvited): void {
    let attendee = Attendee.load(
        event.params.eventAddress.toHex() + event.params.attendee.toHex()
    );
    if (attendee) {
        attendee.status = "UNINVITED";
        attendee.save();
    }
}

export function handleAttendeeRsvpd(event: AttendeeRsvpd): void {
    let attendee = Attendee.load(
        event.params.eventAddress.toHex() + event.params.attendee.toHex()
    );
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (attendee && eve) {
        attendee.status = "RSVPD";
        switch (event.params.response) {
            case 0:
                attendee.rsvpResponse = "YES";
                break;
            case 1:
                attendee.rsvpResponse = "NO";
                break;
            case 2:
                attendee.rsvpResponse = "MAYBE";
                break;
        }
        attendee.save();
        // push notification to the attendee who rsvp to event
        let recipient = event.params.attendee.toHex(),
            type = "3",
            title = "RSVP Complete for Event",
            body = `RSVP Complete for Event Event created by ${eve.creator}`,
            subject = "RSVP Complete for Event",
            message = `RSVP Complete for Event Event created by ${eve.creator}`,
            image = "null",
            secret = "null",
            cta = "https://epns.io/";

        let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
        sendEPNSNotification(recipient, notification);
    }
}

export function handleCommentAdded(event: CommentAdded): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        let list: string[] | null = [];
        if (eve.comments != null) {
            list = eve.comments;
        }
        let obj = new Comment(
            event.params.eventAddress.toHex() + event.block.timestamp.toString()
        );
        obj.comment = event.params.commment;
        obj.postedOn = event.block.timestamp;
        obj.save();
        list!.push(
            event.params.eventAddress.toHex() + event.block.timestamp.toString()
        );
        eve.comments = list;
        eve.save();

        // push notification to the attendees
        let recipient = eve.recipientList,
            type = "4",
            title = "Event new comment",
            body = `New Comment by ${eve.creator} posted for the event`,
            subject = "Event new comment",
            message = `New Comment by ${eve.creator} posted for the event`,
            image = "null",
            secret = "null",
            cta = "https://epns.io/";

        let notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
        sendEPNSNotification(recipient, notification);
    }
}
