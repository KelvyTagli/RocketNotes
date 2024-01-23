import {Container, Form, Avatar} from './styles'

import { useState } from 'react';

import { ArrowLeft, EnvelopeSimple, LockSimple, User, Camera } from "@phosphor-icons/react";

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom';

import avatarImage from '../../assest/user.png'

import { api } from '../../Services/api';

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setOldPassword] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarImage

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user,updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
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
                    <img src={avatar} alt="Foto do úsuario" />

                    <label htmlFor='avatar'>
                        <Camera size={20} color="#312e38" />

                        <input id='avatar' type='file' onChange={handleChangeAvatar}/>
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
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={LockSimple}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title='Salvar' onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}