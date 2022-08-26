import React from "react";
import BasicFormValidation from "./BasicFormValidation";
import FormValidation from "./FormValidation-2";
import MulFormVal from "./MultipleFormValidation";
import UnControlledForm from "./UnControlledForm";

const RootForm = () => {
  return (
    <div>
      {/* <BasicFormValidation /> */}
      {/* <FormValidation /> */}
      {/* <MulFormVal /> */}
      <UnControlledForm />
    </div>
  )
}
export default RootForm;