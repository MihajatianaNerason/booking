import { Button } from "@/components/ui/button"

function Login() {
    
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="max-w-sm">
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nom
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom" />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="mail" placeholder="Votre Email" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="Mot de passe" placeholder="Mot de passe" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="flex items-center shadow">
                        <Button className="w-full">Se connecter</Button>
                    </div>
                    <a className="text-center w-full inline-block align-baseline pt-2 font-semibold text-blue-500 hover:text-blue-500" href="#">
                        Don't have acount ?
                    </a>
                </form>
            </div>
        </div>

    )
}

export default Login