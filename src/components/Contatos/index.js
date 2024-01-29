import React from "react";
import Item from "../Item";
import { useContatosContext } from "../../context/ContatosContext";

const ContainerContatos = ({children})=>(
  <div className="contatos">{children}</div>
)

function Contatos() {
  const { contatos } = useContatosContext();

  if (contatos.loading) return <ContainerContatos>Carregando...</ContainerContatos>

  return (
    <ContainerContatos>
      {contatos.itens.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ContainerContatos>
  );
}

export default Contatos;
