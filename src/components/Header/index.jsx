import { Container, Profile,Logout } from "./styles";
import { Power } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const {signOut} = useAuth()

    return (
        <Container>
            <Profile to='/profile' >
                <img src="http://github.com/kelvytagli.png" alt="foto do Usuário" />
                <div>
                    <span>Bem-Vindo</span>
                    <h3>Kelvy Tagliacolli</h3>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <Power size={24} color="#999591" />
            </Logout>
            
        </Container>
    )
}