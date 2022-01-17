import React, { useState, useEffect } from 'react'
import Preloader from '../layout/Preloader'
import M from 'materialize-css/dist/js/materialize.min.js'
import TechItem from './TechItem'

const TechListModal = () => {
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTechs()
        //eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        setLoading(true)

        const res = await fetch('/techs')
        const data = await res.json()

        setTechs(data)
        setLoading(false)
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="container">
                <div className="modal-content">
                    { loading ? <Preloader/> : loading == false && techs.length == 0 ? 
                        <h4 className="center">There are no techs here...</h4> :
                        <ul className="collection with-header">
                            <li className="collection-header">
                                <h4 className="center">Technitians</h4>
                            </li>
                            {
                                techs.map(tech => <TechItem key={tech.id} tech={tech} />)
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}


export default TechListModal