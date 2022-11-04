import React from 'react'
import styled from 'styled-components'

const FooterCopy = styled.p`
text-align: center;
left: 0;
right: 0;
margin: 0;
`

export default function Footer() {
    return (
        <div>
            <FooterCopy>Copyright © Groupomania 2022.</FooterCopy>
        </div>
    )
}
