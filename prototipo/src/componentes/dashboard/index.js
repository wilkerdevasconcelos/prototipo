import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {

    const history = useHistory()

    useEffect(() => {
        !localStorage.getItem('user') && history.push('/login')
    }, [])

    const exit = () => {
        localStorage.setItem('user', '')
        history.push('/login')
    }

    return (
        <div>
            <button onClick={exit}>Sair</button>
        </div>
    )
}

export default Dashboard