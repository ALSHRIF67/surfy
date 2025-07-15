export default function Signup() {
    return (
        <form className="space-y-6" method="POST">

            <p> this  singup pge  </p>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                />
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                        Password
                    </label>
                    <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Sign in
                </button>

            </div>
        </form>
    );
}
