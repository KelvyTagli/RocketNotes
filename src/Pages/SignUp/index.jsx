import { useState } from "react";

import { Container, Form, Background } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { api } from '../../Services/api'

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { EnvelopeSimple, LockSimple, User } from "@phosphor-icons/react";


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert('Preencha todos os campos!')
        }

        api.post("/users", {name, email, password}).then(() => {
            alert('Usuário cadastrado com sucesso!')
            navigate(-1)
        }).catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possivel cadastrar')
            }
        })
    }

    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                
                <h2>Criar sua conta</h2>
                <Input placeholder="Nome" type="text" icon={User} onChange={e => setName(e.target.value)}/>
                <Input placeholder="E-mail" type="text" icon={EnvelopeSimple} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" icon={LockSimple} onChange={e => setPassword(e.target.value)}/>

                <Button title='Cadastrar' onClick={handleSignUp}/>
                <Link to='/'>
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}