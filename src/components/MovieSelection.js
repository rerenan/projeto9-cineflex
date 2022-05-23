import styled from 'styled-components';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function MovieSelection({SetMovieNameImg, SetBackIcon}){
    
    const [movies, SetMovies] = useState([]);
    
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        SetBackIcon(false)
        promise.then(response => {
            SetMovies(response.data);
        })
    },[])

    return(
        <MoviesScreen>
            <span>Selecione o filme</span>
            <Movies>
                {movies.map((movie, index)=> 
                <Movie key={index}>
                    <Link  onClick={()=> {
                        SetMovieNameImg([movie.title, movie.posterURL])
                        SetBackIcon(true)
                        }} to={`/sessoes/${movie.id}`}>
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
    margin-top: 65px;
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