import styled from "styled-components"



export const ImgTitulo = styled.div`
    width: 100%;
`
export const ConteudoListPage= styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 3fr 3fr 3fr 3fr 3fr ;
    width: 70%;
    height: 100%;
    text-align: center;
    
` 
export const Button = styled.button`
    margin: 10px;
    background: rgba(120, 10, 10, 0.7);
    color: white;
    border-radius: 10px;
    box-shadow: 1.25px 1.25px 2px 	#4169E1;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 5%;
`

export const PrimeiraPaginacao = styled.div`
    display: flex;
    justify-content: center;
`

export const Paginacao = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
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
    margin: 10px;


`