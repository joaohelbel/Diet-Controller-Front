'use client';
import React, { useState } from "react";
import Image from 'next/image';
import Style from "./login.module.css";
import Link from "next/link";

export default function LoginComponent() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const toggleForm = () => setIsSignUpActive(!isSignUpActive);

    return (
        <div className={Style.container}>
            <div className={Style.formWrapper}>
                <Link href="/dashboardProg"> Meu perfil </Link>
                <div className={Style.avatar}>
                    <img 
                    src="/avatar.jpeg" alt="Meu avatar" 
                    width={150} height={150}
                    style={{ borderRadius: '50%' }}
                    ></img>
                </div>

                <div className={Style.tabContainer}>

                    <button
                        className={`${Style.tabButton} ${!isSignUpActive ? Style.activeTab : ""}`}
                        onClick={() => setIsSignUpActive(false)}
                    >
                        Entrar
                    </button>
                    <button
                        className={`${Style.tabButton} ${isSignUpActive ? Style.activeTab : ""}`}
                        onClick={() => setIsSignUpActive(true)}
                    >
                        Cadastrar
                    </button>
                </div>

                {/* Formulário de Login */}
                {!isSignUpActive ? (
                    <form className={Style.form}>
                        <div className={Style.inputGroup}>
                            <span className={Style.icon}>📧</span>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className={Style.inputGroup}>
                            <span className={Style.icon}>🔒</span>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className={Style.rememberMe}>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Password</label>
                        </div>
                        <button type="submit" className={Style.submitButton}>Sign In</button>
                    </form>
                ) : (
                    // Formulário de Cadastro
                    <form className={Style.form}>
                        <div className={Style.inputGroup}>
                            <span className={Style.icon}>📧</span>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className={Style.inputGroup}>
                            <span className={Style.icon}>🔒</span>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className={Style.inputGroup}>
                            <span className={Style.icon}>🔒</span>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <div className={Style.rememberMe}>
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">Terms</label>
                        </div>
                        <button type="submit" className={Style.submitButton}>Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    );
}
