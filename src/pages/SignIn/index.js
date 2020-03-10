import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/image/logo.svg";
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarBer" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Seu e-mail" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
