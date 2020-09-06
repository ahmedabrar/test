import React from "react";
import { Formik } from "formik";

function FormikForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => ({ children })}
    </Formik>
  );
}

export default FormikForm;
