"use client";
import React from 'react';
import { Box, Grid, Typography, Button, Avatar, Divider, TextField, Paper } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './sobre.module.css';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import OpacityIcon from '@mui/icons-material/Opacity';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Sobre() {
  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>Sobre o Diet Controller</Typography>
      {/* Seção de Introdução */}
      <Box className={styles.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>

            <Typography variant="body1" className={styles.description} align="justify">
              O Diet Controller é uma aplicação projetada para ajudar você a monitorar sua ingestão de nutrientes,
              controlar o consumo de água e acompanhar suas metas de saúde. Ideal para quem busca um estilo de vida
              saudável e deseja organizar sua dieta de forma prática. Acompanhe seu progresso, defina metas e alcance
              seus objetivos com o Diet Controller.
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <LocalFireDepartmentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="bold">Monitoramento de Calorias:</Typography>}
                    secondary="Acompanhe a ingestão diária de calorias e mantenha-se no controle da sua dieta."
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <OpacityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="bold">Controle de Água:</Typography>}
                    secondary="Registre e acompanhe seu consumo diário de água para manter-se sempre hidratado."
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <RestaurantIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="bold">Metas Nutricionais:</Typography>}
                    secondary="Defina e acompanhe metas de carboidratos, proteínas e gorduras para um equilíbrio saudável."
                  />
                </ListItem>
              </List>
            </Typography>
            <Button variant="contained" className={styles.button}>Saiba Mais</Button>
          </Grid>
          <Grid item xs={12} md={6} className={styles.boxImg}>
            <img src="/homeimg.png" alt="" className={styles.imgg} />
          </Grid>
        </Grid>
      </Box>
      {/* Benefícios para o Usuário */}
      <Box className={styles.benefitsContainer}>
        <Typography variant="h5" className={styles.benefitsTitle}>Benefícios para o Usuário</Typography>
        <List className={styles.benefitsList}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Organização da dieta e controle de nutrientes." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Monitoramento de metas de saúde." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Promoção de um estilo de vida saudável e sustentável." />
          </ListItem>
        </List>
      </Box>

      

      {/* Contato */}
      <Box className={styles.contactSection}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className={styles.section}>
            <Grid container spacing={2} alignItems="center" className={styles.contactItem}>
              <Grid item>
                <LocationOnIcon className={styles.contactIcon} />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className={styles.contactInfo} align="justify">
                  <strong>Endereço:</strong> R. Joaquim Távora, 1240 - Vila Mariana
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center" className={styles.contactItem}>
              <Grid item>
                <PhoneIcon className={styles.contactIcon} />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className={styles.contactInfo} align="justify">
                  <strong>Telefone:</strong> (11) 1234-5678
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center" className={styles.contactItem}>
              <Grid item>
                <ContactMailIcon className={styles.contactIcon} />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className={styles.contactInfo} align="justify">
                  <strong>Email:</strong> contato@dietcontroller.com
                </Typography>
              </Grid>
            </Grid>
            <Paper sx={{ borderRadius: 4, margin: 2 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4830826096304!2d-46.6444397!3d-23.587001800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce598904179513%3A0xb565ac05eeef86ab!2sR.%20Joaquim%20T%C3%A1vora%2C%201240%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004015-013!5e0!3m2!1spt-BR!2sbr!4v1730122354562!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Paper>
            <Grid container spacing={2}>
              <Grid item>
                <FacebookIcon className={styles.socialIcon} />
              </Grid>
              <Grid item>
                <InstagramIcon className={styles.socialIcon} />
              </Grid>
              <Grid item>
                <TwitterIcon className={styles.socialIcon} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={styles.inputGroupContainer}>
            <Typography variant="h5" className={styles.inputGroupTitle}>Entre em Contato</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="E-mail"
                  type="email"
                  variant="outlined"
                  fullWidth
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Telefone"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mensagem"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Button variant="contained" color="primary" fullWidth className={styles.submitButton}>
                Enviar Mensagem
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
}
