import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Preloader from '../layout/Preloader'
import M from 'materialize-css/dist/js/materialize.min.js'
import TechItem from './TechItem'
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'



const TechListModal = ({ tech : { techs, loading } , getTechs }) => {

    useEffect(() => {
        getTechs()
        //eslint-disable-next-line
    }, [techs])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="container">
                <div className="modal-content">
                    { loading ? <Preloader/> : loading === false && techs === null ? 
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

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}


const mapStateToProp = state => ({
    tech: state.tech
})


export default connect(mapStateToProp, { getTechs })(TechListModal)