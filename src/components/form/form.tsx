import { Form, Formik } from "formik";
import React from "react";

export default function FormDemo() {
  return (
    <>
      <div className="px-6">
        <h1>Form and Formik</h1>
        <Formik
          initialValues={{ name: "jared" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 500);
          }}
        >
          {(props) => {
            return (
              <Form className="flex flex-col">
                <input
                  className="border border-gray-400 px-3 py-2 rounded"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
                <button
                  type="submit"
                  className="shadow-sm bg-gradient-to-r from-orange-300 to-orange-600 w-24 px-2 py-2 rounded mt-4"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
