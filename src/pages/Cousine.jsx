import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '../components/style/styled-css'
import { Link, useParams } from 'react-router-dom';
import api from '../api'


const Cousine = () => {

    const [cuisine, setCuisine] = useState([])
    /* useParams mi permette di prendere l'url corrisponendete al link cliccato, un po' come lo snapshot in Angular. */
    let params = useParams()

    const getCousine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api.REACT_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCousine(params.type)
    }, [params.type])

    return (
        <Grid 
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }} 
        >
            {cuisine.map(item => {
                return (
                    <Link to={'/recipe/' + item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                )
            })}
        </Grid >
    );
}

const Card = styled.div`
margin-top: 2rem;
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Cousine;
