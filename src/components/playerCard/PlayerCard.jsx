import React from 'react'
import './PlayerCard.css'

 const PlayerCard = () => {
    return (
        <div className='p'>
            <div className='p-top'>
                <div className='top-green'>
                    <p className='overall'>Overall:91</p>
                    <p className='jersey'>Jersey:91</p>
                </div>
                
            </div>
            <div className='p-down'>
            <span className='age'>Age 32 </span>
                    <p className='nationality'>Nationality  Argentina</p>
         </div>
            
        </div>
    )
}
export default PlayerCard