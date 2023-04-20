import { LogInForm } from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', aligneItems: 'center'}}> 
            <h2>Log In</h2>
            <LogInForm />
            <Link to={'/register'}>
          Don't have an account? Register
        </Link>
        </div>
    )
};