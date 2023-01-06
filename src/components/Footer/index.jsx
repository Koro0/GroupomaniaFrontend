import React from 'react'

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div>
            <p className='footerCopy'>Copyright © Groupomania {currentYear}.</p>
        </div>
    )
}
