const SignUpPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center sm:py-12">
            <div className="relative w-full max-w-md sm:max-w-lg px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
                <div className="relative px-6 py-10 bg-white shadow-lg sm:rounded-lg sm:p-16">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h1>
                        <form className="mt-6">
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="Confirm your password"
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-5 text-center text-gray-500">
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-600 hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
