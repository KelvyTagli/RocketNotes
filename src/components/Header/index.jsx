import { Container, Profile,Logout } from "./styles";
import { Power } from "@phosphor-icons/react";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="http://github.com/kelvytagli.png" alt="foto do Usuário" />
                <div>
                    <span>Bem-Vindo</span>
                    <h3>Kelvy Tagliacolli</h3>
                </div>
            </Profile>

            <Logout>
                <Power size={24} color="#999591" />
            </Logout>
            
        </Container>
    )
}