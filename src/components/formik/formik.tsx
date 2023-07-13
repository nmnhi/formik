import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

export default function FormikDemo() {
  return (
    <div className="px-6 flex flex-col gap-6">
      <h1 className="text-lg font-semibold">Form and Formik</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "" }}
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
              <label htmlFor="name">Name</label>
              <input
                className={`border border-gray-400 px-3 py-2 rounded ${
                  props.errors.name ? "border-red-500 outline-none" : ""
                }`}
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div
                  id="feedback"
                  className="text-red-500 text-xs font-semibold"
                >
                  {props.errors.name}
                </div>
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
  );
}
