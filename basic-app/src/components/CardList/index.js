import React, {useEffect, useState} from 'react';
import {Card} from "../Card";
import {CardListWrapper} from "./styles";

const CardList = () => {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        fetch('https://api.pokemontcg.io/v1/cards')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setCards(myJson.cards);
            });
    }, []);

    console.log(cards);

    return (
        <div>
            {cards ?
                <CardListWrapper>{cards.map(card => (
                      <Card key={card.id}
                            name={card.name}
                            id={card.id}
                            imgUrl={card.imageUrl}/>
                    )
                )
                }</CardListWrapper> :
                <div>loading...</div>
            }
        </div>
    )
};

export default CardList;