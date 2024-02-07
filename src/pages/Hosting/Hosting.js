import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hosting = () => {
    const navigate = useNavigate();
    const interval_id = setInterval(() => {
        if (!localStorage.getItem('user')) {
          localStorage.removeItem('user');
          navigate('/authentication');
          clearInterval(interval_id);
        }
      }, 5 * 1000);
    return (
        <div style={{marginLeft: '500px'}}>
            This is hosting page.
        </div>
    )
}

export default Hosting