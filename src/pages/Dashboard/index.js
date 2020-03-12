import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Container, Time } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Diego Ferndandes</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Emerson Oliveira</span>
        </Time>
        <Time>
          <strong>12:00</strong>
          <span>Emerson Oliveira</span>
        </Time>
      </ul>
    </Container>
  );
}
