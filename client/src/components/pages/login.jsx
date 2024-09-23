






const LoginPage = () => {

    return (
        <div className="min-h-screen bg-gray-100  justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
                <div className="relative px-1 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800">Login</h1>
                        <form className="mt-6">
                            <div className="mb-5">
                                <label htmlFor="username" className="block text-gray-700">Username</label>
                                <input id="username" type="text" placeholder="Enter your username or email" required className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <input id="password" type="password" placeholder="Enter your password" required className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            </div>
                            <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Login</button>
                        </form>
                        <p className="mt-5 text-center text-gray-500">Don't have an account? Or <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default LoginPage;