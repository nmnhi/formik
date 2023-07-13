import { Field, Form, Formik, FormikProps } from "formik";
import React from "react";

const MyInput = ({ field, form, ...props }: any) => {
  return <input {...field} {...props} />;
};

export default function FieldDemo() {
  return (
    <div className="px-6 py-6">
      <Formik
        initialValues={{ email: "", color: "red", firstName: "", lastName: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="">Default</label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-500 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">As</label>
              <Field
                as="select"
                name="color"
                className="border border-gray-500 rounded px-3 py-2 w-24"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Children</label>
              <Field
                name="lastName"
                className="border border-gray-500 rounded px-3 py-2"
              >
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }: any) => (
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      {...field}
                      className="border border-gray-500 rounded px-3 py-2"
                    />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Component</label>
              <Field
                name="lastName"
                placeholder="Doe"
                component={MyInput}
                className="border border-gray-500 rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="px-3 py-2 rounded bg-gradient-to-r from-orange-300 to-orange-500 w-24 text-white font-semibold"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
