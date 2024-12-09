"use client";

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#4CAF50', marginBottom: 2 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Diet Controller
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} href="/">
                        Início
                    </Button>
                    <Button color="inherit" component={Link} href="/o-que-e-diet">
                        O que é o Diet?
                    </Button>
                    <Button color="inherit" component={Link} href="/entenda-o-que-precisa">
                        Posso ajudar?
                    </Button>
                    <Button color="inherit" component={Link} href="/calculadora">
                        Calculadora
                    </Button>
                    <Button color="inherit" component={Link} href="/sobre">
                        Sobre
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
