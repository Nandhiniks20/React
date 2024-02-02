import React from 'react'
import './Home.css'
import image from './image.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg' 
const Home = ()=>{
    return(
        <div className='container'> 
          <body>
                    <div >
                    <div className="main-container">
                    <h2>What is biodiversity</h2>
                    <p><strong>Biodiversity is all the different kinds of life you’ll find in one area—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. Each of these species and organisms work together in ecosystems, like an intricate web, to maintain balance and support life. Biodiversity supports everything in nature that we need to survive: food, clean water, medicine, and shelter.</strong></p>
                    <p>But as humans put increasing pressure on the planet, using and consuming more resources than ever before, we risk upsetting the balance of ecosystems and losing biodiversity.WWF’s 2022 Living Planet Report found an average 69% decline in global populations of mammals, fish, birds, reptiles, and amphibians since 1970. The 2019 landmark Global Assessment Report by the Intergovernmental Platform on Biodiversity and Ecosystem Services reported 1 million animal and plant species are now threatened with extinction—the highest number in human history. </p>
                    </div>
                    <figure>
                    <img className='image' src={image} alt='bird image'></img>
                    <img className='image' src={image2} alt='bird image'></img>
                    <img className='image' src={image3} alt='bird image'></img>

                    </figure>

                    <div className='main-container2'>
                        <h2 >Motive of this website?</h2>
                        <h4>Human attitudes towards biodiversity</h4>
                        <p>Researchers and environmental managers are usually concerned about the attitudes of stakeholders towards wildlife. In a pioneering study, Kellert and Berry (1980) suggested the existence of two primary motivational considerations: the affection for animals, and the economic and pragmatic considerations. Similarly, Serpell (1986) proposed that human attitudes towards animals were based on two dimensions: affection and sympathy, and economic self-interest.</p>
    
                    </div>
                    <div className='main-container3'>
                        <h2>Doñana social-ecological system</h2>
                        <p>We used the concept of social-ecological system (in the sense of Folke et al., 2003) to approach Doñana (SW Spain) as a system composed by ecological and socio-economic sub-systems. Ecological limits of the Doñana social-ecological system are referred, as described Montes et al. (1998), to the Greater fluvial-littoral ecosystem of Doñana (220,000 ha.)</p>
                    </div>
                    <div className='main-container4'>
                        <h2>Data collection and analytical methods</h2>
                        <p>Data were collected between February and October 2004 by direct face-to-face questionnaires, previously pre-tested in December 2003 on a sample of 55 respondents. </p>
                    </div>
                    </div>

                </body>

        </div>
    )
}
export default Home;