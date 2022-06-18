import React, { useState, useEffect } from 'react'
import styles from '../styles/Grid.module.css'
// import Grid1 from './GridTypes/Grid1'
// import Grid2 from './GridTypes/Grid2'
// import Grid3 from './GridTypes/Grid3'
import dynamic from 'next/dynamic'

const Grid1 = dynamic(() => import("./GridTypes/Grid1"), {
ssr: false,
});
const Grid2 = dynamic(() => import("./GridTypes/Grid2"), {
ssr: false,
});
const Grid3 = dynamic(() => import("./GridTypes/Grid3"), {
ssr: false,
});

function makeGrid(info,type,i)
{
    if(type==0)
    {
        return (
            <Grid1 data={info} key={i}/>
        )
    }
    else if(type==1)
    {
        return (
            <Grid2 data={info} key={i}/>
        )
    }
    else
    {
        return (
            <Grid3 data={info} key={i}/>
        )
    }
}

function Grid(props) {
    if(props.data)
    {
        var imageGrid = [...props.data].map(item => {
            return (
                <div className={styles.hoverCard}>
                    <img src={item.src} style={{width:'100%'}} alt=""></img>
                    <div className={styles.details}>
                        <div>
                            <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {item.likes}
                        </div>
                        <div>
                            <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {item.comments}
                        </div>
                    </div>
                </div>
            )
        })

        var imageData = [...props.data]
        var res = []
        var i=0;

        while(i<imageData.length)
        {
            var temp = imageData.slice(i, i+6);
            i=i+6;
            
            var gridType = Math.floor(Math.random() * 4);

            res.push(makeGrid(temp,gridType,i))
        }



    
        return (
            <div className={styles.gridContainer}>
                {/* {imageGrid} */}
                {res}
            </div>
        )
    }
    else{
        return (
            <>
            </>
        )
    }
    
}


export default Grid