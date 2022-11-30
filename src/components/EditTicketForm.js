import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

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
      <h2>Edit Ticket</h2>
      <hr />
      <ReusableForm onSubmittingForm={submitEditedTicket} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onSubmitEdits: PropTypes.func,
};

export default EditTicketForm;
