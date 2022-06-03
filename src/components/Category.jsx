import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { SLink, List } from './style/styled-css'


const Category = () => {
    return (
        <List>
            <SLink to={'/cousine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cousine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cousine/Thai'}>
                <GiNoodles />
                <h4>Thai Food</h4>
            </SLink>
            <SLink to={'/cousine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
}



export default Category;
