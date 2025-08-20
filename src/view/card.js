import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: white;
    padding: 20px;
    width: 100%;
    max-width: 300px;
    text-align: center;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;

const Titulo = styled.h2`
    margin: 15px 0;
`;

const Texto = styled.p`
    font-size: 14px;
    color: #000;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`;

const Input = styled.input`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 8px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   
    &:hover {
        background-color: #45a049;
    }
`;

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export default function Card() {
  return (
    <CardContainer>
        <Img src ="https://http2.mlstatic.com/D_NQ_NP_774535-MLB72743157850_112023-O-quadro-vazado-cardume-peixes-the-chosen-mdf-130cm-jesus.png" alt="desenho de uma folha"/>
      <Titulo>Página de Cadastro</Titulo>
      <Texto>Faça login para acessar a página da célula</Texto>

      <Form onSubmit={(e) => { e.preventDefault(); alert('Cadastro realizado!'); }}>
        <Input type="text" placeholder="Digite seu nome" required />
        <Input type="email" placeholder="Digite seu e-mail" required />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </CardContainer>
  );
}