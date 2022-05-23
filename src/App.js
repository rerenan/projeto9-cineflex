import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import MovieSelection from './assets/components/MovieSelection'
import SessionsSelection from './assets/components/SessionsSelection'
import SeatsSelection from './assets/components/SeatsSelection'
import SuccessScreen from './assets/components/SuccessScreen'


export default function App() {
    
    const [name, SetName] = useState("");
    const [cpf, SetCpf] = useState("");
    const [session, SetSession]=useState([])
    const [chosenSeats,SetChosenSeats] = useState([])
    const [movieNameImg, SetMovieNameImg] = useState([]);

    useEffect(()=>{
        if(window.location.pathname != '/'){
            window.location.href = "/"
        }
    },[])
    return (
        <Global>
            <BrowserRouter>
                <TopBar>
                    CINEFLEX
                </TopBar>
                <Routes>
                    <Route path="/" element={< MovieSelection SetMovieNameImg={SetMovieNameImg} />}/>
                    <Route path="/sessoes/:movieId" element={<SessionsSelection SetSession={SetSession} movieNameImg={movieNameImg}/>}/>
                    <Route path='/assentos/:sessionId' element={<SeatsSelection  name={name} SetName={SetName} cpf={cpf} SetCpf={SetCpf} SetChosenSeats={SetChosenSeats} session={session} movieNameImg={movieNameImg}/>}/>
                    <Route path='/sucesso' element={<SuccessScreen name={name} cpf={cpf} session={session} chosenSeats={chosenSeats} movieNameImg={movieNameImg}/>}/>
                </Routes>
            </BrowserRouter>
        </Global>
    )
}
const Global = styled.div`
    font-family:'Roboto', sans-serif;
`

const TopBar = styled.div`
    width: 100%;
    height: 65px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#C3CFD9;
    color:#E8833A;
    font-size: 35px;
    position: fixed;
    top: 0;
    left: 0;
`