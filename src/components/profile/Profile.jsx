import React from 'react'
import './Profile.css'
import { useParams } from 'react-router'

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
                             <img src={profile.radar} alt='' className='perf'></img>
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
                                 <li class="item-510"><strong>Value </strong> {profile.value}
                                 </li>
                                 <li class="item-511"><strong>Wage </strong> {profile.wage}
                                 </li>
                                 <li class="item-512"><strong>Foot </strong> {profile.foot}
                                 </li>
                                 <li class="item-513"><strong>Workrate</strong>  {profile.workrate}
                                 </li>
                                 <li class="item-514"><strong>Position </strong> {profile.position}
                                 </li>
                                 <li class="item-515"><strong>Joined </strong> {profile.joined}
                                 </li>
                                 <li class="item-516"><strong>Contact </strong> {profile.contact}
                                 </li>
                                 <li class="item-517"><strong>Height </strong>{profile.height}
                                 </li>
                                 <li class="item-518"><strong>Weight </strong> {profile.weight}
                                 </li>
                                 <li class="item-519"><strong>Crossing</strong> {profile.crossing}
                                 </li>
                                 <li class="item-520"><strong>Accuracy </strong>{profile.accuracy}
                                 </li>
                                 <li class="item-521"><strong>Short Passing</strong> {profile.shortPassing}
                                 </li>
                                 <li class="item-522"><strong>Volleys </strong>{profile.volleys}
                                 </li>
                                 <li class="item-523"><strong>Finishing </strong>{profile.finishing}
                                 </li>
                             </ul>



                         </div>
                     </div>
                 </div>

             </div >

        )

    }


export default Profile
