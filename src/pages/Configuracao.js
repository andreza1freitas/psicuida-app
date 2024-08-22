import React from 'react';
import { Container, Stack, Button, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Configuracao = () => {
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('/editar-perfil');
    };

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '100vh',
                paddingTop: '100px',
                paddingBottom: '20px'
            }}
        >
            <Stack spacing={5} style={{ width: '100%' }}>
                <Button
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: '#003366', textTransform: 'none', fontSize: '17px' }}
                    startIcon={<EditIcon />}
                    onClick={handleEditProfile}
                >
                    Editar Perfil
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: '#003366', textTransform: 'none', fontSize: '17px' }}
                    startIcon={<NotificationsIcon />}
                >
                    Configurar Notificações
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{ backgroundColor: '#003366', textTransform: 'none', fontSize: '17px' }}
                    startIcon={<DeleteIcon />}
                >
                    Excluir Conta
                </Button>
            </Stack>

            {/* Footer */}
            <Box mt={8} textAlign="center">
                <Typography variant="body2" color="textSecondary">
                    PsiCuida
                </Typography>
            </Box>
        </Container>
    );
}

export default Configuracao;
