import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';

function CreateEvent() {
    const [bannerURL, setBannerUrl] = useState(null)
    const [logoURL, setLogoURL] = useState(null)
    const [profile, setProfile] = useState(null)
    const [title, setTitle] = useState(null)
    const [webUrl, setWebUrl] = useState(null)
    const [date, setDate] = useState(null)
    const [location, setLocation] = useState(null)
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(null)

    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        try {
            const profileData = await supabase.auth.user()

            if (!profileData) {
                router.push('/')
            } else {
                console.log(profileData)
                setProfile(profileData)   
            }

        } catch (error) {
            alert(error.message)
            router.push('/')
        }
    }

    async function AddEvent() {
      try {
        setLoading(true)

        const data = {
          "parent_org":profile.id,
          "date":date,
          "detail":{
            "title":title,
            "banner_url":bannerURL,
            "logo_url":logoURL,
            "web_url":webUrl,
            "location":location,
            "details":details
          }
        }
  
        console.log(data)
        let { error } = await supabase.from('events').upsert(data, {
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

    if(profile)
    return (
        <>
            <div className={styles.container}> 
                    <div>
                      <div style={{margin:'10px 0'}}>
                          <label>Banner Image</label>
                          <ImageUpload
                            url={bannerURL}
                            sizeh={175}
                            sizew={'100%'}
                            onUpload={(url) => {
                              setBannerUrl(url)
                            }}
                          />
                        </div>

                        <div style={{display:"flex",alignItems:'center'}}>
                        <div style={{height:'100%',width:'40%'}}>
                          <ImageUpload
                            url={logoURL}
                            sizeh={215}
                            sizew={215}
                            onUpload={(url) => {
                              setLogoURL(url)
                            }}
                          />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",flexGrow:'1',marginLeft:'10px'}}>
                          <label>Event Title</label>
                          <input 
                              className={styles.input_box} 
                              type="text" id="name" name="name" 
                              placeholder="Enter the Event name..."
                              onChange={(e) => setTitle(e.target.value)}
                          />

                          <label>Website URL</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-globe" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="text" id="price" name="price" 
                                  placeholder="Enter the URL..."
                                  onChange={(e) => setWebUrl(e.target.value)}
                              />
                          </div>

                          <label>Date</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-calendar" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="date" id="price" name="price" 
                                  placeholder="Enter the Date..."
                                  onChange={(e) => setDate(e.target.value)}
                              />
                          </div>
                        </div>
                        
                      </div>

                        <label>Location</label>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <div style={{margin:'5px 20px'}}>
                                <input type="radio" value="online" id="offline"
                                    onChange={(e) => setLocation('online')} name="location" 
                                />
                                <i className="fas fa-video" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="male">Online</label>
                            </div>
                            

                            <div>
                                <input type="radio" value="offline" id="offline"
                                    onChange={(e) => setLocation('offline')} name="location" 
                                />
                                <i className="fas fa-users" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="female">Offline</label>
                            </div>
                        </div>

                        <label>About</label>
                        <textarea 
                             className={styles.input_box+' '+styles.textarea} 
                             type="textarea" id="name" name="name" 
                             placeholder="Enter event details here..."
                             rows="15" cols="50"
                             onChange={(e) => setDetails(e.target.value)}
                        />

                        <button 
                            className={styles.btn}
                            style={{width:'100%'}}
                            onClick={() => AddEvent()}
                            disabled={loading}
                        >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                    </div>
                </div>
        </>
    )
}


export default CreateEvent