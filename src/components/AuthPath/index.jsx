import React, { useContext } from 'react'

export default function AuthPath({ path, component }) {
    const { isAuthenticated } = useContext(Auth)
    return (
        <div>AuthPath</div>
    )
}
