import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { useAuth } from "../../hooks/auth.jsx";

import { EnvelopeSimple, LockSimple } from "@phosphor-icons/react";


export function SignIn() {

    const data = useAuth()

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={EnvelopeSimple}/>
                <Input placeholder="Senha" type="password" icon={LockSimple}/>

                <Button title='Entrar'/>
                <Link to='/register'>
                    Criar conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}