"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    Modal,
    Fade,
    Backdrop,
    TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./entenda.module.css";

export default function PossoAjudar() {
    const [perfil, setPerfil] = useState("");
    const [atividadeFisica, setAtividadeFisica] = useState("");
    const [habitosAlimentares, setHabitosAlimentares] = useState("");
    const [idade, setIdade] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleContinue = () => {
        if (perfil && atividadeFisica && habitosAlimentares && idade && peso && altura) {
            handleOpen();
        }
    };

    return (
        <Box className={styles.container}>
            <Paper className={styles.paper}>
                <Typography variant="h4" component="h1" gutterBottom className={styles.title}>
                    Posso ajudar?
                </Typography>
                <Typography variant="body1" gutterBottom className={styles.subtitle}>
                    Responda as perguntas abaixo para que possamos entender como melhor ajudá-lo.
                </Typography>

                {/* Pergunta 1: Objetivo */}
                <Typography variant="body1" className={styles.question}>
                    Qual é o seu objetivo?
                </Typography>
                <RadioGroup
                    value={perfil}
                    onChange={(e) => setPerfil(e.target.value)}
                    className={styles.radioGroup}
                >
                    <FormControlLabel value="perderPeso" control={<Radio />} label="Perder peso" />
                    <FormControlLabel value="ganharPeso" control={<Radio />} label="Ganhar peso" />
                    <FormControlLabel value="manterPeso" control={<Radio />} label="Manter peso" />
                </RadioGroup>

                {/* Pergunta 2: Atividade Física */}
                <Typography variant="body1" className={styles.question}>
                    Qual é o seu nível de atividade física?
                </Typography>
                <RadioGroup
                    value={atividadeFisica}
                    onChange={(e) => setAtividadeFisica(e.target.value)}
                    className={styles.radioGroup}
                >
                    <FormControlLabel value="sedentario" control={<Radio />} label="Sedentário" />
                    <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                    <FormControlLabel value="ativo" control={<Radio />} label="Ativo" />
                </RadioGroup>

                {/* Pergunta 3: Hábitos Alimentares */}
                <Typography variant="body1" className={styles.question}>
                    Como você descreveria seus hábitos alimentares?
                </Typography>
                <RadioGroup
                    value={habitosAlimentares}
                    onChange={(e) => setHabitosAlimentares(e.target.value)}
                    className={styles.radioGroup}
                >
                    <FormControlLabel value="saudavel" control={<Radio />} label="Saudável" />
                    <FormControlLabel value="moderado" control={<Radio />} label="Moderado" />
                    <FormControlLabel value="naoSaudavel" control={<Radio />} label="Não saudável" />
                </RadioGroup>

                {/* Pergunta 4: Idade */}
                <Typography variant="body1" className={styles.question}>
                    Qual é a sua idade?
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder="Digite sua idade"
                    className={styles.textField}
                />

                {/* Pergunta 5: Peso */}
                <Typography variant="body1" className={styles.question}>
                    Qual é o seu peso atual? (kg)
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Digite seu peso"
                    className={styles.textField}
                />

                {/* Pergunta 6: Altura */}
                <Typography variant="body1" className={styles.question}>
                    Qual é a sua altura? (cm)
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Digite sua altura"
                    className={styles.textField}
                />

                {/* Botão Continuar */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleContinue}
                    disabled={!perfil || !atividadeFisica || !habitosAlimentares || !idade || !peso || !altura}
                    className={styles.button}
                >
                    Continuar
                </Button>
            </Paper>

            {/* Modal de Recomendações */}
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className={styles.modalContent}>
                        <img
                            src="/images/healthy-lifestyle.jpg"
                            alt="Saúde e bem-estar"
                            className={styles.modalImage}
                        />
                        <Typography variant="h5" component="h2" className={styles.modalTitle}>
                            Recomendações Personalizadas
                        </Typography>
                        <Typography sx={{ mt: 2 }} className={styles.modalText}>
                            Com base nas suas respostas, recomendamos que você siga um plano de <strong>{perfil}</strong>.
                            Para um estilo de vida <strong>{atividadeFisica}</strong> e hábitos alimentares <strong>{habitosAlimentares}</strong>, sugerimos:
                        </Typography>
                        <Typography sx={{ mt: 1 }} className={styles.modalText}>
                            Idade: {idade} anos <br />
                            Peso atual: {peso} kg <br />
                            Altura: {altura} cm
                        </Typography>
                        <Button
                            onClick={() => router.push("/login")}
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Ir para o Login
                        </Button>

                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
