import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../static/css/CaruselComp.css'
import Items from './Items';


function CarouselComp(){

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    return (
        <Carousel breakPoints={breakPoints}>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            <Items className='item_videos'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Dnre5zGu_h8?si=PV2v4M9Cy_rPx4Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Items>
            
        </Carousel>
    )
}

export default CarouselComp