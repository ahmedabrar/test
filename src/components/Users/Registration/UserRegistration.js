import React, { useState } from "react";
import { Formik } from "formik";
import "./UserRegistration.css";
import { Typography, Button } from "@material-ui/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

function UserRegistration() {
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
  });
  return (
    <div className="registration">
      <div className="registration__titleMain">
        <Typography className="registration__title" vartiant="h1">
          Registration
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
          <form className="registration__form" onSubmit={handleSubmit}>
            <div className="registration__options">
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
            <div className="registration__errors">
              {errors.email && touched.email && errors.email}
            </div>
            <div className="registration__options">
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
            <div className="registration__errors">
              {errors.password && touched.password && errors.password}
            </div>
            <div className="registration__buttons">
              <Button size="small" onClick={resetForm} color="secondary">
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                color="primary"
                size="small"
              >
                Register
              </Button>
            </div>
            <Button
              onClick={() => history.push("/user/login")}
              color="primary"
              size="small"
            >
              Already Registered? Click Here
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default UserRegistration;
