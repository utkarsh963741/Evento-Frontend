import React, { useState, useEffect } from 'react';
import styles from '../styles/Card.module.css'

function Card() {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <div>
                    <img src="/assets/profile.jpg"  alt=""></img>
                    <p style={{fontWeight:'600'}}>user_name</p>
                </div>
                <i className='far fa-expand'></i>
            </div>

            <div className={styles.imageContainer}>
                <img src="/assets/mrr.jpg" style={{height: "100%"}} alt=""></img>
            </div>

            <div className={styles.buttonContainer}>
                <i className='far fa-heart'></i>
                <i className='far fa-comment'></i>
            </div>
            <div className={styles.postDetails}>
                <div>Liked by <div> 170 </div> people</div>
                <p>3 hours ago</p>
            </div>

            <div className={styles.caption}>
                tprasanna_ Spam 2k22 🧡
                #ethnicday
                #nammakudlarally
            </div>

            <div className={styles.commentContainer}>
                <p>View All 11 Comments</p>
                <div className={styles.comment}>
                    <b>bharath__192</b>  @rakshith_shetty_7 last pic is like Akshay Kumar in "mujhse shaadi karogi"😂😂
                </div>
                <div className={styles.comment}>
                    <b>bharath__192</b>  @rakshith_shetty_7 last pic is like Akshay Kumar in "mujhse shaadi karogi"😂😂
                </div>
            </div>

            <div className={styles.addComment}>
                <i className='far fa-smile'></i>
                <input></input>
                <div>Post</div>
            </div>

        </div>
    )
}

export default Card
