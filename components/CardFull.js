import React, { useState, useEffect } from 'react';
import styles from '../styles/CardFull.module.css'

function CardFull(props) {
    let commentRender = []
    if(props.comment && props.comment.length > 1)
    {
        commentRender = [...props.comment].map((item,index)=>{
            <div className={styles.comment}>
                <b>{item.user.name}</b> {item.text}
            </div>
        })
    }
    return (
        <div className={styles.cardBody}>
            <div className={styles.closeIcon}><i className='far fa-times' onClick={props.close}></i></div>
            <div className={styles.cardContainer}>
                <div className={styles.imageContainer}>
                    <img src={'https://anhjgolybidaizfwffyu.supabase.co/storage/v1/object/public/images/'+props.data.pic} style={{width:'100%'}} alt=""></img>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.cardHeader}>
                        <div>
                            <img src={'https://anhjgolybidaizfwffyu.supabase.co/storage/v1/object/public/images/'+props.data.organization.dp}  alt=""></img>
                            <p style={{fontWeight:'600'}}>{props.data.organization.name}</p>
                        </div>
                    </div>

                    <div className={styles.caption}>
                        {props.data.caption}
                    </div>

                            {commentRender?
                        <div className={styles.commentContainer}>
                            {commentRender} 
                        </div>
                    :''}

                    <div className={styles.buttonContainer}>
                        <i className='far fa-heart'></i>
                    </div>
                    <div className={styles.postDetails}>
                        {props.data.no_likes?<div>Liked by <div onClick={() => handleOpen()}> {props.data.no_likes} </div> people</div>:''}
                        <p>3 hours ago</p>
                    </div>

                    {
                        props.userType == 'user'
                        ?
                        <div className={styles.addComment}>
                            <i className='far fa-smile'></i>
                            <input onChange={(e) => setMyComment(e.target.value)}></input>
                            <div 
                                        className={styles.btn}
                                        style={{width:'100%'}}
                                        onClick={() => AddComment()}
                                        disabled={loading}
                                    >
                                        {loading ? 'Loading ...' : 'Post'}
                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
                

            </div>
        </div>
    )
}

export default CardFull
