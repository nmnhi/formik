import { Form, Formik, FormikProps, useField } from "formik";
import React from "react";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const MyTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className="rounded px-3 py-2 border border-gray-400"
      />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function UseFieldDemo() {
  return (
    <div className="flex flex-col gap-4 mx-auto px-6">
      <h1 className="font-semibold text-lg">My Form</h1>
      <Formik
        initialValues={{
          email: "",
          firstName: "red",
          lastName: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form className="flex flex-col gap-3">
            <MyTextField name="firstName" type="text" label="First Name" />
            <MyTextField name="lastName" type="text" label="Last Name" />
            <MyTextField name="email" type="email" label="Email" />
            <button
              type="submit"
              className="px-3 py-2 bg-gradient-to-r from-orange-200 to-orange-500 w-24 rounded text-white font-semibold"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
