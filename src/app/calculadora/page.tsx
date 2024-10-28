"use client";
import React, { useState } from "react";
import CalorieCalculator from "./calculadoraCal";
import { BMICalculator } from "./calculadoraImc";
import { WaterIntakeCalculator } from "./calculadoraAgua";
import { Tabs, Tab, Box, Grid, Typography, Paper } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalculateIcon from "@mui/icons-material/Calculate";
import OpacityIcon from "@mui/icons-material/Opacity";
import styles from "./Calculadora.module.css";

export default function Calculadora() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Box className={styles.containerFull}>
            <Typography variant="h4" align="center" gutterBottom className={styles.title}>
                Calculadora de Saúde
            </Typography>
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                centered
                textColor="primary"
                indicatorColor="primary"
                className={styles.tabs}
            >
                <Tab
                    icon={<FitnessCenterIcon className={styles.icon} />}
                    iconPosition="start"
                    label="Calorias"
                    className={activeTab === 0 ? styles.activeTab : ""}
                />
                <Tab
                    icon={<CalculateIcon className={styles.icon} />}
                    iconPosition="start"
                    label="IMC"
                    className={activeTab === 1 ? styles.activeTab : ""}
                />
                <Tab
                    icon={<OpacityIcon className={styles.icon} />}
                    iconPosition="start"
                    label="Água"
                    className={activeTab === 2 ? styles.activeTab : ""}
                />
            </Tabs>

            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Paper elevation={3} className={styles.contentBox}>
                        {activeTab === 0 && (
                            <Box>
                                <CalorieCalculator />
                            </Box>
                        )}
                        {activeTab === 1 && (
                            <Box>
                                <BMICalculator />
                            </Box>
                        )}
                        {activeTab === 2 && (
                            <Box>
                                <WaterIntakeCalculator />
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
