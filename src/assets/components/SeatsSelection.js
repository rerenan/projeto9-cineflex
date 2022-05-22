import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function SeatsSelection() {
    const [seats, SetSeats] = useState([]);
    const available = '#C3CFD9'
    const selected = '#8DD7CF'
    const unavailable = '#FBE192'
    const params = useParams();
    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.sessionId}/seats`)
        promise
            .then((response) => {
                SetSeats((response.data.seats).map((seat => ({ ...seat, 'isSelected': false }))))
            })
    }, [])

    function selectSeat(seatIndex) {
        if (!seats[seatIndex].isAvailable) {
            return alert("Esse assento não está disponível")
        }
        let newSeats = seats.map((seat, index) => {
            if (index === seatIndex && seat.isAvailable) {
                return {
                    ...seat,
                    isSelected: !seat.isSelected
                }
            } else {
                return { ...seat }
            }
        })
        SetSeats([...newSeats])
    }

    return (
        <SeatsScreen>
            <h3>Selecione o(s) assento(s)</h3>
            <SeatsBox>
                {seats.map((seat, index) => <Ball selected={seat.isSelected && seat.isAvailable ? selected : false} availability={seat.isAvailable ? available : unavailable} onClick={() => selectSeat(index)} >{index + 1}</Ball>)}
            </SeatsBox>
            <Subtitle>
                <Icon>
                    <Ball selected={selected} />
                    Selecionado
                </Icon>
                <Icon>
                    <Ball availability={available} />
                    Disponível
                </Icon>
                <Icon>
                    <Ball availability={unavailable} />
                    Indisponível
                </Icon>
            </Subtitle>
            <Inputs />
            <form>
                <Inputs>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input required type="text" id="name" placeholder="Digite seu nome..." />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input required type="text" id="cpf" placeholder="Digite seu CPF..." />
                </Inputs>
                <button>Reservar assento(s)</button>
            </form>
        </SeatsScreen>
    )
}

const SeatsScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    margin-bottom: 50px;
    h3 {
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
    form{
        width: 100%;
        padding: 0px 20px;
        box-sizing: border-box;
        label {
            color: #293845;
            font-size: 18px;
            margin-bottom: 5px;
        }
        input{
            margin-bottom: 22px;
            padding: 15px 10px;
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            font-size: 18px;
            line-height: 21px;
            ::placeholder, ::-webkit-input-placeholder{
                font-style: italic;
            }
            :-ms-input-placeholder {
                font-style: italic;
            }
        }
    }
    
`
const SeatsBox = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
`
const Ball = styled.div`
    width: 26px;
    height: 26px;
    margin: 8px 5px;
    background-color:${props => props.selected ? props.selected : props.availability};
    border: 1px solid #808F9D;
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    :active{
        transform: scale(0.90);
    }
`
const Subtitle = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    justify-content: space-evenly;
    color: #4E5A65;
    div {
        font-size:14px ;
        :active{
            transform: scale(1.00);
        }
    }
`
const Icon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Inputs = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`