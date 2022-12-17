import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserService } from '../../components/UserServices'

export default function Profil() {
    const [apiUserPseudo, setApiUserPseudo] = useState('')
    useEffect(() => {
        UserService.getPseudo().then((data) => setApiUserPseudo(data))
    })
    const handleSubmit = () => {
        //UserService.
    }
    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label> Choose your Pseudo for comment :</label>
                <input type="text" value={apiUserPseudo} />
            </form>
        </div>
    )
}
