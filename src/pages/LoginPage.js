import { Helmet } from 'react-helmet';
import { LogInForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <div> 
            <h2>Log In</h2>
            <LogInForm/>
        </div>
    )
};