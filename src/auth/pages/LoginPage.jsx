import { useNavigate } from 'react-router';

export const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
        <>
            <div className="container">
                <h1>LoginPage</h1>
                <hr />
                <button className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </>
    )
}
