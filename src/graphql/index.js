import { gql } from "@apollo/client";

export const GET_CONTATOS = gql`
    query{
    contatos {
        id
        nome
        email
        telefone
    }
    }
`;

const ContatoInput = {
    nome: "" , 
    email: "", 
    telefone: ""
}

export const ADD_CONTATOS = gql`
    mutation Mutation($data: ContatoInput) {
        criarContato(data: $data) {
        id
        nome
        email
        telefone
        }
    }
`;

