import Link from 'next/link';
import { FaQuestionCircle, FaSignInAlt, FaClipboardList, FaCalculator, FaInfoCircle } from 'react-icons/fa';
import Style from './page.module.css';

export default function Home() {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Bem-vindo ao Diet Controller</h1>
            <p className={Style.subtitle}>Escolha uma das opções abaixo para começar:</p>
            <div className={Style.buttonRow}>
                <Link href="/o-que-e-diet">
                    <button className={Style.optionButton}>
                        <FaQuestionCircle className={Style.icon} /> O que é o Diet?
                    </button>
                </Link>
                <Link href="/login">
                    <button className={Style.optionButton}>
                        <FaSignInAlt className={Style.icon} /> Login / Cadastro
                    </button>
                </Link>
                <Link href="/entenda-o-que-precisa">
                    <button className={Style.optionButton}>
                        <FaClipboardList className={Style.icon} /> Posso ajudar?
                    </button>
                </Link>
                <Link href="/calculadora">
                    <button className={Style.optionButton}>
                        <FaCalculator className={Style.icon} /> Calculadora
                    </button>
                </Link>
                <Link href="/sobre">
                    <button className={Style.optionButton}>
                        <FaInfoCircle className={Style.icon} /> Sobre
                    </button>
                </Link>
            </div>
        </div>
    );
}
