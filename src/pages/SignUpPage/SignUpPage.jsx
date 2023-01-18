import React, { useState } from 'react';
import { AppWrap } from '../../wrapper';
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitRegister = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="flex h-full w-full items-center justify-center">
                <div className="mx-auto flex h-full w-full flex-col items-center rounded-2xl bg-neutral-200/70 shadow-lg dark:bg-neutral-800/80 md:h-[40rem] md:flex-row 1150:w-[60rem] 2xl:w-[75rem]">
                    <div className="flex flex-col items-center justify-center max-md:mt-10 max-md:max-h-[30%] md:w-full md:gap-y-[4rem] lg:ml-[4rem]">
                        <img
                            src="/register-image.svg"
                            alt="login"
                            className="w-full max-md:max-w-[20rem] md:max-w-[30rem]"
                        />
                        <p className="hidden px-8 text-center text-xl font-bold md:inline 2xl:px-[8rem]">
                            Crea tu cuenta y empieza a{' '}
                            <span className="text-secondary dark:text-indigo-500">comprar</span> y{' '}
                            <span className="text-secondary dark:text-indigo-500">transferir</span>{' '}
                            monedas!
                        </p>
                    </div>
                    <div className="max-md:max-h-[70%] max-md:px-4 max-md:py-8 md:w-full">
                        <form
                            onClick={handleSubmitRegister}
                            className="flex w-full flex-col items-center justify-center gap-3 500:w-[19rem] md:mx-auto"
                        >
                            <h1 className="mb-1 text-xl font-bold">Registro</h1>
                            <div className="flex w-full flex-col gap-2">
                                <label htmlFor="">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl py-2 px-4 focus:outline-none dark:bg-black/90 dark:text-white"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <label htmlFor="">Apellido</label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl py-2 px-4 focus:outline-none dark:bg-black/90 dark:text-white"
                                    onChange={(event) => setLastname(event.target.value)}
                                />
                            </div>
                            <div className="flex w-full flex-row gap-2">
                                <div>
                                    <label htmlFor="">Telefono</label>
                                    <input
                                        type="number"
                                        className="w-full rounded-xl py-2 px-4 focus:outline-none dark:bg-black/90 dark:text-white"
                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Dirección</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-xl py-2 px-4 focus:outline-none dark:bg-black/90 dark:text-white"
                                        onChange={(event) => setAddress(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-xl py-2 px-4 focus:outline-none dark:bg-black/90 dark:text-white"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <label htmlFor="">Contraseña</label>
                                <input
                                    type="password"
                                    className="w-full rounded-xl px-4 py-2 focus:outline-none dark:bg-black/90 dark:text-white"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <button className="home-buttons mt-4 w-full">Registrarse</button>
                        </form>
                        <div className="mt-4 flex w-full flex-col items-start 500:w-[19rem] md:mx-auto">
                            <p>
                                ¿Ya tienes una cuenta? ingresa{' '}
                                <Link
                                    to="/login"
                                    className="text-secondary hover:underline dark:text-indigo-400"
                                >
                                    aquí!
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppWrap(SignUpPage);
