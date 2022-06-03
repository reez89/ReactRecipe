import styled from 'styled-components' //styled component , pratica molto utilizzata in react
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';


export const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    grid-gap: 3rem; 
`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(.8);

    h4{
        color: white;
        font-size: .8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`;

export const FormStyle = styled.form`
    margin: 0rem 10rem;
    div{
        width: 100%;
        position: relative;
    }
    input{
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        padding: 1rem 3rem;
        color: white;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%) ;
        color: white;
    }
`;

export const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

export const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;

