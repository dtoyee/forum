import Navbar from "../../components/Navbar/navbar"

function Login() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ marginTop: "20px" }}>
                <div class="card">
                    <div class="card-header">
                        Category
                    </div>
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "60%" }}>Category</th>
                                    <th style={{ width: "10%" }} className="text-center">Topics</th>
                                    <th style={{ width: "10%" }} className="text-center">Posts</th>
                                    <th style={{ width: "20%" }} className="text-center">Last Post</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Technology</td>
                                    <td className="text-center">3</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">Yesterday</td>
                                </tr>
                                <tr>
                                    <td>Technology</td>
                                    <td className="text-center">3</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">Yesterday</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </main>
        </>
    )
}

export default Login