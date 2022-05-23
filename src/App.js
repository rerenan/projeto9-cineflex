import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

import MovieSelection from './components/MovieSelection'
import SessionsSelection from './components/SessionsSelection'
import SeatsSelection from './components/SeatsSelection'
import SuccessScreen from './components/SuccessScreen'
import BackIcon from './assets/img/backicon.png'

export default function App() {
    
    const [name, SetName] = useState("");
    const [cpf, SetCpf] = useState("");
    const [session, SetSession]=useState([])
    const [chosenSeats,SetChosenSeats] = useState([])
    const [movieNameImg, SetMovieNameImg] = useState([]);
    const [backIcon, SetBackIcon] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        if(window.location.pathname !== '/'){
            window.location.href = "/"
        }
    },[])
    
    return (
        <Global>
            
                <TopBar>
                    CINEFLEX
                    {backIcon? <img src={BackIcon} onClick={()=> navigate(-1)}/>: null}
                </TopBar>
                <Routes>
                    <Route path="/" element={< MovieSelection SetMovieNameImg={SetMovieNameImg} SetBackIcon={SetBackIcon}/>}/>
                    <Route path="/sessoes/:movieId" element={<SessionsSelection SetSession={SetSession} movieNameImg={movieNameImg}/>}/>
                    <Route path='/assentos/:sessionId' element={<SeatsSelection  name={name} SetName={SetName} cpf={cpf} SetCpf={SetCpf} SetChosenSeats={SetChosenSeats} session={session} movieNameImg={movieNameImg}/>}/>
                    <Route path='/sucesso' element={<SuccessScreen name={name} cpf={cpf} session={session} chosenSeats={chosenSeats} movieNameImg={movieNameImg}/>}/>
                </Routes>
            
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
    img{
        width: 43px;
        position: absolute;
        left: 11px;
        z-index: 3;
    }
`