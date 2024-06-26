import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks";
import { Google } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { signInWithGoogle } from "../firebase/providers";
import { checkingAuthentication } from "../store/auth";
import Swal from "sweetalert2";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());

    try {
      await FirebaseAuth.signInWithEmailAndPassword(email, password);

      onInputChange({ target: { name: "email", value: "" } });
      onInputChange({ target: { name: "password", value: "" } });

      navigate("/");
    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Error de inicio de sesión",
        text: error.message,
      });
    }
  };

  const onGoogleSignIn = async () => {
    dispatch({ type: "START_GOOGLE_SIGN_IN" });
    try {
      const result = await signInWithGoogle();
      if (result.ok) {
        navigate("/");
      } else {
        setError(result.errorMessage);
        Swal.fire({
          icon: "error",
          title: "Error de inicio de sesión con Google",
          text: result.errorMessage,
        });
      }
    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Error de inicio de sesión con Google",
        text: error.message,
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/5717/5717306.png"
            alt="Tienda dual"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Inicia sesión en tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="correo@gmail.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Ingrese su contraseña"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm mt-2">Error: {error}</div>
            )}

            <div>
              <button
                disabled={isAuthenticating}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
            <div>
              <button
                disabled={isAuthenticating}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Aun no estas registrado?{" "}
            <Link
              to="/registrarse"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
