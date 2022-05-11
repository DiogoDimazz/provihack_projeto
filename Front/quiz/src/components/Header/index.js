import './styles.css'
import { NavLink } from 'react-router-dom'
import searchIcon from '../../assets/search-icon.svg'

export default function Header() {
    return (
        <header className='container-header'>
            <h1 className='logo-header'>LOGO</h1>
            <NavLink className='home-link link-header' to='/'>HOME</NavLink>
            <NavLink className='sobre-nos-link link-header' to='/sobre_nos'>SOBRE NÓS</NavLink>
            <NavLink className='forum-link link-header' to='/forum'>FÓRUM</NavLink>
            <NavLink className='voluntario-link link-header' to='/voluntario'>SEJA UM VOLUNTÁRIO</NavLink>
            <div className='input-group-header'>
                <input className='search-input-header' />
                <img className='search-icon-header' src={searchIcon} alt='icon' />
            </div>
            <div className='login-group-header'>
                <button className='login-btn-header'>LOGIN</button>
                <span className='cadastre-se-link-header'>ou Cadastre-se!</span>
            </div>
        </header>
    )
}