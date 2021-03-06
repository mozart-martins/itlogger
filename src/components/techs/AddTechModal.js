import React, { useState } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addTech } from '../../actions/techActions'

const AddTechModal = ({ addTech }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    
    const onSubmit = () => {
        if(firstName === '' || lastName === '')
            M.toast({ html:'Please, enter a first name and a last name.' })
        else{

            const newTech = {
                firstName: firstName,
                lastName: lastName
            }

            addTech(newTech)

            setFirstName('')
            setLastName('')
        }
    }


    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Enter Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={ e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={ e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>

                <div className="modal-footer">
                    <a href="#!" 
                        className="modal-close waves-effect waves-light blue btn"
                        onClick={onSubmit}
                    >
                        Enter
                    </a>
                </div>
            </div>
        </div>
    )

}

export default connect(null, { addTech })(AddTechModal)