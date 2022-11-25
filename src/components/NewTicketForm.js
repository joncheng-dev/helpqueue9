import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewTicketForm(props) {
  function collectUserInfo(event) {
    event.preventDefault();

    props.onSubmitClick({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <h3>New Ticket Form</h3>
      <ReusableForm onSubmittingForm={collectUserInfo} buttonText="Create Ticket" />
    </React.Fragment>
  );
}

export default NewTicketForm;
