import React from 'react'
import './Profile.css'
import { useParams } from 'react-router'
import messi from '../../images/messi.png'
import messiP from '../../images/messiP.png'
import { dataList } from '../../data'

const  Profile=( )=>{
    const params=useParams()
    const profile = dataList.find(player=> player.id===params.profileId)
    console.log(params.profileId);
    console.log(dataList[0].id);
        return (
            // <div className='p'>
            //     <div className='p-top'>
            //         <p className='home'>Home</p>
            //         <p className='help'>Help</p>
            //     </div>
            //     <div className='p-down'>
            //         <div className='p-down-left'>
            //             <p className='player-name'>{name}</p>
            //             <img src={messi} alt='' className='player-img'></img>
            //             <div className='performance'>
            //                 <img src={messiP} alt='' className='perf'></img>
            //             </div>
            //         </div>
            //         <div className='line'></div>
            //         <div className='p-down-right'>
            //             <div className='top-green'>
            //                 <p className='overall'>Overall : {overall}</p>
            //                 <p className='jersey'>Jersey : {jersey}</p>
    
                           
            //                 <ul class="list" >
            //                     <li ><strong>Age</strong> {age}
            //                     </li>
            //                     <li class="item-508"><strong>Nationality</strong>  {nationality}
            //                     </li>
            //                     <li class="item-509"><strong>Club</strong>  {club}
            //                     </li>
            //                     <li class="item-510">Value  {value}
            //                     </li>
            //                     <li class="item-511">Wage  {wage}
            //                     </li>
            //                     <li class="item-512">Foot  {foot}
            //                     </li>
            //                     <li class="item-513">Workrate  {workrate}
            //                     </li>
            //                     <li class="item-514">Position  {position}
            //                     </li>
            //                     <li class="item-515">Joined  {joined}
            //                     </li>
            //                     <li class="item-516">Contact  {contact}
            //                     </li>
            //                     <li class="item-517">Height {height}
            //                     </li>
            //                     <li class="item-518">Weight  {weight}
            //                     </li>
            //                     <li class="item-519">Crossing {crossing}
            //                     </li>
            //                     <li class="item-520">Accuracy {accuracy}
            //                     </li>
            //                     <li class="item-521">Short Passing {shortPassing}
            //                     </li>
            //                     <li class="item-522">Volleys {volleys}
            //                     </li>
            //                     <li class="item-523">Finishing {finishing}
            //                     </li>
            //                 </ul>
    
    
    
            //             </div>
            //         </div>
            //     </div>
    
            // </div >
            <h1>ndweidn</h1>
        )

    }
    

export default Profile