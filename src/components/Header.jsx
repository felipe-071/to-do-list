import styles from './Header.module.css'
import logotipo from '../assets/to-do-logo.svg';

export function Header() {
    return (
        <header>
            <img src={logotipo} alt="" />
        </header>
    )
}