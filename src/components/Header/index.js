import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Profile } from "./styles";

import logo from "~/assets/image/logo-purple.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
