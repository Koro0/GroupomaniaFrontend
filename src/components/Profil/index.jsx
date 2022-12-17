import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserService } from '../UserServices'


export default function Profil() {

  const [pseudo, setPseudo] = useState()

  useEffect(() => {
    UserService.getPseudo().then((data) => setPseudo(data))
    console.log(pseudo)
  })

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <form action="POST">
          <label htmlFor="Pseudo :">Pseudo :</label>
          <input type="text" value={data} />
        </form>
      </div>
    </div>
  )
}
