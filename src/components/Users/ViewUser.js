import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link,useHistory } from 'react-router-dom';

const ViewUser = () => {
    let history=useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    });
    const { id } = useParams();

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(res.data);

    }
    const handleBack=()=>{
        history.push('/');
    }
    
    useEffect(() => {
        loadUser();
 // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadUser]);

    return (
        <div className="container py-4">
            <Link className="btn btn-primary " onClick={handleBack}>Back To Home</Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name:{user.name}</li>
                <li className="list-group-item">user name:{user.username}</li>
                <li className="list-group-item">email:{user.email}</li>
                <li className="list-group-item">phone:{user.phone}</li>
                <li className="list-group-item">website:{user.website}</li>
            </ul>

        </div>
    )
}
export default ViewUser;