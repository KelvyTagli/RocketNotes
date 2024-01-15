import {Container, Form, Avatar} from './styles'

import { useState } from 'react';

import { ArrowLeft, EnvelopeSimple, LockSimple, User, Camera } from "@phosphor-icons/react";

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom';

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function hadleUpdate() {
        const user = {
            name,
            email,
            Password: passwordNew,
            oldPassword: passwordOld
        }

        await updateProfile({ user })
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <ArrowLeft size={24} color='#999591'/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="http://github.com/kelvytagli.png" alt="Foto do úsuario" />

                    <label htmlFor='avatar'>
                        <Camera size={20} color="#312e38" />

                        <input id='avatar' type='file' />
                    </label>
                </Avatar>

                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={User}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder='E-mail'
                    type='text'
                    icon={EnvelopeSimple}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />

                <Input 
                    placeholder='Senha atual'
                    type='password'
                    icon={LockSimple}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={LockSimple}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title='Salvar' onClick={hadleUpdate}/>
            </Form>
        </Container>
    )
}