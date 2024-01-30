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
    nome: "", 
    email: "", 
    telefone: ""
}

const FiltroInput ={
    id: 0,
    email: ""
  }
  
export const ADD_CONTATOS = gql`
    mutation criarContato($data: ContatoInput) {
        criarContato(data: $data) {
        id
        nome
        email
        telefone
        }
    }
`;

export const REMOVE_CONTATOS = gql`
    mutation deletarContato($filtro: FiltroInput) {
        deletarContato(filtro: $filtro) 
    }
`;

export const UPDATE_CONTATOS = gql`
    mutation atualizarContato($id: Int!, $data: ContatoInput) {
        atualizarContato(id: $id, data: $data) {
            id
            nome
            email
            telefone
        }
    }    
`;