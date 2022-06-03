import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import api from '../api'

const Recipe = () => {

    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState("instructions")
    let params = useParams();

    const getRecipe = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api.REACT_API_KEY}`)
        const response = await data.json()
        setRecipe(response)
    }

    useEffect(() => {
        getRecipe(params.id)
    }, [params.id])


    return (
        <DetailWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => { setActiveTab('instructions') }}>Instructions</Button>
                <Button className={activeTab === 'ingridients' ? 'active' : ''} onClick={() => { setActiveTab('ingridients') }}>Ingridients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        {/* permette di renderizzare html con all'interno tag tipo <b></b>, anchor tags ecc */}
                        <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
                    </div>
                )}
                {activeTab === 'ingridients' && (
                    <ul>
                        {recipe.extendedIngredients.map((ingridient) => (
                            <li key={ingridient.id}>{ingridient.original}</li>)
                        )}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    h2{
        margin-bottom: 2rem;

    }
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    li{
        font-size: 1.2rem;
        line-height: 1.5rem;
    }
    ul{
        margin-top: 2rem;
    }

`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;
    margin-right: 2rem;
    cursor: pointer;
`

const Info = styled.div`
    margin-left: 10rem;
`

export default Recipe;
