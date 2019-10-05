import React from 'react'

function Header() {
    return (
        <div style={header}>
            <h1>Budget Tracker</h1>
        </div>
    )
}

const header = {
    background: '#333',
    color: '#FFF',
    textAlign: 'center',
    padding: '10px',
}

export default Header