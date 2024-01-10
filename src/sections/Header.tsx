//Assets
import logoTodo from '../assets/Logo.svg';
//CSS
import styles_Header from './styles/styles_Header.module.css';

export function Header() {

    return (
        <header className={styles_Header.header}>
            <img src={logoTodo} alt='Logomarca Todo' />
        </header>
    );
}