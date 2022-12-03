import { EventCreated } from "../generated/EventFactory/EventFactory";
import { Event } from "../generated/templates";
import { Attendee, Web3Event } from "../generated/schema";
import { ipfs, json } from "@graphprotocol/graph-ts";

export function handleEventCreated(event: EventCreated): void {
    let eve = Web3Event.load(event.params.eventAddress.toHex());
    if (!eve) {
        Event.create(event.params.eventAddress);
        eve = new Web3Event(event.params.eventAddress.toHex());
        eve.creator = event.params.creator;
        eve.startTime = event.params.stime;
        eve.endTime = event.params.etime;
        eve.comments = [];

        let ipfsData = ipfs.cat(event.params.metadata.toString());
        if (ipfsData) {
            let jsonData = json.fromBytes(ipfsData);
            let object = jsonData.toObject();
            if (object) {
                eve.title = object.get("title")!.toString();
                eve.description = object.get("description")!.toString();
            }
        }
        // create attendeesList
        let attendeesList: string[] = [];
        event.params.attendees.forEach((attendee) => {
            let obj = new Attendee(
                event.params.eventAddress.toHex() + attendee.toHex()
            );
            obj.address = attendee;
            obj.status = "INVITED";
            obj.rsvpResponse = "PENDING";
            obj.save();
            attendeesList.push(
                event.params.eventAddress.toHex() + attendee.toHex()
            );
        });
        // add creator to list
        let obj = new Attendee(
            event.params.eventAddress.toHex() + event.params.creator.toHex()
        );
        obj.address = event.params.creator;
        obj.status = "RSVPD";
        obj.rsvpResponse = "YES";
        obj.save();
        attendeesList.push(
            event.params.eventAddress.toHex() + event.params.creator.toHex()
        );
        eve.attendees = attendeesList;
        eve.save();
    }
}
