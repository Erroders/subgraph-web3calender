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

export function handleStartTimeModified(event: StartTimeModified): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        eve.startTime = event.params.newSTime;
        eve.save();
    }
}

export function handleEndTimeModified(event: EndTimeModified): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        eve.startTime = event.params.newETime;
        eve.save();
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
    }
}

export function handleAttendeeInvited(event: AttendeeInvited): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        let list = eve.attendees ? eve.attendees : [];
        let obj = new Attendee(
            event.params.eventAddress.toHex() + event.params.attendee.toHex()
        );
        obj.address = event.params.attendee;
        obj.status = "INVITED";
        obj.rsvpResponse = "PENDING";
        obj.save();
        list.push(
            event.params.eventAddress.toHex() + event.params.attendee.toHex()
        );
        eve.attendees = list;
        eve.save();
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
    if (attendee) {
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
    }
}

export function handleCommentAdded(event: CommentAdded): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (eve) {
        let list = eve.comments ? eve.comments : [];
        let obj = new Comment(
            event.params.eventAddress.toHex() + event.block.timestamp.toString()
        );
        obj.comment = event.params.commment;
        obj.postedOn = event.block.timestamp;
        obj.save();
        list.push(
            event.params.eventAddress.toHex() + event.block.timestamp.toString()
        );
        eve.comments = list;
        eve.save();
    }
}
