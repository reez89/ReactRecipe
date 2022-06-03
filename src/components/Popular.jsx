import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide' // carosello
import { Wrapper, Card, Gradient } from './style/styled-css'
import { Link } from 'react-router-dom'
import '@splidejs/react-splide/css';
import api from '../api'

const Popular = () => {
    // all'interno di useState va defito il tipo di variabile che ci servirà, in questo caso un array
    const [popular, setPopular] = useState([])
    // metodo invocato al caricamento della pagina
    useEffect(() => {
        getPopular()
    }, []);

    const getPopular = async () => {
        const checkLocalStorage = localStorage.getItem('popular')
        if (checkLocalStorage) {
            setPopular(JSON.parse(checkLocalStorage))
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${api.REACT_API_KEY}&number=9`
            )
            const data = await response.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            // una best practice in react, è utilizzare sempre il setVariableName per modificare l'oggetto, invece di sovrascriverlo .
            setPopular(data.recipes)
        }
    }
    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem'
                }}>
                    {/* invece di utilizzare ngFor, per ciclare un'oggetto utilizziamo map */}
                    {popular.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/' + recipe.id}>
                                        <p  >{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                    </Link>
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}



export default Popular;
