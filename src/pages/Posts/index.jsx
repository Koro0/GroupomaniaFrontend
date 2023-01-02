import React from 'react'
import styled from 'styled-components'
import Articles from '../../components/Articles';


const PostsSection = styled.section`
display: flex;
flex-wrap: wrap;
`


const Home = () => {
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