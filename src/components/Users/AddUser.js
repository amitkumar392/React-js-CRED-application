import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async e => {

        e.preventDefault();
        await axios.post("http://localhost:4000/users", user);
        history.push('/');

    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb=4"> Add A User</h2>
                <form className="border shadow" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={e => onInputChange(e)}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Username"
                            value={username}
                            onChange={e => onInputChange(e)}
                            name="username" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg" placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={e => onInputChange(e)}
                            name="email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={e => onInputChange(e)}
                            name="phone" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Website Name"
                            value={website}
                            onChange={e => onInputChange(e)}
                            name="website" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;