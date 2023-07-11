import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeagueListDTO from '@/interfaces/LeagueListDTO';

export default function teste() {
    const [challenger, setChallenger] = useState<LeagueListDTO | null>(null);

    const league = "tft/league/v1"

    useEffect(() => {
        const fetchChallenger = async() =>{
            try {
                const response = await axios.get(`http://localhost:3001/${league}/challenger`);
                setChallenger(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchChallenger();
    }, []);

    return (
        <div>
            {challenger ? 
                (
                    <h1>1. challenger ok</h1>
                ) : 
                (
                    <h1>1. challenger problema</h1>
                )
            }
        </div>
    );
}
