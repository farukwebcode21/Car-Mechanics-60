import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import './AddService.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }

        })
    }


    return (
        <div className="add-service">
            <h1>This is add Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input {...register("description")}  placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="price" />
                <input type="img" {...register("img")} placeholder="img url" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddServices
