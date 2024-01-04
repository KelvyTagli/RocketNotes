import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { EnvelopeSimple, LockSimple, User } from "@phosphor-icons/react";


export function SignUp() {
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                
                <h2>Criar sua conta</h2>
                <Input placeholder="Nome" type="text" icon={User}/>
                <Input placeholder="E-mail" type="text" icon={EnvelopeSimple}/>
                <Input placeholder="Senha" type="password" icon={LockSimple}/>

                <Button title='Cadastrar'/>
                <a href="#">
                    Voltar para o login
                </a>
            </Form>
        </Container>
    )
}