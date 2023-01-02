import React from 'react'
import { useContext, useEffect } from 'react';
import styled from 'styled-components'
import Articles from '../../components/Articles';
import Context from '../../components/Context';
import { UserService } from '../../components/UserServices';

const PostsSection = styled.section`
display: flex;
flex-wrap: wrap;
`


const Home = () => {
    const { setIsAdmin } = useContext(Context)

    useEffect(() => {
        UserService.checkAdmin().then((res) => setIsAdmin(res.data))
    }, [setIsAdmin])
    return (
        <main role="main">
            <div class="album py-5">
                <h1> Accueil</h1>
                <PostsSection className='container-md'>
                    <Articles />
                </PostsSection>
            </div>
        </main>
    )
}
export default Home