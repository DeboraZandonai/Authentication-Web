import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./styles.css";

const Login = () => {
  const handleSubmit = (values) => {
    axios.post("http://localhost:3333/api/auth", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/");
      }
    });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  return (
    <>
      <div className="container-login">
        <svg
          height="48"
          class="octicon octicon-mark-github"
          viewBox="0 0 16 16"
          version="1.1"
          width="48"
          aria-hidden="true"
          color="#586069"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <h1 className="Login-text">Sign in to GitHub</h1>

        <div className="container-form">
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <Form className="login-form">
              <div className="Login-Group">
                <div className="login-email-text">
                  <label className="login-field-text">Email</label>
                </div>
                <Field
                  name="email"
                  className="Login-Field"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="Login-Group">
                <div className="container-password">
                  <label className="login-field-text">Password</label>
                  <a href="/" className="login-forgot-password">
                    Forgot password?
                  </a>
                </div>
                <Field
                  name="password"
                  className="Login-Field"
                  placeholder="Digite sua senha"
                />
              </div>
              <button
                className="Login-button"
                type="submit"
                style={{ background: "#2a8f47" }}
              >
                Sign in
              </button>
            </Form>
          </Formik>
        </div>

        <div className="login-register">
          <div className="login-register-text">
            <p>New to GitHub?</p>
            <a href="/register">Create an account.</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
