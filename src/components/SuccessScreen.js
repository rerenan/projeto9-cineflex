import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SuccessScreen({name, cpf, session, chosenSeats, movieNameImg}){
    
    return(
        <FinalScreen>
                <span>Pedido feito com sucesso!</span>
            <Contents>
                <Text>
                    <h2>Filme e sessão</h2>
                    <h4>{movieNameImg[0]}</h4>
                    <h4>{session[0]} {session[1]}</h4>
                </Text>
                <Text>
                    <h2>Ingressos</h2>
                {chosenSeats.map((seat)=> <h4>Assento {seat}</h4>)}
                </Text>
                <Text>
                    <h2>Comprador</h2>
                    <h4>Nome: {name}</h4>
                    <h4>CPF: {cpf}</h4>
                </Text>
            </Contents>
            <StyledLink to="/">Voltar pra Home</StyledLink>
        </FinalScreen>
    )
}

const FinalScreen=styled.div`
    margin-top:65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin: 35px 100px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #247A6B;
        text-align: center;
        letter-spacing: 0.04em;
    }
`
const Contents= styled.div`
    width: 100%;
    padding: 0px 28px;
    box-sizing: border-box;
   
`
const Text= styled.div`
    color: #293845;
    letter-spacing: 0.04em;
    margin-bottom: 40px;
    h2{
        margin-bottom: 15px;
        font-weight: 700;
        font-size: 25px;
        line-height: 28px;
        
    }
    h4{ 
        margin: 4px 0px;
        font-size: 22px;
        line-height: 26px;
    }    
`
const StyledLink = styled(Link)`
    padding: 10px 40px;
    background-color:#E8833A;
    border-radius: 3px;
    border: none;
    color: white;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin-top: 36px;
    margin-bottom: 58px;
    :active{
        transform: scale(0.90);
    }
`