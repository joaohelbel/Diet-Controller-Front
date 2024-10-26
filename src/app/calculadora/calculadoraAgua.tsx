'use client';
import React, { useState } from 'react';
import Style from './calculadora.module.css';

export function WaterIntakeCalculator() {
    const [weight, setWeight] = useState<number | ''>('');
    const [waterIntake, setWaterIntake] = useState<number | null>(null);

    const calculateWaterIntake = () => {
        if (weight) {
            const intake = weight * 35; // 35 ml per kg of body weight
            setWaterIntake(Number(intake.toFixed(2)));
        }
    };

    return (
        <div className={Style.container}>
            <h1>Calculadora de Ingestão de Água</h1>
            <div className={Style.formGroup}>
                <label>Peso (kg)</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    placeholder="Peso"
                />
            </div>
            <button className={Style.calculateButton} onClick={calculateWaterIntake}>
                Calcular Ingestão de Água
            </button>
            {waterIntake && (
                <div className={Style.result}>
                    <h2>Ingestão Diária de Água: {waterIntake} ml</h2>
                </div>
            )}
        </div>
    );
}