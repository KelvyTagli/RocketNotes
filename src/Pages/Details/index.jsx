import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details() {

    return (
        <Container>
            <Header/>
            <Section title="links úteis">
                <Links>
                    <li>
                        <a href="http:\\github.com/kelvytagli" target="_blank">github</a>
                    </li>
                    <li>items</li>
                    <li>items</li>
                </Links>
            </Section>
            <Button title='Entrar' loading/>
        </Container>
    )
}