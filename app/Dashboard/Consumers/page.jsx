"use client"
import styles from './consumers.module.css'
import { MdOutlineSearch, MdOutlineGroups, MdSimCardAlert, MdOutlinePermContactCalendar, MdOutlinePersonSearch, MdShoppingBag, MdAttachMoney, MdCloudQueue, MdOutlinePeople, MdOutlinePersonAddAlt1 } from "react-icons/md";
import { TiTicket } from "react-icons/ti";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import image from './gold.png'
import Image from 'next/image'
import image2 from './women.png'
import image3 from './chart.png'
import image4 from './chart1.png'
import image5 from './chart2.png'
import image6 from './chart3.png'
import { Select,FormControl, Button } from '@mui/material';
import ManageConsumer from './ManageCustomer/page'
import Link from 'next/link';
const ProductsPage = () => {


    return (
        <div className={styles.mainContainer}>
            <div style={{ position: 'relative' }}>
                <input type='text' placeholder='Search  (Eg.Rewards)' style={{border:'1px', borderRadius: '40px',width: '28%', padding: '10px', display: 'flex', backgroundColor:'rgb(232, 243, 245)' }}></input>
                <div style={{ position:'relative',left: '300px', top: '-28px' }}>
                    <MdOutlineSearch  style={{position:'relative', fontSize:'150%'}}/>
                </div>
                <div className={styles.sicons}>
                    <MdAttachMoney />
                    <MdShoppingBag />
                    <MdOutlinePeople />
                    <MdCloudQueue />
                    <Image src={image} alt="image" width="270" height="60" style={{ marginLeft: '80px', marginTop: '-30px' }} />
                </div>
                <div className={styles.container1}>
                    <div>
                        <h3>Hello Shakir</h3>
                    </div>
                    <div>
                        <h5>You have 134 customer this week</h5>
                    </div>
                    <div style={{ border: '2px solid', borderRadius: '3px', position: 'relative', left: '4px', padding: '4px', width: '100px', height: '20px', backgroundColor: "black" }}>
                        <Image src={image2} alt="image" style={{ position: 'relative', left: '7cm', top: '-3.1cm', width: "165px", height: "155px" }} />
                        < MdOutlinePersonAddAlt1 style={{ fontSize: '20px', backgroundColor: 'white', position: 'relative', top: '-4.2cm', }} />
                        <h5 style={{ fontSize: '10px', position: 'relative', left: '25px', top: '-5.2cm', color: 'white' }}>Add Customers</h5>
                        <div style={{ backgroundColor: 'black', border: '2px solid', borderRadius: '3px', position: 'relative', right: '-120px', padding: '4px', top: '-6.2cm', width: '125px', height: '20px',   }}>
                               
                               {/* <h5 style={{ display:'flex',fontSize: '10px', position: 'relative', left: '25px',
                              top: '-15px', color: 'white' }}>Manage Consumers</h5> */}
                            <Link style={{ display:'flex',fontSize: '11px', position: 'relative', left: '25px',
                              top: '2px', color: 'white',textDecoration: 'none' }} href="/Dashboard/Consumers/ManageCustomer">
                            Manage Consumers
                            </Link>
                            <MdOutlinePersonSearch style={{ fontSize: '20px', position: 'relative', top: '-0.3cm', backgroundColor: 'white' }} />
                        </div>
                        <div className={styles.container3}>
                            <MdOutlinePermContactCalendar style={{ position: 'relative', fontSize: 30, bottom: '-20px', backgroundColor: 'brown' }} />
                            <h4 style={{ position: 'relative', top: '-40px', left: '32px' }}>You have &nbsp;
                                <strong style={{ position: 'relative', fontSize: '25px', top: '1px' }}>276</strong>
                            </h4>
                            <h4 style={{ position: 'relative', top: '-1.5cm', fontSize: '15px' }}><strong style={{ position: 'relative', fontSize: '18px', top: '2px' }}>KYC</strong> approval pending </h4>
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
                            <div className={styles.viewlist}>
                                <h4 style={{ position: 'relative', top: '-0.5cm', left: '15px', color: 'white' }}>View list</h4>
                            </div>
                        </div>
                        <div className={styles.container5}>
                            <TiTicket style={{ position: 'relative', fontSize: 30, bottom: '-20px', backgroundColor: 'blue' }} />
                            <h4 style={{ position: 'relative', top: '-40px', left: '32px' }}>
                                <b style={{fontSize:'160%'}}>32 </b>
                                tickets Open
                            </h4>
                            <div className={styles.viewlistt}>
                                <h4 style={{ position: 'relative', top: '-0.5cm', left: '15px', color: 'white' }}>View list</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h4>Customer Overview</h4>
            <div className={styles.customeroverview}>
                <div className={styles.tcustomers}>
                    <h3 style={{ position: 'relative', top: '-3px', left: '90px', fontSize: '17px' }}>Total Consumers</h3>
                    <MdOutlineGroups style={{ position: 'relative', top: '-45px', left: '10px', fontSize: 80, backgroundColor: 'rgb(39, 24, 90)' }} />
                    <h1 style={{ position: 'relative', top: '-120px', left: '105px' }}>1,342</h1>
                    <div className={styles.directcon}>
                        <h4>Direct Consumer</h4>
                        <h4>Through Associates</h4>
                    </div>
                    <div>
                        <AiOutlineExclamationCircle style={{ position: 'relative', backgroundColor: 'rgb(164, 117, 240)', left: '385px', top: '-269px', fontSize: '70%' }} />
                        <AiOutlineExclamationCircle style={{ position: 'relative', backgroundColor: 'rgb(164, 117, 240)', left: '400px', top: '-230px', fontSize: '70%' }} />
                    </div>
                    <div>
                        <p style={{ position: 'relative', left: '430px', top: '-310px', fontSize: '17px' }}><b>342</b></p>
                        <p style={{ position: 'relative', left: '430px', top: '-303px', fontSize: '17px' }}><b>300</b></p>
                    </div>
                    <div>
                        <p style={{ position: 'relative', left: '475px', top: '-385px' }}>Through Sales Executives</p>
                        <p style={{ position: 'relative', left: '475px', top: '-378px' }}>Through Sales Executives</p>
                    </div>
                    <div>
                        <AiOutlineExclamationCircle style={{ position: 'relative', backgroundColor: 'rgb(164, 117, 240)', left: '675px', top: '-458px', fontSize: '70%' }} />
                        <AiOutlineExclamationCircle style={{ position: 'relative', backgroundColor: 'rgb(164, 117, 240)', left: '665px', top: '-415px', fontSize: '70%' }} />
                    </div>
                    <div>
                        <p style={{ position: 'relative', left: '695px', top: '-495px', fontSize: '17px' }}> 400</p>
                        <p style={{ position: 'relative', left: '695px', top: '-490px', fontSize: '17px' }}>300</p>
                    </div>
                    <div className={styles.revenueEarned}>
                        <h4 styles={{position: 'relative', right: '60px'}}>High Revenue Earned</h4>
                        <div className={styles.top5button}>
                    
                        <h5 style={{ position: 'relative',left:'3px', top:'-8px', }}>Top 5</h5>
                        <FormControl>
                        <Select style={{position: 'relative', border: '1px solid black', width: '2cm', 
                        height:'0.8cm',top:'-1.3cm'}}>
                        </Select>
                        </FormControl> 
                        <Image src={image3} alt='image' style={{position: 'relative',left:'-7cm', fontSize:'5px', width:'900%', height:'1000%'}}/>
                        <Image src={image4} alt='image' style={{position: 'relative', left:'-27cm', width:'700px', height:'300px', top:'-270px'}}/>
                        </div>
                    </div>
                    <div className={styles.customeranalysis}>
                        <h3>Customer Ananlysis</h3>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.4cm', padding:'5px', top:'-41px', left:'293px'}}>
                            Past week
                        </div>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.4cm', padding:'5px', top:'-73px', left:'400px', backgroundColor:'black', color:'white'}}>
                            Past Month
                        </div>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.4cm', padding:'5px', top:'-105px', left:'507px'}}>
                            Past Year
                        </div>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.4cm', padding:'5px', top:'-137px', left:'613px'}}>
                            All Time
                        </div>
                        <div>
                            <p style={{ position: 'relative',left:'3px', top:'-145px'}}>Activity</p>
                            <p style={{ position: 'relative',left:'80px', top:'-181px'}}>Stock</p>
                            <p style={{ position: 'relative',left:'150px', top:'-217px'}}>Volume</p>
                            <Image src={image5} alt='image' style={{position:'relative', width: "720px", height: "350px", top:'-230px'}}/>
                        </div>
                        <div className={styles.greattrans}>
                        <h4 style={{position:'relative'}}>5 Greatest Transactions</h4>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.2cm'}}>
                            Past Week
                        </div>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.3cm', backgroundColor:'black', color:'white', top:'-22px', left:'88px'}}>
                            Past Month
                        </div>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.4cm', top:'-44px', left:'180px'}}>
                            Past Year
                        </div>
                        <div style={{ position: 'relative',border:'1px solid black',borderRadius: '4px',width: '2.2cm', top:'-66px', left:'276px'}}>
                            All Time
                        </div>
                        <Image src={image6} alt='image' style={{position:'relative', width:'375px', height:'300px', top:'-50px'}}/>
                    </div>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}
export default ProductsPage;