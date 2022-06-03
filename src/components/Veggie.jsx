import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide' // carosello
import { Wrapper, Card, Gradient } from './style/styled-css'
import { Link } from 'react-router-dom'

import '@splidejs/react-splide/css';
import api from '../api'

const Veggie = () => {
    // all'interno di useState va defito il tipo di variabile che ci servirà, in questo caso un array
    const [veggie, setVeggie] = useState([])
    // metodo invocato al caricamento della pagina
    useEffect(() => {
        getVeggie()
    }, []);

    const getVeggie = async () => {
        const checkLocalStorage = localStorage.getItem('veggie')
        if (checkLocalStorage) {
            setVeggie(JSON.parse(checkLocalStorage))
        } else {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${api.REACT_API_KEY}&number=9&tags=vegetarian`
            )
            const data = await response.json()
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            // una best practice in react, è utilizzare sempre il setVariableName per modificare l'oggetto, invece di sovrascriverlo .
            setVeggie(data.recipes)
        }
    }

    return (
        <div>
            <Wrapper>
                <h3>Vegeterian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem'
                }}>
                    {/* invece di utilizzare ngFor, per ciclare un'oggetto utilizziamo map */}
                    {veggie.map(recipe => {
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
    )
}


export default Veggie;