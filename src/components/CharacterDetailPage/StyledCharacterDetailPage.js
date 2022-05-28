import styled from 'styled-components'

export const BackgroundApp = styled.div`
    background-image: url("https://lumiere-a.akamaihd.net/v1/images/sa_starwars_virtualbg_16x9_024_0f1a87c3.jpeg");
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    
`    
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

export const ConteudoDetailPage= styled.div`
    display: flex;
    font-size: large;
    width: 40%;
    height: max-content;
    margin: 5% auto;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    background-color: #000000;
    padding: 20px;
    justify-content: center;
    border-radius: 90px;
    box-shadow: 2px 2px 2px #CEFF19;
`