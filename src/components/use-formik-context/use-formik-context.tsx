import { Field, Form, Formik, useFormikContext } from "formik";
import React from "react";

const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext<any>();
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    if (values.token.length === 6) {
      submitForm();
    }
  }, [values, submitForm]);
  return null;
};
export default function UseFormikContext() {
  return (
    <div className="px-6 py-6">
      <h1>2-step Verification</h1>
      <p>Please enter the 6 digit code sent to your device</p>
      <Formik
        initialValues={{ token: "" }}
        validate={(values) => {
          const errors: any = {};
          if (values.token.length < 5) {
            errors.token = "Invalid code. Too short.";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form>
          <Field
            name="token"
            type="tel"
            className="border border-gray-400 rounded px-3 py-2"
          />
          <AutoSubmitToken />
        </Form>
      </Formik>
    </div>
  );
}
