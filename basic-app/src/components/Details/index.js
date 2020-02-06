import React, {useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {DetailsCardWrapper, DetailsWrapper} from "./styles";

export const Details = () => {
    const [card, setCard] = useState(null);
    const {id} = useParams();
    const {goBack} = useHistory();

    const fetchDetails = useCallback(async() => {
        try{
            const result = await(fetch(`https://api.pokemontcg.io/v1/cards/${id}`));
            const {card: pokeCard} = await result.json();
            setCard(pokeCard);
        }catch(e) {
            console.log("loading error");
        }
    }, [id]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    const type = card && card.types && card.types[0];

    return (
        <DetailsCardWrapper>
            {card ? (
                    <DetailsWrapper type = {type ? type :  'Colorless'}>
                        <button onClick={goBack}>Go back</button>
                        <p>{card.name}</p>
                        <img src={card.imageUrl} alt={card.name}/>
                    </DetailsWrapper>
                ) : (
                <div>Loading...</div>
                )}
        </DetailsCardWrapper>
    )
};
