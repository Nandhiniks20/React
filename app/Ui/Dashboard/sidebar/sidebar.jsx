import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink.jsx'
import Image from 'next/image'
import image from './zent.png'
import image1 from './coin.png'
import { PiArrowsLeftRightLight,PiShareNetworkBold,PiBank } from "react-icons/pi";

import {  MdHomeFilled,
    MdOutlineCreditCard,
    MdGroups,
    MdOutlineHomeRepairService,
    MdOutlineSettings,
    MdPayment,
    MdHelpCenter,
    MdLogout } from "react-icons/md";
import { relative } from 'path'

const menuItems = [
    {
        title:"Dasboard",
        path: "/Dashboard",
        icon:"MdHomeFilled"
    },
    {
        title:"Bullion Operations",
        path: "/Bullion%20Operations",
        icon:"MdDirectionsBusFilled"

    },
    {
        title:"Transactions",
        path: "/Transactions",
        icon:"MdShppingBag"
    },
    {
        title:"Your Network",
        path: "/Your Network",
        icon:"MdAttachMoney"
    },
    {
        title:"Consumers",
        path: "/Dashboard/Consumers",
        icon:"MdWordk"
    },
    {
        title:"Other Operations",
        path: "/Other Operations",
        icon:"MdAnalytics"
    },
    {
        title:"Manage Bank Accounts",
        path: "/Manage Bank Accounts",
        icon:"MdPeople"
    },
    {
        title:"FAQ",
        path: "/FAQ",
        icon:"MdOutlineSettings"
    },
    {
        title:"Customize Dashboard",
        path: "/Customize Dashboard",
        icon:"MdHelpCenter" 
    }
]

const Sidebar = ()=>{
    return(
        <div className={styles.container}>  
        <div className={styles.user}>
            <Image className={styles.userImage} src={image} alt="image"/>
            <Image src={image1} alt='image' style={{position:'relative', top:'17.8cm', left:'-2.4cm'}}/>
            {/* <MdOutlineCreditCard style={{position:'relative', top:'3.8cm', left:'-9.6cm', fontSize:'150%'}}/>
            <PiArrowsLeftRightLight style={{position:'relative', top:'5.2cm', left:'-10.7cm', fontSize:'150%'}}/>
            <PiShareNetworkBold style={{position:'relative', top:'6.9cm', left:'-11.3cm', fontSize:'150%'}}/>
            <MdGroups style={{position:'relative', top:'8.5cm', left:'-12cm', fontSize:'170%'}}/>
            <PiBank/> */}
            </div>   
            <div>
            < MdHomeFilled className={styles.MdHomeFilled}/>
            <MdOutlineCreditCard className={styles.MdOutlineCreditCard}/>
            <PiArrowsLeftRightLight className={styles.PiArrowsLeftRightLight}/>
            <PiShareNetworkBold className={styles.PiShareNetworkBold}/>
            <MdGroups className={styles.MdGroups}/>
            <MdOutlineHomeRepairService className={styles.MdOutlineHomeRepairService}/>
            <PiBank className={styles.PiBank}/>
            <MdPayment className={styles.MdPayment}/>
            <MdOutlineSettings className={styles.MdOutlineSettings}/>
                </div>    
            <ul >
                {menuItems.map((item)=>(
                    <li className={styles.dotlessList} key={item.title}>
                    <MenuLink item={item} key={item.title}/>
                </li>
                ))}
                
            </ul>
            </div>
    )
}
export default Sidebar;