import React from 'react'
import styled from 'styled-components'
import Articles from '../../components/Articles';


const PostsSection = styled.section`
display: flex;
flex-wrap: wrap;
margin: 15px;
`


const Home = () => {
    return (
        <div>
            <h1> Accueil</h1>
            <PostsSection className='p-container'>
                <Articles />
            </PostsSection>

        </div>
    )
}
export default Home