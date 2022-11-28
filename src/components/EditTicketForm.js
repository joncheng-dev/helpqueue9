import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;

  function submitEditedTicket(event) {
    event.preventDefault();

    props.onSubmitEdits({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm onSubmittingForm={submitEditedTicket} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
