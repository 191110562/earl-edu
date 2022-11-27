import React, { useState } from 'react'
import{ BsGenderAmbiguous, BsGenderFemale, BsGenderMale } from 'react-icons/bs';

export default function BabyNameFinder() {
    const [names, setNames] = useState([]);

    const fetchData = (gender) => {
        fetch(`https://api.api-ninjas.com/v1/babynames?gender=${gender}`, {
            headers: {
                'X-Api-Key': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setNames(data)
        })
    }
    const onClickHandler = (e) => {
        fetchData(e.target.value)
    }

    return(
        <div className='baby-name-finder-container'>
            <h1>Baby Name List</h1>
            <h3>Choose gender to get list of names</h3>
            <div className='baby-name-finder-category__button'>
                <button className='baby-name-finder__icon-male' onClick={onClickHandler} value='boy'><BsGenderMale/> boy</button>
                <button className='baby-name-finder__icon-female' onClick={onClickHandler} value='girl'><BsGenderFemale/> girl</button>
                <button className='baby-name-finder__icon-unisex' onClick={onClickHandler} value='neutral'><BsGenderAmbiguous/> unisex</button>
            </div>
            <div className='baby-name-finder-category__list'>
                    {names.length > 0 && (
                        <h3>
                        List of names based on chosen gender
                            <ul>
                                {names.map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))}
                            </ul>
                        </h3>
                    )}
            </div>
        </div>
    )
}



