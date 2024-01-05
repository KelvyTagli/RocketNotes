import {Container, Form, Avatar} from './styles'

import { ArrowLeft, EnvelopeSimple, LockSimple, User, Camera } from "@phosphor-icons/react";

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <ArrowLeft size={24} color='#999591'/>
                </a>
            </header>

            <Form>
                <Avatar>
                    <img src="http://github.com/kelvytagli.png" alt="Foto do úsuario" />

                    <label htmlFor='avatar'>
                        <Camera size={20} color="#312e38" />

                        <input id='avatar' type='file' />
                    </label>
                </Avatar>

                <Input placeholder='Nome' type='text'icon={User}/>
                <Input placeholder='E-mail' type='text'icon={EnvelopeSimple}/>
                <Input placeholder='Senha atual' type='password'icon={LockSimple}/>
                <Input placeholder='Nova senha' type='password'icon={LockSimple}/>

                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}