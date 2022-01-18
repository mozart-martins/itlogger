import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'


const Logs = ({ log: { logs, loading }, getLogs }) => {
    
    useEffect(() => {
        getLogs()
        //eslint-disable-next-line
    }, [])

    if(loading || logs === null) return <Preloader/>

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

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
})

// Esse export default é a tampa que é importada via a constante Logs
export default connect(mapStateToProps, { getLogs })(Logs)