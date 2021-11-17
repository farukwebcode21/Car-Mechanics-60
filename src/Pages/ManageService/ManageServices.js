import React, { useEffect, useState } from 'react'

const ManageServices = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data =>setService(data) )
    }, [])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted SuccessFully');
                    const remaining = service.filter(service => service._id !== id);
                    setService(remaining);
                }
        })
    }

    return (
        <div>
            <h1>Manage Services</h1>
            {
                service.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    )
}

export default ManageServices
