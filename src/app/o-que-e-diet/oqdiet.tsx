"use client";

import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import styles from './oqdiet.module.css';

export default function OqueDiet() {
    return (
        <Box className={styles.container}>
            <Paper className={styles.paper}>
                <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'justify' }}>
                    O que é o Diet Controller?
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    O Diet Controller é uma plataforma revolucionária, meticulosamente projetada para auxiliá-lo no monitoramento de sua dieta, gerenciamento de sua alimentação e na conquista de seus objetivos de saúde e bem-estar.
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    Seja você um iniciante ou um veterano no mundo da nutrição, o Diet Controller oferece ferramentas personalizadas que simplificam sua jornada e garantem resultados duradouros.
                </Typography>
                
                <Typography variant="h5" component="h2" gutterBottom style={{ marginTop: '20px', textAlign: 'justify' }}>
                    Principais Recursos:
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                            ✅ <strong>Calculadora de Calorias:</strong> Descubra a quantidade exata de calorias que você deve consumir diariamente para atingir seus objetivos de forma eficiente.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                            ✅ <strong>Planos Personalizados:</strong> Receba sugestões de refeições adaptadas às suas preferências alimentares e restrições, garantindo uma alimentação prazerosa e saudável.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                            ✅ <strong>Relatórios de Progresso:</strong> Monitore suas conquistas e ajuste sua dieta com base em dados detalhados e precisos.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                            ✅ <strong>Ferramentas de Motivação:</strong> Receba dicas e lembretes para manter sua disciplina e foco, garantindo que você permaneça no caminho certo.
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant="h5" component="h2" gutterBottom style={{ marginTop: '20px', textAlign: 'justify' }}>
                    Benefícios do Diet Controller:
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    🥗 <strong>Saúde em Primeiro Lugar:</strong> Alcance seus objetivos de forma saudável e sustentável, priorizando sempre seu bem-estar.
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    📊 <strong>Monitoramento Preciso:</strong> Tenha acesso a dados detalhados sobre sua dieta e progresso, permitindo ajustes precisos e informados.
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    ⏰ <strong>Economia de Tempo:</strong> Planeje sua dieta com facilidade usando ferramentas intuitivas que economizam seu tempo precioso.
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    🌱 <strong>Adequado para Todos:</strong> Indicado para todas as idades e estilos de vida, com foco em personalização para atender às suas necessidades específicas.
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom style={{ marginTop: '20px', textAlign: 'justify' }}>
                    Pronto para começar?
                </Typography>
                <Typography variant="body1" gutterBottom style={{ textAlign: 'justify' }}>
                    Experimente o Diet Controller e transforme sua saúde hoje mesmo. Nossa plataforma está aqui para apoiar você em cada passo da sua jornada, proporcionando uma experiência enriquecedora e eficaz.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="/login"
                    style={{ marginTop: '20px' }}
                >
                    Cadastre-se Agora
                </Button>
            </Paper>
        </Box>
    );
}
