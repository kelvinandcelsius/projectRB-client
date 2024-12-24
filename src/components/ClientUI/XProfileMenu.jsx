import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { fetchOnePolicy } from '../../utils/policy-utils'

const XProfileMenu = ({ userId }) => {

    const [policyUrl, setPolicyUrl] = useState('')

    useEffect(() => {
        fetchOnePolicy(userId)
            .then(response => {
                setPolicyUrl(response.presignedUrl)
            })
            .catch(error => {
                console.error('Error fetching user policy', error);
            })
    }, [userId])

    return (
        <div className="container">
            <ul>
                <li><Link to={'/select-broker'}>Select your Brokers</Link></li>
                <li><Link to={'/upload-policy'}>Upload your policy</Link></li>
                <li><a href={policyUrl} target="_blank" rel="noopener noreferrer">View your policy</a></li>
            </ul>
        </div>
    )

}

export default XProfileMenu