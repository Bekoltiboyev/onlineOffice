import React from 'react';
import '../static/css/Companiya.css';
import {motion} from 'framer-motion'
import { fadeIn } from '../Variant';

function Companiya() {
    return (
        <>
            <div className="container componiya mt-5 pb-3">
                <div className="kompaniya mb-5">
                    <motion.iframe 
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.4 }} 
                        className='video_player' 
                        src="https://www.youtube.com/embed/NhmvI-fF6pY?si=ODoS9apYBtWmVY0M" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </motion.iframe>
                </div>
            </div>
        </>
    );
}

export default Companiya;
