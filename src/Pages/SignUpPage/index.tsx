import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";

type initialValuesType = {
  userName: string;
  password: string;
};

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUpPage = () => {
  const navigate = useNavigate();
  const initialValues: initialValuesType = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((e) => {
        console.log(" : RESP GOOGLE : ", e);
      })
      .catch((e: any) => {
        console.log(" : ERROR GOOGLE : ", e);
      });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          createUserWithEmailAndPassword(auth, values.userName, values.password)
            .then((e) => {
              console.log(" : user INFO : ", e);
              localStorage.setItem("token", JSON.stringify(e?.user));
              navigate("/");
            })
            .catch((e) => {
              console.log(" : Error : ", e);
            });
          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">User Name</label>
              <Field
                id="userName"
                name="userName"
                type="email"
                placeholder="User Name"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="userName" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="password" />
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
      <br />
      <button type="button" onClick={() => signUpWithGoogle()}>
        with Google
      </button>
    </div>
  );
};

export default SignUpPage;
