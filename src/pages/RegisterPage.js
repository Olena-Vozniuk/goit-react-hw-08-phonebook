import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
    return (
        <div>
            <h2 style={{textAligne: 'center'}}>Registration</h2>
            <RegisterForm />
            <Link to={'/login'}>
          Don't have an account? Login
        </Link>
        </div>
    );
};