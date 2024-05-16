import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Register() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-sm">
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nom
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Votre nom"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="mail"
              placeholder="Votre Email"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="formFileLg"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Photos
            </label>
            <input
              className="flex h-10 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.10rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
              id="formFileLg"
              type="file"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="mail"
              placeholder="Numéro de téléphone"
            />
          </div>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rôle
          </label>

          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Client / Hôte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Client</SelectItem>
                <SelectItem value="dark">Hôte</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <label className="block mt-3 text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="Mot de passe"
              placeholder="Mot de passe"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center shadow">
            <Button className="w-full">S'enregistrer</Button>
          </div>
          <a
            className="text-center w-full inline-block align-baseline pt-2 font-semibold text-blue-500 hover:text-blue-500"
            href="#"
          >
            Already have an acount ?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
