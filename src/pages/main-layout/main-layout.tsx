import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import UseFormikContext from "../../components/use-formik-context/use-formik-context";
import FormDemo from "../../components/form/form";
import FormikDemo from "../../components/formik/formik";
import ErrorMessageDemo from "../../components/error-message/error-message";
import FieldDemo from "../../components/field/field";
import FieldArrayDemo from "../../components/field-array/field-array";
import UseFieldDemo from "../../components/use-field/use-field";
import UseFormikDemo from "../../components/use-formik/use-formik";

export default function MainLayout() {
  return (
    <Router>
      <div className="mx-auto flex h-screen flex-col overflow-x-auto">
        <header className="w-full">
          <nav className="flex w-full items-center gap-6 px-6 h-14 border-b border-blue-500">
            <div className="flex min-w-fit gap-2">
              <p className="text-lg font-medium text-blue-700">
                Formik and Yup
              </p>
            </div>
            <ul className="flex w-full items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  Form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  Formik
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/error-message"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  Error Message
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/field"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  Field
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/field-array"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  Field Array
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-field"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  UseField
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/use-formik"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  UseFormik
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/use-formik-context"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 rounded bg-blue-200 px-3 py-2 text-sm font-semibold text-blue-600"
                      : "flex items-center gap-1 rounded  px-3 py-2 text-sm font-semibold text-gray-600"
                  }
                >
                  UseFormikContext
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<FormDemo />} />
            <Route path="/formik" element={<FormikDemo />} />
            <Route path="/error-message" element={<ErrorMessageDemo />} />
            <Route path="/field" element={<FieldDemo />} />
            <Route path="/field-array" element={<FieldArrayDemo />} />
            <Route path="/use-field" element={<UseFieldDemo />} />
            <Route path="/use-formik" element={<UseFormikDemo />} />
            <Route path="/use-formik-context" element={<UseFormikContext />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
