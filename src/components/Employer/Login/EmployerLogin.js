import React, { useState } from "react";
import Joi from "joi";
import { Formik } from "formik";
import "./EmployerLogin.css";
import { Typography, Button } from "@material-ui/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

function EmployerLogin() {
  let history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
  });
  return (
    <div className="employerLogin">
      <div className="employerLogin__titleMain">
        <Typography className="employerLogin__title" vartiant="h1">
          Employer Login
        </Typography>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          console.log(values);
          setStatus({ success: true });
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
          /* and other goodies */
        }) => (
          <form className="employerLogin__form" onSubmit={handleSubmit}>
            <div className="employerLogin__options">
              <input
                onChange={handleChange}
                name="email"
                value={values?.email}
                type="text"
                placeholder="Email Address"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employerLogin__errors">
              {errors.email && touched.email && errors.email}
            </div>
            <div className="employerLogin__options">
              <input
                onChange={handleChange}
                name="password"
                value={values?.password}
                type="password"
                placeholder="Password"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employerLogin__errors">
              {errors.password && touched.password && errors.password}
            </div>
            <div className="employerLogin__buttons">
              <Button size="small" onClick={resetForm} color="secondary">
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                color="primary"
                size="small"
              >
                Login
              </Button>
            </div>
            <Button
              onClick={() => history.push("/employer/registration")}
              color="primary"
              size="small"
            >
              Not Registered? Click Here
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default EmployerLogin;
