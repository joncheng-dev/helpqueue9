import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Homer and Bart",
      location: "Moe's",
      issue: "need ride home",
    },
    {
      names: "Marge and Lisa",
      location: "Try 'n Save",
      issue: "project items out of stock",
    },
  ];
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
