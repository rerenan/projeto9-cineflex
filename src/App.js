import styled from 'styled-components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MovieSelection from './assets/components/MovieSelection'
import Movie from './assets/components/Movie'
export default function App() {
    return (
        <Global>
            <BrowserRouter>
                <TopBar>
                    CINEFLEX
                </TopBar>
                <Routes>
                    <Route path="/" element={< MovieSelection />}/>
                    <Route path="/movie/:movieId" element={<Movie/>}/>
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
`