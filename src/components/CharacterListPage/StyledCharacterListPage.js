import styled from "styled-components"

export const TituloPagina = styled.div`
    box-shadow: 2px 2px 2px #CEFF19;
    width: 70%;
    height: max-content;
    padding: 1px;
    background-color: #A61C00;
    text-align: center;
    border-radius: 90px;
    font-family: 'Courier New', Courier, monospace;  
`
export const ConteudoListPage= styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    text-align: center;
    
` 
export const Button = styled.button`
    margin: 10px;
    background-color: #000000;
    color: white;
    border-radius: 90px;
    box-shadow: 2px 2px 2px #D4F518;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 5%;
`

export const PrimeiraPaginacao = styled.div`
    display: flex;
    justify-content: center;
`

export const Paginacao = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

export const UltimaPaginacao = styled.div`
    display: flex;
    justify-content: center;
`
export const BotaoPaginacao = styled.button`
    background-color: #A61C00;
    color: white;
    border-radius: 90px;
    width: 120px;
    margin-bottom: 10px;


`