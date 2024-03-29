import { HeaderContainer } from "./style";
import { Timer, Scroll } from "phosphor-react";

import logoIgnite from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header(){
    return(
        <HeaderContainer>
            <img width={30} src={logoIgnite} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}