import { Plus } from "@phosphor-icons/react";

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'

import { ButtonText} from '../../components/ButtonText'

import { Input } from '../../components/Input'

import { Section } from '../../components/Section'

import { Note } from '../../components/Note'

import { useState, useEffect } from "react";

import { api } from "../../Services/api";

export function Home() {
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()
    },[])
    
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title='Todos' $isactive="true"/>
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText title={tag.name}/>
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo titulo'/>
            </Search>

            <Content>
                <Section title='Minhas notas'>
                    <Note data={{ title: 'React', tags: [{id:'1', name:'react'}, {id:'2', name: 'NodeJs'}]}}/>
                </Section>
            </Content>

            <NewNote to='/new' >
                <Plus size={20} color="#080808" />
                Criar nota
            </NewNote>
        </Container>
    )
}