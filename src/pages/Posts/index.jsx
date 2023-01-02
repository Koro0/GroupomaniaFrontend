import React from 'react'
import { useContext, useEffect } from 'react';

import Articles from '../../components/Articles';
import Context from '../../components/Context';
import { UserService } from '../../components/UserServices';

const Home = () => {
    const { setIsAdmin } = useContext(Context)

    useEffect(() => {
        UserService.checkAdmin().then((res) => setIsAdmin(res.data))
    }, [setIsAdmin])
    return (
        <main role="main">
            <div className="album py-5">
                <h1> Accueil</h1>
                <section className='container-md postSection'>
                    <Articles />
                </section>
            </div>
        </main>
    )
}
export default Home