import React, { useState } from 'react';
import axios from 'axios';

function Model() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username, password} = event.target.elements;
        try {
            const response = await axios.post('http://12.167.104.176/api/login', {
                username: username.value,
                password: password.value
            });
            console.log(response);
            setIsAuthenticated(response.data.authenticated);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="Username" required />
                <input name="password" type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {isAuthenticated && (
                <div>
                    Welcome! You are now logged in and can see this content.
                </div>
            )}
        </div>
    );
}

export default Model;
