const LoginPages = () =>{
    return ( 
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter your Email"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring 
                            focus-blue-200 h-11"
                        />
                    </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring 
                            focus-blue-200 h-11"
                        />
                    </div>
                    <div className="mb-5 pt-2">
                        <button type="submit" 
                                className="w-full bg-blue-500 text-white hover:bg-blue-700 py-3 rounded-md">
                                Submit
                                </button>
                    </div>
                    <p className="text-center text-gray-700 ">
                        <a href="/" className="text-blue-500"
                            >Forgot Password
                            </a>
                    </p>
                </form>
            </div>
        </div>
        </>
    )
}
export default LoginPages