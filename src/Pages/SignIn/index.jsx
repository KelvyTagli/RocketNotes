import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { useState } from "react";

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { useAuth } from "../../hooks/auth.jsx";

import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";


export function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({email, password})
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={EnvelopeSimple} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" icon={LockSimple} onChange={e => setPassword(e.target.value)}/>

                <Button title='Entrar' onClick={handleSignIn}/>
                <Link to='/register'>
                    Criar conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}