import React, { useState, useEffect } from 'react';
import styles from '../styles/Card.module.css'
import { supabase } from '../utils/supabaseClient'
import CardFull from './CardFull';
import Link from 'next/link'

function Card(props) {
    const [cardOpen, setCardOpen] = useState(false)
    const [comments, setComments] = useState(null)
    const [myComment, setMyComment] = useState(null)
    const [loading, setLoading] = useState(null)

    function handleClose() {
        setCardOpen(false)
    }

    function handleOpen() {
        setCardOpen(true)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    async function fetchComments() {
        try {
            const data = await supabase.from('comment').select('*,user(name)').eq('post_id',props.data.id)

            if (data) {
                console.log(data)
                setComments(data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    async function AddComment() {
        try {
          setLoading(true)
  
          const data = {
            "post_id":props.data.id,
            "text":myComment,
            "user_id":props.profileData.id
          }
    
          console.log(data)
          let { error } = await supabase.from('comment').upsert(data, {
            returning: 'minimal', // Don't return the value after inserting
          })

          const update = await supabase.from('post').update({"no_comments":props.data.no_comments +1}, {
            returning: 'minimal', // Don't return the value after inserting
          })
    
          if (error) {
            throw error
          }
        } catch (error) {
          alert(error.message)
        } finally {
            setLoading(false)
        }
      }

    let commentRender = []
    if(comments && comments.length > 1)
    {
        commentRender = [...comments].map((item,index)=>{
            <div className={styles.comment}>
                <b>{item.user.name}</b> {item.text}
            </div>
        })
    }

    return (
        
        <div style={{display:'relative'}}>
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <div>
                    <img src={'https://anhjgolybidaizfwffyu.supabase.co/storage/v1/object/public/images/'+props.data.organization.dp}  alt=""></img>
                    <p style={{fontWeight:'600'}}>{props.data.organization.name}</p>
                </div>
                <i className='far fa-expand' onClick={() => handleOpen()}></i>
            </div>

            <div className={styles.imageContainer}>
                <img src={'https://anhjgolybidaizfwffyu.supabase.co/storage/v1/object/public/images/'+props.data.pic} style={{height: "100%"}} alt=""></img>
            </div>

            <div className={styles.buttonContainerContainer}>
                <div className={styles.buttonContainer}>
                    <i className='far fa-heart'></i>
                    <i className='far fa-comment' onClick={() => handleOpen()}></i>
                </div>
                {
                    props.data.event_id && props.userType == 'user'?
                    <div className={styles.registerBtn}>
                        <Link href={'/organization/event/'+props.data.event_id}>Register</Link>
                    </div>
                    :
                    ''
                }
                

            </div>
            <div className={styles.postDetails}>
                {props.data.no_likes?<div>Liked by <div onClick={() => handleOpen()}> {props.data.no_likes} </div> people</div>:''}
                <p>3 hours ago</p>
            </div>

            <div className={styles.caption}>
                {props.data.caption}
            </div>

            {commentRender?
                <div className={styles.commentContainer}>
                    <p onClick={() => handleOpen()}>View All {props.data.no_comments? props.data.no_comments :''} Comments</p>
                    {commentRender} 
                </div>
            :''}
            
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

        {
            cardOpen?
            <CardFull data={props.data} profileData={props.profileData} userType={props.userType} comment={comments} close={handleClose}/>
            :
            ''
        }
        </div>
    )
}

export default Card
