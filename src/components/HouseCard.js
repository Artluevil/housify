import React from 'react';

const HouseCard = (props) => {

    const { data } = props

    return (
        <>
            <div key={data.id} className="house-card-container">
                <img src={data.img}/>
                <h2>{data.title}</h2>
                <p>{data.dsc}</p>
            </div>
        </>
    )
}

export default HouseCard