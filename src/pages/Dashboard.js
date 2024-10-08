import React from 'react';
import { Container, Typography, Button} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    // Recupera o userName e userId do estado global do Redux
    const userName = useSelector((state) => state.user.userName);
    const navigate = useNavigate(); // Inicializa o hook de navegação

    const handleAnsiosoClick = () => {
        navigate('/ansioso'); // Navega para a página "Ansioso"
    };

    const handleInsoneClick = () => {
        navigate('/insone'); // Navega para a página "Insone"
    };

    const handleTristeClick = () => {
        navigate('/triste'); // Navega para a página "Tiste"
    };

    const handleEstressadoClick = () => {
        navigate('/estressado'); // Navega para a página "Estressado(a)"
    };

    const handleInseguroClick = () => {
        navigate('/inseguro'); // Navega para a página "Inseguro(a)"
    };

    const handleCulpadoClick = () => {
        navigate('/culpado'); // Navega para a página "Culpado(a)"
    };

    const handleDesatentoClick = () => {
        navigate('/desatento'); // Navega para a página "Desatento(a)"
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                paddingTop: '20px'
            }}
        >
            <Typography align="center" style={{ paddingTop: 30, color: '#003366', textTransform: 'none', fontSize: '33px', fontFamily: 'Saturday' }}>
                Olá, {userName}!
            </Typography>

            <Typography align="center" style={{ marginBottom: '32px', color: '#003366', textTransform: 'none', fontSize: '33px', fontFamily: 'Saturday' }}>
                Como você está agora?
            </Typography>

            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#FF6F61', fontSize: '17px' }}
                onClick={handleAnsiosoClick}
            >
                Ansioso(a)
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#64B5F6', fontSize: '17px' }}
                onClick={handleEstressadoClick}
            >
                Estressado(a)
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#81C784', fontSize: '17px' }}
                onClick={handleTristeClick}
            >
                Triste
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#FFD54F', fontSize: '17px' }}
                onClick={handleInseguroClick}
            >
                Inseguro(a)
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#CE93D8', fontSize: '17px' }}
                onClick={handleCulpadoClick}
            >
                Culpado(a)
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#FFAB91', fontSize: '17px' }}
                onClick={handleInsoneClick}
            >
                Insone
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: '8px 0', textTransform: 'none', backgroundColor: '#4DB6AC', fontSize: '17px' }}
                onClick={handleDesatentoClick}
            >
                Desatento(a)
            </Button>
        </Container>
    );
}

export default Dashboard;
