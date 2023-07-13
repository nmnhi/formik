import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is required"),
  lastName: Yup.string().required("LastName is required"),
  email: Yup.string()
    .email("Email invalid format")
    .required("Email is required"),
});

export default function UseFormikDemo() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-3 px-6 py-6"
    >
      <div className="flex flex-col">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={`px-3 py-2 border border-gray-400 rounded h-11 ${
            formik.errors.firstName && formik.touched.firstName
              ? "border-red-500 outline-none"
              : ""
          }`}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <small className="text-red-500 font-semibold">
            {formik.errors.firstName}
          </small>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          className={`px-3 py-2 border border-gray-400 rounded h-11 ${
            formik.errors.lastName && formik.touched.lastName
              ? "border-red-500 outline-none"
              : ""
          }`}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <small className="text-red-500 font-semibold">
            {formik.errors.lastName}
          </small>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className={`px-3 py-2 border border-gray-400 rounded h-11 ${
            formik.errors.email && formik.touched.email
              ? "border-red-500 outline-none"
              : ""
          }`}
        />
        {formik.errors.email && formik.touched.email && (
          <small className="text-red-500 font-semibold">
            {formik.errors.email}
          </small>
        )}
      </div>

      <button
        type="submit"
        className="rounded px-3 py-2 bg-gradient-to-r w-24 font-semibold from-orange-200 to-orange-500 text-white"
      >
        Submit
      </button>
    </form>
  );
}
