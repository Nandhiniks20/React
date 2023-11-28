"use client"
import styles from './page.module.css'
import { MdOutlineSearch, MdPersonAddAlt,MdOutlineGroups, MdSimCardAlert, MdOutlinePermContactCalendar, MdOutlinePersonSearch, MdShoppingBag, MdAttachMoney, MdCloudQueue, MdOutlinePeople, MdOutlinePersonAddAlt1 } from "react-icons/md";
import Image from 'next/image';
import image from '../gold.png'
import image2 from '../women.png'
import image3 from './data1.png'
import image4 from './data2.png'
import image5 from './data3.png'

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TiTicket } from "react-icons/ti";


import Link from 'next/link';
const ManageConsumer = () =>{
    return(
        <div className={styles.navbarContainer}> 
        <div styles={{position: 'relative'}}> 
        <input type='text' placeholder='Search  (Eg.Rewards)' style={{position:'relative', border: '1px',borderRadius: '40px',width: '30%', padding: '10px', backgroundColor:'rgb(232, 243, 245)', left:'1cm' }}></input>
                <MdOutlineSearch className={styles.search}/>
                <div className={styles.sicons}>
                    <MdAttachMoney />
                    <MdShoppingBag />
                    <MdOutlinePeople />
                    <MdCloudQueue />
                    <Image src={image} alt="image" style={{ position:'relative' }} />
                </div>
                <div className={styles.container1}>
                    <div >
                        <Image src={image2} alt="image" style={{position:'relative', left:'340px', width:'32%', top:'-6px'}}/>
                        <div style={{ fontSize: '16px', position: 'relative', left: '5px', top: '-3.9cm', color: 'blue' }}>Customers {'>'}</div>
                        {/* <div style={{ position: 'relative', right: '-120px', padding: '4px', top: '-6.2cm', width: '120px', height: '20px' }}> */}
                            <Link style={{ position: 'relative', left: '108px',top: '-4.4cm', color:'blue', fontSize: '16px', textDecoration: 'none' }} href="/Dashboard/Consumers">Manage Consumers
                            </Link>
                            <p style={{ position: 'relative', left: '10px', top:'-170px'}}><b>Actions</b></p>
                            <div className={styles.addcustomers} >
                            <p style={{position: 'relative', left: '60px', top:'-10px'}}>Add Consumers</p>
                            <MdPersonAddAlt style={{ fontSize: '30px', left:'15px',position: 'relative', top: '-1.3cm', }} />
                            </div>
                        {/* </div> */}
                        <div className={styles.container3}>
                            <MdOutlinePermContactCalendar style={{ position: 'relative', fontSize: 30, bottom: '-20px', backgroundColor: 'brown' }} />
                            <h4 style={{ position: 'relative', top: '-40px', left: '32px' }}>You have &nbsp;
                                <strong style={{ position: 'relative', fontSize: '25px', top: '1px' }}>276</strong>
                            </h4>
                            <h4 style={{ position: 'relative', top: '-1.5cm', fontSize: '15px', padding:'10px' }}> approval pending </h4>
                            <div className={styles.viewlist}>
                                <h4 style={{ position: 'relative', top: '-0.5cm', left: '15px', color: 'white' }}>View list</h4>
                        </div>
                       
                        </div>
                        <div className={styles.container4}>
                            <AiOutlineExclamationCircle style={{ position: 'relative', fontSize: 30, bottom: '-20px', backgroundColor: 'red' }} />
                            <h4 style={{ position: 'relative', top: '-40px', left: '32px' }}>There are &nbsp;
                                <strong style={{ position: 'relative', fontSize: '25px', top: '1px' }}>182</strong>
                            </h4>
                            <h4 style={{ position: 'relative', top: '-1.5cm', fontSize: '15px' }}><strong style={{ position: 'relative', fontSize: '15px', top: '2px' }}>high risk</strong> consumers </h4>
                            <div className={styles.viewlistt}>
                                <h4 style={{ position: 'relative', top: '-0.5cm', left: '15px', color: 'white' }}>View list</h4>
                            </div>
                        </div>
                        <div className={styles.container5}>
                            <TiTicket style={{ position: 'relative', fontSize: 30, bottom: '-20px', backgroundColor: 'blue' }} />
                            <h4 style={{ position: 'relative', top: '-40px', left: '32px' }}>
                                <b style={{fontSize:'160%'}}>32 </b>
                                tickets Open
                            </h4>
                            <div className={styles.viewlisttt}>
                                <h4 style={{ position: 'relative', top: '-0.5cm', left: '15px', color: 'white' }}>View list</h4>
                            </div>
                        </div>
                        <h3 style={{position: 'relative',top:'-15cm'}}>Customer Overview</h3>
                        <div className={styles.search1}>
                            <h4 style={{position: 'absolute', left:'20px', top:'-15px', color:'lightgrey'}}>Search Consumers</h4>
                            <MdOutlineSearch style={{position: 'relative', left:'350px', fontSize:'140%', top:'10px'}} />
                        </div>
                        <div className={styles.data}>
                            <Image src={image3} alt="image" style={{position: 'relative', width:'150%', height:'140%', top:'-5pm'}}/>
                            <Image src={image4} alt="image" style={{position: 'relative', width:'160%', height:'356px', left:'7.7cm', top:'-9.5cm'}}/>
                            <Image src={image5} alt="image" style={{position: 'relative', top:'-20cm', left:'21.7cm',top:'-20.5cm'}}/>
                        </div>
                        
                        </div>
                        </div>

        </div>
            
        </div>
    )
}
export default ManageConsumer;