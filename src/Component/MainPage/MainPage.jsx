import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
export default function MainPage({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.name)
            navigate('/reg')
    })
    return (
        <>
            <h1 className="two">Главная страница</h1>
            < div>Привет, {user?.name}
                <button onClick={() => {
                    toast('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }} className="button">магия</button>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )
}