import { GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_LOGS
} from './types'


// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading()

//         const res = await fetch('/logs')
//         const data = await res.json()

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// GETS LOGS FROM SERVER
export const getLogs = () => async dispatch => {
    
    try {
        setLoading()
    
        const res = await fetch('/logs')
        const data = await res.json()

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

// Add a log record
export const addLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = fetch('/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(log)
            })

            const data = res.json()

            dispatch({
                type: ADD_LOG,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.statusText
            })
        }
    }
}

// Delete a log record
export const deleteLog = (id) => {
    return async (dispatch) => {
            try {
                setLoading()

                await fetch(`/logs/${id}`, {
                    method: 'DELETE'
                })

                dispatch({
                    type: DELETE_LOG,
                    payload: id
                })
            } catch (error) {
                dispatch({
                    type: LOGS_ERROR,
                    payload: error.response.statusText
                })
            }
    }
}

// Updates a log on server
export const updateLog = log => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch(`/logs/${log.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(log)
            })

            const data = await res.json()

            dispatch({
                type: UPDATE_LOG,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.statusText
            })
        }
    }
}


// Search logs
export const searchLogs = (text) => async dispatch => {
    
    try {
        setLoading()

        const res = await fetch(`/logs?q=${text}`)
        const data = await res.json()

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}


// Sets the current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// Clears the current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}


// SET LOADING TO TRUE
export const setLoading = () => {
        return {
            type: SET_LOADING
        }
}