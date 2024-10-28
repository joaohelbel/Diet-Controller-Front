'use client';
import React, { useState } from 'react';
import Style from './calculadora.module.css';

export default function CalorieCalculator() {
    const [age, setAge] = useState<number | ''>('');
    const [weight, setWeight] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState<'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'superActive'>('sedentary');
    const [calories, setCalories] = useState<number | null>(null);

    const calculateCalories = () => {
        if (age && weight && height) {
            let bmr = 0;

            // Fórmula de Harris-Benedict para BMR
            if (gender === 'male') {
                bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
            } else {
                bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
            }

            // Multiplicador de atividade física
            const activityMultiplier: { [key in 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'superActive']: number } = {
                sedentary: 1.2,
                lightlyActive: 1.375,
                moderatelyActive: 1.55,
                veryActive: 1.725,
                superActive: 1.9,
            };

            const totalCalories = bmr * activityMultiplier[activityLevel];
            setCalories(Math.round(totalCalories));
        }
    };

    return (
        <div className={Style.container}>
            <h1>Calculadora de Calorias</h1>
            <div className={Style.formGroup}>
                <label className={Style.labelUser}>Idade</label>
                <input className={Style.inputUser}
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    placeholder="Idade"
                />
            </div>
            <div className={Style.formGroup}>
                <label className={Style.labelUser}>Peso (kg)</label>
                <input className={Style.inputUser}
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    placeholder="Peso"
                />
            </div>
            <div className={Style.formGroup}>
                <label className={Style.labelUser}>Altura (cm)</label>
                <input className={Style.inputUser}
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    placeholder="Altura"
                />
            </div>
            <div className={Style.formGroup}>
                <label className={Style.labelUser}>Gênero</label>
                <select className={Style.inputUser} value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                </select>
            </div>
            <div className={Style.formGroup}>
                <label className={Style.labelUser}>Nível de Atividade</label>
                <select className={Style.inputUser} value={activityLevel} onChange={(e) => setActivityLevel(e.target.value as 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'superActive')}>
                    <option value="sedentary">Sedentário</option>
                    <option value="lightlyActive">Levemente ativo</option>
                    <option value="moderatelyActive">Moderadamente ativo</option>
                    <option value="veryActive">Muito ativo</option>
                    <option value="superActive">Extremamente ativo</option>
                </select>
            </div>
            <button className={Style.calculateButton} onClick={calculateCalories}>
                Calcular Calorias
            </button>
            {calories && (
                <div className={Style.result}>
                    <h2>Calorias Diárias: {calories} kcal</h2>
                </div>
            )}
        </div>
    );
}


