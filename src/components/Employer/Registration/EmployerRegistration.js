import React, { useState } from "react";
import Joi from "joi";
import { Formik } from "formik";
import "./EmployerRegistration.css";
import { Typography, Button } from "@material-ui/core";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";

function EmployerRegistration() {
  let history = useHistory();
  // const [values, setValues] = useState({
  //   companyName: "",
  //   companyLocation: "",
  //   companySize: "",
  //   companyType: "",
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  // });
  // const [errors, setErrors] = useState({});

  // const handleOnChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value || "",
  //   });
  // };

  // const onSubmit = () => {
  //   const schema = Joi.object({
  //     companyName: Joi.string().alphanum().min(3).max(30).required(),
  //     companyLocation: Joi.string().alphanum().min(3).max(30),
  //     companySize: Joi.string().alphanum().min(3).max(30),
  //     companyType: Joi.string().alphanum().min(3).max(30),
  //     firstName: Joi.string().alphanum().min(3).max(30).required(),
  //     lastName: Joi.string().alphanum().min(3).max(30).required(),
  //     phone: Joi.string().alphanum().min(3).max(30).required(),
  //     email: Joi.string()
  //       .email({ tlds: { allow: false } })
  //       .required(),
  //   });

  //   const error = schema.validate(values);
  //   console.log(error.error.ValidationError);
  // };

  // return (
  //   <div className="employer">
  //     <div className="employer__titleMain">
  //       <Typography className="employer__title" vartiant="h1">
  //         Employer Registration
  //       </Typography>
  //     </div>
  //     <form className="employer__form">
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           type="text"
  //           placeholder="Company Name"
  //           name="companyName"
  //           value={values?.companyName}
  //         />
  //         <p>*</p>
  //         {errors.companyName && (
  //           <div className="employer__errors">
  //             <p>{errors.companyName}</p>
  //           </div>
  //         )}
  //       </div>

  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           type="text"
  //           placeholder="Company Location"
  //           name="companyLocation"
  //           value={values?.companyLocation}
  //         />
  //       </div>
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           name="companySize"
  //           value={values?.companySize}
  //           type="text"
  //           placeholder="Company Size"
  //         />
  //       </div>
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           name="companyType"
  //           value={values?.companyType}
  //           type="text"
  //           placeholder="Company Type"
  //         />
  //       </div>
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           name="phone"
  //           value={values?.phone}
  //           type="text"
  //           placeholder="Phone Number"
  //         />
  //         <p>*</p>
  //       </div>
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           name="firstName"
  //           value={values?.firstName}
  //           type="text"
  //           placeholder="First Name"
  //         />
  //         <p>*</p>
  //       </div>
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           name="lastName"
  //           value={values?.lastName}
  //           type="text"
  //           placeholder="Last Name"
  //         />
  //         <p>*</p>
  //       </div>
  //       <div className="employer__options">
  //         <input
  //           onChange={(e) => handleOnChange(e)}
  //           name="email"
  //           value={values?.email}
  //           type="email"
  //           placeholder="Email"
  //         />
  //         <p>*</p>
  //       </div>
  //       <div className="buttons">
  //         <Button color="secondary">Cancel</Button>
  //         <Button onClick={() => onSubmit()} color="primary">
  //           Register
  //         </Button>
  //       </div>
  //     </form>
  //   </div>
  // );

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required().min(2).label("Company Name"),
    email: Yup.string().email().required(),
    firstName: Yup.string().required().min(2).label("Firs Name"),
    lastName: Yup.string().required().min(2).label("Last Name "),
    phone: Yup.string().required().min(1).label("Phone Number"),
  });
  return (
    <div className="employer">
      <div className="employer__titleMain">
        <Typography className="employer__title" vartiant="h1">
          Employer Registration
        </Typography>
      </div>
      <Formik
        initialValues={{
          companyName: "",
          companyLocation: "",
          companySize: "",
          companyType: "",
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
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
          <form className="employer__form" onSubmit={handleSubmit}>
            <div className="employer__options">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={values?.companyName}
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.companyName && touched.companyName && errors.companyName}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Company Location"
                name="companyLocation"
                value={values?.companyLocation}
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.companyLocation &&
                touched.companyLocation &&
                errors.companyLocation}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                name="companySize"
                value={values?.companySize}
                type="text"
                placeholder="Company Size"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.companySize && touched.companySize && errors.companySize}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                name="companyType"
                value={values?.companyType}
                type="text"
                placeholder="Company Type"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.companyType && touched.companyType && errors.companyType}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                name="phone"
                value={values?.phone}
                type="text"
                placeholder="Phone Number"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.phone && touched.phone && errors.phone}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                name="firstName"
                value={values?.firstName}
                type="text"
                placeholder="First Name"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.firstName && touched.firstName && errors.firstName}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                name="lastName"
                value={values?.lastName}
                type="text"
                placeholder="Last Name"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.lastName && touched.lastName && errors.lastName}
            </div>
            <div className="employer__options">
              <input
                onChange={handleChange}
                name="email"
                value={values?.email}
                type="email"
                placeholder="Email"
                autoComplete="off"
                autoCorrect="off"
              />
            </div>
            <div className="employer__errors">
              {errors.email && touched.email && errors.email}
            </div>
            <div className="employer__buttons">
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
              onClick={() => history.push("/employer/login")}
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

export default EmployerRegistration;
