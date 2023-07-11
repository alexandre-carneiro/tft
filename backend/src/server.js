const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importe o pacote cors

const app = express();
const API_KEY = 'RGAPI-661a4900-5610-4450-9106-546d24eafb74'; // Sua chave de API
const API_URL = 'https://br1.api.riotgames.com' //URL da API da riot

app.use(express.json());
app.use(cors()); // Use o middleware do cors



//================================================================================================
//============================================ LEAGUE ============================================
//================================================================================================

// ~~/tft/league/v1/challenger
app.get('/tft/league/v1/challenger', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/tft/league/v1/challenger`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/league/v1/entries/by-summoner/{summonerId}
app.get('/tft/league/v1/entries/by-summoner/:summonerId', async (req, res) => {
    try {
        const { summonerId } = req.params;

        const response = await axios.get(`${API_URL}/tft/league/v1/entries/by-summoner/${summonerId}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/league/v1/entries/{tier}/{division}
app.get('/tft/league/v1/entries/:tier/:division', async (req, res) => {
    try {
        const { tier } = req.params;
        const { division } = req.params;

        const response = await axios.get(`${API_URL}/tft/league/v1/entries/${tier}/${division}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/league/v1/grandmaster
app.get('/tft/league/v1/grandmaster', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/tft/league/v1/grandmaster`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/league/v1/leagues/{leagueId}
app.get('/tft/league/v1/leagues/:leagueId', async (req, res) => {
    try {
        const { leagueId } = req.params;

        const response = await axios.get(`${API_URL}/tft/league/v1/leagues/${leagueId}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/league/v1/master
app.get('/tft/league/v1/master', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/tft/league/v1/master`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/league/v1/rated-ladders/{queue}/top
app.get('/tft/league/v1/rated-ladders/:queue/top', async (req, res) => {
    const { queue } = req.params;

    try {
        const response = await axios.get(`${API_URL}/tft/league/v1/rated-ladders/${queue}/top`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//================================================================================================
//============================================= MATCH ============================================
//================================================================================================

// ~~/tft/match/v1/matches/by-puuid/{puuid}/ids
//ESSA REQUISIÇÃO PRECISA DE UMA REVISÃO PARA FUNCIONAR DINAMICAMENTE.
app.get('/tft/match/v1/matches/by-puuid/:puuid/ids', async (req, res) => {
    try {
        const { puuid } = req.params;

        const response = await axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=20`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ~~/tft/match/v1/matches/{matchId}
app.get('/tft/match/v1/matches/:matchId', async (req, res) => {
    try {
        const { matchId } = req.params;

        const response = await axios.get(`${API_URL}/tft/match/v1/matches/${matchId}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//================================================================================================
//============================================ STATUS ============================================
//================================================================================================

// ~~/tft/status/v1/platform-data
app.get('/tft/status/v1/platform-data', async (req, res) => {
    try {
        const { summonerName } = req.params;

        const response = await axios.get(`${API_URL}/tft/status/v1/platform-data`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//================================================================================================
//=========================================== SUMMONER ===========================================
//================================================================================================

// ~~/tft/summoner/v1/summoners/by-account/{encryptedAccountId}
app.get('/tft/summoner/v1/summoners/by-account/:encryptedAccountId', async (req, res) => {
    try {
        const { encryptedAccountId } = req.params;

        const response = await axios.get(`${API_URL}/tft/summoner/v1/summoners/by-account/${encryptedAccountId}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ~~/tft/summoner/v1/summoners/by-puuid/{encryptedPUUID}
app.get('/tft/summoner/v1/summoners/by-puuid/:encryptedPUUID', async (req, res) => {
    try {
        const { encryptedPUUID } = req.params;

        const response = await axios.get(`${API_URL}/tft/summoner/v1/summoners/by-puuid/${encryptedPUUID}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ~~/tft/summoner/v1/summoners/by-name/{summonerName}
app.get('/tft/summoner/v1/summoners/by-name/:summonerName', async (req, res) => {
    try {
        const { summonerName } = req.params;

        const response = await axios.get(`${API_URL}/tft/summoner/v1/summoners/by-name/${summonerName}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ~~/tft/summoner/v1/summoners/me
app.get('/tft/summoner/v1/summoners/me', async (req, res) => {
    try {
        const { summonerName } = req.params;

        const response = await axios.get(`${API_URL}/tft/summoner/v1/summoners/me`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ~~/tft/summoner/v1/summoners/{encryptedSummonerId}
app.get('/tft/summoner/v1/summoners/:encryptedSummonerId', async (req, res) => {
    try {
        const { encryptedSummonerId } = req.params;

        const response = await axios.get(`${API_URL}/tft/summoner/v1/summoners/${encryptedSummonerId}`, {
            headers: {
                'X-Riot-Token': API_KEY,
            },
        });

        res.setHeader('Access-Control-Allow-Origin', '*'); // Adicione o cabeçalho Access-Control-Allow-Origin
        res.json(response.data);
    } catch (error) {
        console.error("erro aqui: "+error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
