import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'

const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getLogs()
        //eslint-disable-next-line
    }, [])

    const getLogs = async () => {
        setLoading(true)
        
        const res = await fetch('/logs')
        // O fetch é diferente do axios. Ele demanda essa chamada de conversão para json.
        const data = await res.json()

        setLogs(data)
        setLoading(false)
    }

    if(loading) return <Preloader/>

    return (
        <div className="container">
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {
                    !loading && logs.length === 0 ? <h4 className="center">There are no logs...</h4> :
                    logs.map(log => <LogItem key={log.id} log={log} />)
                }
            </ul>
        </div>
        
    )
}


export default Logs