import LoginForm from "../../components/auth/login"
import Navbar from "../../components/Navbar/navbar"

function Login() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ marginTop: "20px", width: "500px" }}>
                <div class="card">
                    <div class="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <LoginForm />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login