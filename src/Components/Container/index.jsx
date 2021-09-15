import React from "react";
import Titulo from "../Titulo";
import Conta from "../Conta";
import { fundoClaro } from "../UI/variaveis";
import styled from "styled-components";
import { Extrato } from "../Extrato";


const Container = styled.div`
  background-color: ${ ({theme}) =>  theme.body};
  min-height: 90vh;
  padding: 0px 15vw;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${ ({theme}) =>  theme.text};

`

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};

