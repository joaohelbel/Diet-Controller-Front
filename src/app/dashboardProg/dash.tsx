"use client";
import React from 'react';
import { Box, Grid, Typography, Paper, IconButton, Avatar, LinearProgress, Button } from '@mui/material';
import { Doughnut, Line } from 'react-chartjs-2';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AppleIcon from '@mui/icons-material/Apple';
import { blue, grey } from '@mui/material/colors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

import styles from './dash.module.css';

export default function Dashboard() {
    const calorieData = {
        labels: ['Consumidas', 'Restantes', 'Gastadas'],
        datasets: [
            {
                data: [1291, 826, 244],
                backgroundColor: ['#4CAF50', '#E0E0E0', '#F44336'],
                hoverBackgroundColor: ['#66BB6A', '#EEEEEE', '#EF5350'],
            },
        ],
    };

    const lineData = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
            {
                label: 'Progresso Diário',
                data: [800, 900, 750, 1000, 950, 1100, 1050],
                fill: false,
                borderColor: '#4CAF50',
                tension: 0.3,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Dia da Semana',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Calorias',
                },
            },
        },
    };

    interface NutrientProgressProps {
        label: string;
        value: number;
        max: number;
    }

    const NutrientProgress: React.FC<NutrientProgressProps> = ({ label, value, max }) => (
        <Box>
            <Typography variant="body2" color="textSecondary">{label}</Typography>
            <LinearProgress
                variant="determinate"
                value={(value / max) * 100}
                sx={{ height: 8, borderRadius: 4, marginY: 1 }}
            />
            <Typography variant="caption" color="textSecondary">{`${value} / ${max} g`}</Typography>
        </Box>
    );

    const meals = [
        { label: 'Café da manhã', calories: '56 / 635 kcal', icon: <BreakfastDiningIcon /> },
        { label: 'Almoço', calories: '856 / 847 kcal', icon: <LunchDiningIcon /> },
        { label: 'Jantar', calories: '379 / 529 kcal', icon: <DinnerDiningIcon /> },
        { label: 'Lanches', calories: '0 / 106 kcal', icon: <AppleIcon /> },
    ];

    return (
        <Box className={styles.container}>
            <Grid container justifyContent="space-between" alignItems="center" className={styles.header}>
                <Typography className={styles.headerText}>Semana 7</Typography>
                <Box className={styles.headerIcons}>
                    <Typography variant="body1">Hoje</Typography>
                    <WaterDropIcon sx={{ color: blue[300] }} />
                    <Typography variant="body1">0</Typography>
                    <IconButton color="primary">
                        <CalendarTodayIcon />
                    </IconButton>
                </Box>
            </Grid>

            <Grid container spacing={4}>

                {/* Calorias e Macronutrientes */}
                <Grid item xs={12} md={9}>
                    <Paper className={styles.paper}>
                        {/* Dados do Usuário */}
                        <Grid item xs={12}>
                            <Paper className={styles.userDataSection}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={3}>
                                        <Box className={styles.userDataBox}>
                                            <Typography variant="h6"><strong>Nome:</strong></Typography>
                                            <Typography variant="body1">José pereira</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Box className={styles.userDataBox}>
                                            <Typography variant="h6"><strong>Idade:</strong></Typography>
                                            <Typography variant="body1">29 anos</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Box className={styles.userDataBox}>
                                            <Typography variant="h6"><strong>Altura:</strong></Typography>
                                            <Typography variant="body1">1,75 m</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Box className={styles.userDataBox}>
                                            <Typography variant="h6"><strong>Peso Atual:</strong></Typography>
                                            <Typography variant="body1">70 kg</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} sm={4} className={styles.doughnutContainer}>
                                <Doughnut data={calorieData} />
                                <Typography className={styles.doughnutRemaining}>826 Restantes</Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography align="center" variant="h6">1,291</Typography>
                                        <Typography align="center" color="textSecondary">Consumidas</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography align="center" variant="h6">826</Typography>
                                        <Typography align="center" color="textSecondary">Restantes</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography align="center" variant="h6">244</Typography>
                                        <Typography align="center" color="textSecondary">Gastadas</Typography>
                                    </Grid>
                                </Grid>
                                <Box className={styles.progressSection}>
                                    <NutrientProgress label="Carboidratos" value={206} max={258} />
                                    <NutrientProgress label="Proteína" value={35} max={103} />
                                    <NutrientProgress label="Gordura" value={32} max={68} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Lista de Refeições */}
                <Grid item xs={12} md={3}>
                    <Paper className={styles.mealsSection}>
                        <Typography className={styles.sectionTitle}>Refeições</Typography>
                        {meals.map((meal, index) => (
                            <Grid container alignItems="center" spacing={2} key={index} className={styles.mealItem}>
                                <Grid item>
                                    <Avatar className={styles.mealAvatar}>{meal.icon}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="subtitle1">{meal.label}</Typography>
                                    <Typography className={styles.mealCalories}>{meal.calories}</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary">
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </Grid>

                            </Grid>
                        ))}
                    </Paper>
                </Grid>

                {/* Valores Corporais */}
                <Grid item xs={12} md={6}>
                    <Paper className={styles.paper}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Typography className={styles.sectionTitle}>Valores Corporais</Typography>
                            <Button color="primary">Mais</Button>
                        </Grid>
                        <Box className={styles.valueBox}>
                            <Typography className={styles.valueText}>Peso</Typography>
                            <Typography className={styles.valueSubtitle}>Objetivo: 69.0 kg</Typography>
                            <Typography variant="h4" className={styles.valueText}>70,0 kg</Typography>
                            <IconButton className={styles.iconButton} size="large">
                                <AddCircleOutlineIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>

                {/* Monitor de Água */}
                <Grid item xs={12} md={6}>
                    <Paper className={styles.waterMonitor}>
                        <Typography className={styles.sectionTitle} sx={{ color: '#0000' }}>Monitor de Água</Typography>
                        <Box className={styles.valueBox}>
                            <Typography className={styles.valueSubtitle}>Objetivo: 2,00 L</Typography>
                            <Typography variant="h3" className={styles.valueText}>0,00 L</Typography>
                            <Box className={styles.waterDrops}>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <WaterDropIcon
                                        key={index}
                                        sx={{
                                            fontSize: 40,
                                            color: index < 0 ? '#ffffff' : grey[400],
                                        }}
                                    />
                                ))}
                            </Box>
                            <Typography variant="caption" sx={{ color: '#ffffff', marginTop: 2 }}>
                                + Água de alimentos: 0 mL
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
