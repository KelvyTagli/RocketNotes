import { Container, Form } from './styles'

import { Header } from '../../components/Header'

import { Input } from '../../components/Input'

import { NoteItem } from '../../components/NoteItem'

import { Section } from '../../components/Section'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder='Titulo'/>

                    <textarea placeholder='Observações'></textarea>

                    <Section title='Links úteis'>
                        <NoteItem value='http://github.com/kelvytagli'/>
                        <NoteItem isNew placeholder='Novo link'/>
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            <NoteItem value='React'/>
                            <NoteItem value='Javascript'/>
                            <NoteItem value='NodeJs'/>
                            <NoteItem isNew placeholder='Nova tag'/>
                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}