<template>
  <Form onSubmit={(e) > onCreatePost(e)}>
      <Container className="cont_inputs">
        <Form.Group controlId="username">
          <Form.Label className="discret mb-0">
            Veuillez commencez votre nom d'utilisateur par "E"
          </Form.Label>
          <Form.Control
            value={fields.username}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre nom d'utilisateur"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
            placeholder="Entrer votre mot de passe"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            value={fields.email}
            onChange={handleFieldChange}
            type="email"
            placeholder="Entrer votre courriel"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Control
            value={fields.firstName}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre prénom"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control
            value={fields.lastName}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre nom de famille"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="department">
          <Form.Control
            as="select"
            defaultValue={fields.department}
            onChange={handleFieldChange}
            className="select_form active_select "
            required
          >
            <option value="COMPUTER_SCIENCE">Informatique</option>
            <option value="ARCHITECTURE">Architecture</option>
            <option value="NURSING">Infirmier</option>
          </Form.Control>
        </Form.Group>
        <Container className="cont_btn">
          <p>{errorMessage}</p>
          <button className="btn_submit">Confirmer</button>
        </Container>
      </Container>
    </Form>
</template>

<script>
import axios from "axios";
import React from "react";
import auth from "../../services/Auth";
import { useState } from "react";
import { useFormFields } from "../../lib/hooksLib";
import { useHistory } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
export default {
    department: "COMPUTER_SCIENCE",
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
     let,history = useHistory(),

  methods,onCreatePost(e) {
    e.preventDefault();

    if (!fields.username.startsWith("E")) {
      setErrorMessage("Le nom d'utilisateur doit commencer par 'E'.");
      return;
    }

    axios
      .post("http://localhost:9090/signUp/student", fields)
      .then((response) => {
        auth.login(() => {
          history.push({
            pathname: `/home/${response.data.username}`,
            state: response.data,
          });
        }, response.data);
      })
      .catch((error) => {
        setErrorMessage("Le nom d'utilisateur ou le courriel existe déjà.");
      });
  }
}
</script>
<style>
.cont_principal {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.cont_central {
  padding: 2%;
  background-image: linear-gradient(-226deg, #ffffff 8%, #eef3f5 100%);
  border-radius: 8px;
  transition: all 0.5s;
  min-width: 40%;
  margin: 5% auto;
}

.cont_form {
  min-width: 100%;
}

.cont_tabs_login {
  position: relative;
  float: left;
  width: 100%;
  font-size: 30px;
}

.cont_text_inputs {
  position: relative;
  float: left;
  width: 100%;
  margin-top: 20px;
}

.cont_buttons_sign_up {
  margin-bottom: 5%;
  margin-top: 10%;
}

.cont_buttons_sign_up div {
  display: inline-block;
}

.btn_link {
  background: linear-gradient(-87deg, #aeb4b4 40%, #9bacb3 100%);
  box-shadow: 0px 2px 20px 2px rgba(192, 220, 223, 0.5);
  border-radius: 8px;
  padding: 15px 20px;
  border: none;
  color: #fff;
  font-size: 15px;
  float: none;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
}

.btn_link_selected {
  background: rgba(255, 64, 88, 0.74) !important;
  box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5) !important;
}

.cont_title_form {
  width: 100%;
  box-shadow: none !important;
  color: rgba(255, 64, 88, 0.74);
}

.cont_title_form h2 {
  font-weight: bold;
  font-size: 2.5rem;
}

.discret {
  color: #9bacb3;
}

.cont_inputs {
  width: 100%;
  margin-top: 2%;
}

.input_form {
  width: 90%;
  border: none;
  border-bottom: 1px solid #b0bec5;
  background-color: transparent;
  font-size: 20px;
  outline: none;
  transition: all 0.5s;
  border-radius: 0%;

  margin: 5% 5%;
  padding: 4% 2%;
  opacity: 1;
  height: 5px;
  display: block;
}

.input_form:focus {
  box-shadow: none;
  background-color: transparent;
}

.select_form {
  width: 90%;
  border: none;
  border: 1px solid #b0bec5;
  background-color: transparent;
  font-size: 20px;
  outline: none;
  transition: all 0.5s;

  margin: 5% 5%;
  padding: 0% 2%;
  opacity: 1;
  height: 50px;
  font-size: 20px;
  display: block;
}

.btn_submit {
  background: rgba(255, 64, 88, 0.74);
  box-shadow: 0px 2px 20px 2px rgba(255, 114, 132, 0.5);
  border-radius: 8px;
  padding: 15px 30px;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.labelFields {
  font-size: 1rem;
  color: #999;
  margin-bottom: -2%;
}

.modal_separator {
  color: #999;
  width: 12%;
}

.pdf-container {
  width: 100%;
  height: 800px;
  background-color: #e4e4e4;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textarea_form {
  width: 90%;
  border: none;
  border: 1px solid #b0bec5;
  background-color: transparent;
  font-size: 20px;
  outline: none;
  transition: all 0.5s;
  margin: 5% 5%;
  padding: 0% 2%;
  opacity: 1;
  font-size: 20px;
  display: block;
}
</style>