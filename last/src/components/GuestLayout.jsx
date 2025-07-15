import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {



    return (
        <div className="flex min-h-screen items-center justify-start bg-white px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md lg:max-w-lg space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <Outlet></Outlet>

                <p className="text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>

    )
}
