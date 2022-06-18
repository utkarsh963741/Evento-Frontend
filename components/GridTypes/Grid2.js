import React, { useState, useEffect } from 'react'
import styles from '../../styles/Grid.module.css'

function Grid2(props) {

    return (
        <>
             <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div className={styles.hoverCard}>
                                    <img src={props.data[0].src} style={{width:'100%'}} alt=""></img>
                                    <div className={styles.details}>
                                        <div>
                                            <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {props.data[0].likes}
                                        </div>
                                        <div>
                                            <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {props.data[0].comments}
                                        </div>
                                    </div>
                        </div>
                        <div className={styles.hoverCard}>
                                    <img src={props.data[1].src} style={{width:'100%'}} alt=""></img>
                                    <div className={styles.details}>
                                        <div>
                                            <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {props.data[1].likes}
                                        </div>
                                        <div>
                                            <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {props.data[1].comments}
                                        </div>
                                    </div>
                        </div>
                    </div>
                <div className={styles.hoverCardTall}>
                    <img src={props.data[2].src} style={{width:'100%'}} alt=""></img>
                    <div className={styles.detailsTall}>
                        <div>
                            <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {props.data[2].likes}
                        </div>
                        <div>
                            <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {props.data[2].comments}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hoverCard}>
                <img src={props.data[3].src} style={{width:'100%'}} alt=""></img>
                <div className={styles.details}>
                    <div>
                        <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {props.data[3].likes}
                    </div>
                    <div>
                        <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {props.data[3].comments}
                    </div>
                </div>
            </div>
            <div className={styles.hoverCard}>
                <img src={props.data[4].src} style={{width:'100%'}} alt=""></img>
                <div className={styles.details}>
                    <div>
                        <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {props.data[4].likes}
                    </div>
                    <div>
                        <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {props.data[4].comments}
                    </div>
                </div>
            </div>
            <div className={styles.hoverCard}>
                <img src={props.data[5].src} style={{width:'100%'}} alt=""></img>
                <div className={styles.details}>
                    <div>
                        <i className='fas fa-heart' style={{marginRight:'3px'}}></i>  {props.data[5].likes}
                    </div>
                    <div>
                        <i className='fas fa-comment' style={{marginRight:'3px'}}></i>  {props.data[5].comments}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Grid2