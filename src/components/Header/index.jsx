import { Container, Profile,Logout } from "./styles";
import { Power } from "@phosphor-icons/react";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../Services/api";
import avatarImage from '../../assest/user.png'

export function Header() {
    const {signOut, user} = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImage

    return (
        <Container>
            <Profile to='/profile' >
                <img src={avatarUrl} alt={`Foto do ${user.name}`} />
                <div>
                    <span>Bem-Vindo</span>
                    <h3>{user.name}</h3>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <Power size={24} color="#999591" />
            </Logout>
            
        </Container>
    )
}