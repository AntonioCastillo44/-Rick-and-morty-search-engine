import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const ResidentInfo = ({ resident }) => {
    const [dataResident, setDataResident] = useState()

    useEffect(() => {
        axios.get(resident)
            .then(res => setDataResident(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <article className='ResidentInfo'>
            <div className='ResidentInfo__content'>
            <div  className='ResidentInfo__div__img'>
                <img className='ResidentInfo__img' src={dataResident?.image} loading="auto" alt="" />
            </div>
            <div className='ResidentInfo__div__inf'>
                <h3 className={`ResidentInfo__h3 ${dataResident?.status}`}>{dataResident?.name}</h3>
                <ul>
                    <li> <span className='span' > Species: </span>{dataResident?.species}</li>
                    <li> <span className='span' > Origin: </span>{dataResident?.origin.name}</li>
                    <li> <span className='span' > Episodes where apper: </span>{dataResident?.episode.length}</li>
                    <li className='li'>  Status: <span className='span'> {dataResident?.status} </span></li>
                </ul>
            </div>
            </div>
        </article>
    )
}

export default ResidentInfo 