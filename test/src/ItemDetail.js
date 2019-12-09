import React, { useState, useEffect } from 'react';

function ItemDetail({match}){

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod89/item/get?ids=${match.params.id}`)
        const item = await fetchItem.json();

        console.log(item);
    }

    return (
        <div>
            <h1>Item Details</h1>
        </div>    
    )

}


export default ItemDetail;