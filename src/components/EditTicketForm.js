import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  return (
    <React.Fragment>
      <ReusableForm onSubmittingForm={"nothing for now"} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
