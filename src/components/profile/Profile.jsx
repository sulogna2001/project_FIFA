import React from 'react'
import './Profile.css'
import { useParams } from 'react-router'
import messi from '../../images/messi.png'
import messiP from '../../images/messiP.png'
import { dataList } from '../../data'

const  Profile=( )=>{
    const params=useParams()

    var integer1 = parseInt(params.profileId, 10);
    const profile = dataList.find(player=> parseInt(player.id,10)===integer1)
    console.log(profile);

        return (
             <div className='p'>
                 <div className='p-top'>
                     <p className='home'>Home</p>
                     <p className='help'>Help</p>
                 </div>
                 <div className='p-down'>
                     <div className='p-down-left'>
                         <p className='player-name'>{profile.name}</p>
                         <img src={profile.img} alt='' className='player-img'></img>
                         <div className='performance'>
                             <img src={messiP} alt='' className='perf'></img>
                         </div>
                     </div>
                     <div className='line'></div>
                     <div className='p-down-right'>
                         <div className='top-green'>
                             <p className='overall'>Overall : {profile.overall}</p>
                             <p className='jersey'>Jersey : {profile.jersey}</p>


                             <ul class="list" >
                                 <li ><strong>Age</strong> {profile.age}
                                 </li>
                                 <li class="item-508"><strong>Nationality</strong>  {profile.nationality}
                                 </li>
                                 <li class="item-509"><strong>Club</strong>  {profile.club}
                                 </li>
                                 <li class="item-510">Value  {profile.value}
                                 </li>
                                 <li class="item-511">Wage  {profile.wage}
                                 </li>
                                 <li class="item-512">Foot  {profile.foot}
                                 </li>
                                 <li class="item-513">Workrate  {profile.workrate}
                                 </li>
                                 <li class="item-514">Position  {profile.position}
                                 </li>
                                 <li class="item-515">Joined  {profile.joined}
                                 </li>
                                 <li class="item-516">Contact  {profile.contact}
                                 </li>
                                 <li class="item-517">Height {profile.height}
                                 </li>
                                 <li class="item-518">Weight  {profile.weight}
                                 </li>
                                 <li class="item-519">Crossing {profile.crossing}
                                 </li>
                                 <li class="item-520">Accuracy {profile.accuracy}
                                 </li>
                                 <li class="item-521">Short Passing {profile.shortPassing}
                                 </li>
                                 <li class="item-522">Volleys {profile.volleys}
                                 </li>
                                 <li class="item-523">Finishing {profile.finishing}
                                 </li>
                             </ul>



                         </div>
                     </div>
                 </div>

             </div >

        )

    }


export default Profile
