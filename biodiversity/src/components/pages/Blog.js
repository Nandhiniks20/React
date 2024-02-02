import React from "react";
import image from './blog1.jpg'
const Blog = ()=>{
    return(
        <div className="main-container" style={{width: '77.6%', height: '100%',padding:'5cm', marginLeft:'-2cm',display:'flex', backgroundColor:' rgb(161, 206, 233)'}}>
            <div>
            <p style={{position: 'absolute',left:'1cm', top:'5cm'}}>As a young researcher in the field of hydroclimatic disaster management, I have visited many remote and disaster-affected and worse-impacted communities. I have always been sad experiencing their incapability and lack of resources of government to tackle the situation. Last year, I had the opportunity to join the UN Climate Conference COP28, where I had some incredible experiences that are keeping my hope alive .</p>
            <h2 style={{position: 'absolute',left:'2cm', top:'7.5cm'}}>COP PROCESS AND LOSS & DAMAGE FUND</h2>
            <img  className="image" src={image}></img>
            <p className="para2" style={{position:'absolute', top:'10cm', maxWidth:'50%', left:'12cm'}}>In the era of the climate crisis, the Conference of the Parties (COP) plays a major role in finding solutions. COP is the process that brings all parties together to solve the crisis. In COP, all the countries, along with the NGO, civil society, observers, private sector, and youth, meet to find a solution and how to contribute from their perspectives. In terms of cashing the goal into reality, COP28 is a milestone with the commitments of the Loss and Damage fund.Usually, we have two groups one is the polluters who are liable for global warming and climate change historically, and the other is the climate change-impacted and vulnerable communities. </p>
            <p style={{position:'absolute',left:'1cm'}}>Loss and damage refer to the negative consequences, arising from the risks of climate change, like floods, cyclones, rising sea levels, river erosion, prolonged heatwaves, and crop failures. In this context, the loss and damage fund is a global financial package that refers to the compensation that the polluting countries whose industrial growth has resulted in global warming and driven the planet into a climate crisis, pay for the damage that has been done to others and to help those impacted countries to be capacitated them to fight back from these loss of climate change.</p>
        </div>
        </div>
    )
}
export default Blog;