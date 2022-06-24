import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';

function CreateEvent() {
    const [imageURL, setImageURL] = useState(null)
    const [caption , setCaption] = useState(null)
    const [ownerId, setOwnerId] =  useState(null)
    const [eventData, setEventData] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null);

    const [loading, setLoading] = useState(false)
    const router = useRouter()
 
    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    useEffect(() => {
        fetchEvents()
    }, [ownerId])

    async function fetchProfile() {
        try {
            const profileData = await supabase.auth.user()

            if (!profileData) {
                router.push('/')
            } else {
                console.log(profileData)
                setOwnerId(profileData.id)   
            }

        } catch (error) {
            alert(error.message)
            router.push('/')
        }
    }

    async function fetchEvents() {
        try {
            const {data , error} = await supabase
            .from('events')
            .select(`id,name`)
            .eq('parent_org',ownerId)
    
            if (data) {
              let temp= [...data].map((item)=>{return {'value':item.id,'label':item.name}})
              console.log(temp)
              setEventData(temp) 
            }
    
        } catch (error) {
            console.log('error',error)
        }
    }

    async function CreatePost() {
        try {
          setLoading(true)
          var event = selectedOption

          const data = {
            "caption":caption,
            "pic":imageURL,
            "owner_id":ownerId,
            "event_id":event
          }
    
          console.log(data)
          let { error } = await supabase.from('post').upsert(data, {
            returning: 'minimal', // Don't return the value after inserting
          })
    
          if (error) {
            throw error
          }
        } catch (error) {
          alert(error.message)
        } finally {
            setLoading(false)
            router.push('/home')
        }
      }

    return (
        <>
            <div className={styles.container}> 
                    <div>
                      <div style={{margin:'20px 0',display:'flex',justifyContent:'center'}}>
                          <ImageUpload
                            url={imageURL}
                            sizeh={450}
                            sizew={500}
                            onUpload={(url) => {
                              setImageURL(url)
                            }}
                          />
                        </div>
                        
                        <label>Caption</label>
                        <textarea 
                             className={styles.input_box+' '+styles.textarea} 
                             type="textarea" id="name" name="name" 
                             placeholder="Enter Name of Product..."
                             rows="7" cols="50"
                             onChange={(e) => setCaption(e.target.value)}
                        />

                        <div>
                            <label>Event</label>
                            {
                                eventData
                                ?
                                <div className={styles.select_box} >
                                    <Select
                                        placeholder="Select Option"
                                        value={selectedOption}
                                        options={eventData}
                                        onChange={handleChange} 
                                    />
                                </div>
                                :
                                <div className={styles.select_box} >
                                    <input 
                                        className={styles.icon_input}  
                                        placeholder="Select Option"
                                        disabled='true'
                                    />
                                </div>
                            }
                        </div>

                        <button 
                            className={styles.btn}
                            style={{width:'100%'}}
                            onClick={() => CreatePost()}
                            disabled={loading}
                        >
                            {loading ? 'Loading ...' : 'Create Post'}
                        </button>
                    </div>
                </div>
        </>
    )
}


export default CreateEvent