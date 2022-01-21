import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techActions'

const TechItem = ({ tech, deleteTech }) => {
    console.log(tech)
    return (
        <li className="collection-item">
            <div>
                {tech.firstName + ' ' + tech.lastName}
                <a href="!#" onClick={() => deleteTech(tech.id)} className="secondary-content">
                    <i className="material-icons grey-text">
                        delete
                    </i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}


export default connect(null, { deleteTech })(TechItem)