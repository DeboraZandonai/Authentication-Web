import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./styles.css";

const Register = () => {
  const handleSubmit = (values) => {
    axios.post("http://localhost:3333/api/user", values).then((resp) => {
      const { data } = resp;
      if (data) {
        history.push("/login");
      }
    });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  return (
    <>
      <div className="container-register">
        <h1>Create your account</h1>

        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="">
            <div className="">
              <Field
                name="firstName"
                className="register-group"
                placeholder="Digite seu nome"
              />
              <ErrorMessage name="firstName" className="" />
            </div>
            <div className="">
              <Field
                name="email"
                className="register-group"
                placeholder="Digite seu e-mail"
              />
              <ErrorMessage name="email" className="Login-Error" />
            </div>
            <div className="">
              <Field
                name="data"
                className="register-group"
                placeholder="Digite sua data de nascimento"
              />
              <ErrorMessage name="data" className="Login-Error" />
            </div>
            <div className="">
              <Field
                name="cpf"
                className="register-group"
                placeholder="Digite seu cpf"
              />
              <ErrorMessage name="cpf" className="Login-Error" />
            </div>
            <div className="">
              <Field
                name="cep"
                className="register-group"
                placeholder="Digite seu cep"
              />
              <ErrorMessage name="cep" className="Login-Error" />
            </div>
            <div className="">
              <Field
                name="endereco"
                className="register-group"
                placeholder="Digite seu endereço"
              />
              <ErrorMessage name="endereco" className="Login-Error" />
            </div>
            <div className="">
              <Field
                name="telefone"
                className="register-group"
                placeholder="Digite seu telefone"
              />
              <ErrorMessage name="telefone" className="Login-Error" />
            </div>
            <div className="">
              <Field
                name="password"
                className="register-group"
                placeholder="Digite sua senha"
              />
              <ErrorMessage name="password" className="Login-Error" />
            </div>
            <div className="button">
              <button className="register-button" type="submit">
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Register;
