import React from "react";
import image from './images/news.webp'
import '../styles/News.css'
const News = ()=>{
    return(
        <div className="news-content">
            <div className="firstnews">
            <figure>
                <a target="_blank" href="https://theguardian.com/environment/2024/jan/18/nature-in-england-at-risk-due-to-government-failures-says-environment-watchdog">
                <img src={image} alt='image'></img>
                <figcaption>Nature in England at risk due to government failures, says environment watchdog</figcaption>
        </a>
            </figure>
            </div>
            
        </div>
    )
}
export default News;