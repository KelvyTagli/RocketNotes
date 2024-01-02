import { Plus } from "@phosphor-icons/react";

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'

import { ButtonText} from '../../components/ButtonText'

import { Input } from '../../components/Input'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title='Todos' $isactive="true"/></li>
                <li><ButtonText title='NodeJs'/></li>
                <li><ButtonText title='React'/></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo titulo'/>
            </Search>

            <Content>

            </Content>

            <NewNote>
                <Plus size={20} color="#080808" />
                Criar nota
            </NewNote>
        </Container>
    )
}