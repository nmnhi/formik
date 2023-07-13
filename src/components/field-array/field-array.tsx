import { FieldArray, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

interface Friend {
  friends: [
    {
      name: string;
      age: string;
    },
  ];
}

const initialValues: Friend = {
  friends: [
    {
      name: "",
      age: "",
    },
  ],
};

const validationSchema = Yup.object().shape({
  friends: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required name"), // these constraints take precedence
      age: Yup.string().required("Required age"), // these constraints take precedence
    })
  ),
});

export default function FieldArrayDemo() {
  return (
    <div className="px-6 py-6">
      <h1>Friend List</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }, 500);
        }}
      >
        {(props) => {
          return (
            <Form name="friends">
              <FieldArray name="friends">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  return (
                    <div className="pb-4 flex flex-col gap-4">
                      <button
                        type="button"
                        onClick={() => push({ name: "", age: "" })}
                        className="rounded px-3 py-1 h-11 text-white w-20 font-semibold 
                        bg-gradient-to-r from-blue-200 to-blue-500"
                      >
                        Add
                      </button>
                      {props.values.friends.map((friend, index) => (
                        <div key={index} className="flex flex-col gap-2">
                          <div className="flex gap-3">
                            <div className="flex flex-col h-14">
                              <label htmlFor="name">Name</label>
                              <input
                                className={`px-3 py-2 border border-gray-400 rounded h-11 `}
                                type="text"
                                name={`friends[${index}].name`}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.friends[index].name}
                              />
                              <ErrorMessage
                                name={`friends[${index}].name`}
                                component="div"
                                className="text-red-500 text-xs font-semibold"
                              />
                            </div>

                            <div className="flex flex-col h-14">
                              <label htmlFor="age">Age</label>
                              <input
                                type="text"
                                className="px-3 py-2 border border-gray-400 rounded h-11"
                                name={`friends[${index}].age`}
                                value={props.values.friends[index].age}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                              />
                              <ErrorMessage
                                name={`friends[${index}].age`}
                                component="div"
                                className="text-red-500 text-xs font-semibold"
                              />
                            </div>
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="rounded px-3 py-1 h-11 text-white font-semibold bg-gradient-to-r from-red-200 to-red-500"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
              <button
                type="submit"
                className="rounded px-3 py-2 mt-6 bg-gradient-to-r from-orange-200 to-orange-500 text-white"
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
