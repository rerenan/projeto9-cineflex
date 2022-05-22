import styled from 'styled-components';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function MovieSelection(){
    
    const [movies, SetMovies] = useState([]);
    
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then(response => {
            SetMovies(response.data);
        })
    },[])

    return(
        <MoviesScreen>
            <span>Selecione o filme</span>
            <Movies>
                {movies.map((movie)=> 
                <Movie>
                    <Link to={`/sessoes/${movie.id}`}>
                        <img src={movie.posterURL}/>
                    </Link>
                </Movie>)}
            </Movies>
        </MoviesScreen>
    )
}

const MoviesScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin-top: 40px;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
`
const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    `
const Movie = styled.div`
    padding:8px;
    margin: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
    width:140px;
    }`