import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FootBar from './FootBar'

export default function SessionsSelection({SetSession, movieNameImg}){
    const [days, SetDays] = useState([]);
    const params = useParams();
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.movieId}/showtimes`)
        promise
            .then((response)=> SetDays(response.data.days))
    },[]) 
    return (
        <SessionsScreen>
            <h3>Selecione o horário</h3>
            
            {days.map((session,index)=> 
                <Sessions key={index}>
                    <span>{session.weekday} - {session.date}</span>
                    <ButtonsContainer>
                        {session.showtimes.map((hour, index)=> 
                        <StyledLink key={index} onClick={()=>SetSession([session.date,hour.name, session.weekday])} to={`/assentos/${hour.id}`}>{hour.name}</StyledLink>
                        )}
                    </ButtonsContainer>
                </Sessions>
            )}
            <FootBar movieNameImg={movieNameImg} session='' />
        </SessionsScreen>
    )
}

const SessionsScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 28px;
    margin-top: 65px;
    margin-bottom:150px;
    h3 {
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
`

const Sessions = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    margin-top: 20px;
    margin: px 0px;
    span {
        color: #293845;
        margin-bottom: 20px;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
    }
`
const ButtonsContainer = styled.div`
    display:flex;
    justify-content:start;
`

const StyledLink = styled(Link)`
    padding: 7px 15px;
    margin-right: 10px;
    background-color:#E8833A;
    border-radius: 3px;
    border: none;
    font-size:15px;
    color: white;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-decoration: none;
    :active{
        transform: scale(0.95);
    }
`