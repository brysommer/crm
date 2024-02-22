import { useState } from 'react'
import './authentication.scss'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

const Authentication = (props) => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('user', user);
                setTimeout(() => {
                    localStorage.removeItem('user');
                }, 60 * 1000);
                console.log(user);
                navigate('/database');
            })
            .catch((error) => {
                setError(true);
            })
    }

    return (
        <Box sx={{mt: '5rem'}}>

        <div className='login'>
            <form onSubmit={handleLogin}>
                <input type='email' placeholder='email'
                 onChange={e=>setEmail(e.target.value)}
                 key="email-input"
                />
                <input type='password' placeholder='password' 
                onChange={e=>setPassword(e.target.value)}
                key="pw-input"
                />
                <button type='submit'>Login</button>
                {error && <span>Невірний email або пароль!</span>}
            </form>
        </div>
        </Box>
    )
}

export default Authentication