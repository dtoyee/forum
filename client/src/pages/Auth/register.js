import RegisterForm from "../../components/auth/register"
import Navbar from "../../components/Navbar/navbar"

function Register() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ marginTop: "20px", width: "500px" }}>
                <div class="card">
                    <div class="card-header">
                        Register
                    </div>
                    <div className="card-body">
                        <RegisterForm />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register