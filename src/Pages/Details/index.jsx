import { Container, Links, Content} from "./styles"

import { Header } from "../../components/Header"

import { ButtonText } from "../../components/ButtonText"

import { Section } from "../../components/Section"

import { Tag } from "../../components/Tag"

import { Button } from "../../components/Button"


export function Details() {

    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <ButtonText title='Excluir nota'/>
                    <h1>Introdução ao React</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet aliquam cupiditate id ea eum laudantium ad commodi itaque odio ipsum, numquam repudiandae atque quae. Doloribus nostrum similique consequuntur tempora!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati non ipsam ut dolore, impedit ducimus voluptates? Cumque nulla voluptatum quisquam pariatur harum beatae alias, libero qui neque dolores. Maxime?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum quidem sunt. Nam, fugiat inventore corrupti sunt molestiae at pariatur ullam voluptatibus laudantium esse, sit dolorem necessitatibus possimus autem? Temporibus?
                    </p>
                    <Section title="links úteis">
                        <Links>
                            <li><a href="http://github.com/kelvytagli" target="_blank">Meu Github</a></li>
                            <li><a href="http://rocketseat.com.br/Explorer" target="_blank">rocketseat.com.br</a></li>
                        </Links>
                    </Section>
                    
                    <Section title='Marcadores'>
                        <Tag title='express'/>
                        <Tag title='Nodejs'/>
                    </Section>

                    <Button title='Entrar' loading/>
                </Content>
            </main>
        </Container>
    )
}