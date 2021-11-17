import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router'

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setServiceId] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
        .then(data => setServiceId(data))
    }, [serviceId])

    return (
        <div className="service">
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p className="px-3">{service.description}</p>
        </div>
    )
}

export default Booking
