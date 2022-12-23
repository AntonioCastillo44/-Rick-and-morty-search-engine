import React from 'react'

const Location = ({queryData}) => {
    console.log(queryData)
  return (
    <div className='Location' >
        <h3 className='Location__h3'>{ queryData?.name} </h3>
        <ul className='Location__ul'>
            <li className='Location__li'> <span className='span' > Type: </span> <br/>{ queryData?.type }</li>
            <li className='Location__li'> <span className='span' >Dimension: </span><br/>{ queryData?.dimension }</li> 
            <li className='Location__li'> <span className='span' > Popolation: </span><br/>{ queryData?.residents.length }</li> 
        </ul>
    </div>
  )
}

export default Location