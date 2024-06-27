import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseAuth, db } from "../firebase/firebase-config";
import Swal from "sweetalert2";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

export const Register = () => {
  const navigate = useNavigate();
  const { displayName, email, password, onInputChange, formState } =
    useForm(formData);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        displayName,
        email,
        uid: user.uid,
      });

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "El usuario ha sido registrado exitosamente",
      });

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Error de registro",
          text: "El correo electrónico ya está en uso.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error de registro",
          text: `Error registrando al usuario: ${error.message}`,
        });
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/5717/5717306.png"
            alt="Tienda dual"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Regístrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={onSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium leading-6 text-white-900 text-black"
              >
                Nombre completo
              </label>
              <div className="mt-2">
                <input
                  id="displayName"
                  type="text"
                  autoComplete="name"
                  placeholder="Ingrese su nombre completo"
                  required
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900 text-black"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ingrese su email"
                  required
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white-900 text-black"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Ingrese su contraseña"
                  required
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
