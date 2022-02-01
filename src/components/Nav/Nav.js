import './Nav.scss'
import { navItems } from './navItems'
export function Nav(){
    return(
        <ul className='nav'>
            {navItems.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
    )
}