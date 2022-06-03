import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import api from '../api'
import styled from 'styled-components'
import { Grid } from '../components/style/styled-css'
import { Link } from 'react-router-dom';

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearch = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api.REACT_API_KEY}&query=${name}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
    getSearch(params.search)
  }, [params.search])

  return (
    <Grid>
      {searchedRecipes.map(item => {
        return (
          <Link to={'/recipe/' + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}
    </Grid>
  )
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

export default Searched;
