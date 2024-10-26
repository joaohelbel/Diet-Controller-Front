'use client';
import React, { useState } from 'react';
import Style from './calculadora.module.css';

export function BMICalculator() {
    const [weight, setWeight] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [bmi, setBmi] = useState<number | null>(null);

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(Number(bmiValue.toFixed(2)));
        }
    };

    return (
        <div className={Style.container}>
            <h1>Calculadora de IMC</h1>
            <div className={Style.formGroup}>
                <label>Peso (kg)</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    placeholder="Peso"
                />
            </div>
            <div className={Style.formGroup}>
                <label>Altura (cm)</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    placeholder="Altura"
                />
            </div>
            <button className={Style.calculateButton} onClick={calculateBMI}>
                Calcular IMC
            </button>
            {bmi && (
                <div className={Style.result}>
                    <h2>Seu IMC: {bmi}</h2>
                </div>
            )}
        </div>
    );
}