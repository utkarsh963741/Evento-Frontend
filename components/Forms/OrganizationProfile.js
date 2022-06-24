import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import Select from 'react-select';

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';

function OrganizationProfile() {
    const [profile, setProfile] = useState(null)
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
        fetchOrganizations()
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

    const [imageURL, setImageURL] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [college, setCollege] = useState(null)
    const [founded, setFounded] = useState(null)
    const [location, setLocation] = useState(null)
    const [link, setLink] = useState(null)
    const [affiliate, setAffiliate] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(null)

    async function CreateOrganization() {
        try {
          setLoading(true)
          var affiliateOrg = []

          if(selectedOption)
            affiliateOrg = [...selectedOption].map(item=>{return item.value})

          const data = {
            "name":name,
            "web_link":link,
            "dp":imageURL,
            "other_info":{
                "phone":phone,
                "email":profile.email,
                "college":college,
                "founded":founded,
            },
            "location":location,
            "affeliate_org":affiliateOrg,
            "bio":bio
          }
    
          console.log(data)
          let { error } = await supabase.from('organization').upsert(data, {
            returning: 'minimal', // Don't return the value after inserting
          })
    
          if (error) {
            throw error
          }
        } catch (error) {
          alert(error.message)
        } finally {
          try{
                let { error } = await supabase.from('type').upsert({"entity_id":profile.id,"type":"organization"}, {
                    returning: 'minimal', // Don't return the value after inserting
                  })
            }
            catch(error)
            {
                alert(error)
            }
            finally{
                setLoading(false)
                router.push('/home')
            }
        }
      }
   
      const [OrgData, setOrgData] = useState(null)
      const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  async function fetchOrganizations() {
    try {
        const {data , error} = await supabase
        .from('organization')
        .select(`id,name`)

        if (data) {
          let temp= [...data].map((item)=>{return {'value':item.id,'label':item.name}})
          console.log(temp)
          setOrgData(temp) 
        }

    } catch (error) {
        console.log('error',error)
    }
}

  if(profile)
    return (
        <>
            <div className={styles.container}>
                    
                    <div>
                      <div style={{display:"flex"}}>
                      <div style={{margin:'0px 20px 40px 20px'}}>
                          <label>Profile Image</label>
                          <ImageUpload
                            url={imageURL}
                            sizeh={175}
                            sizew={175}
                            onUpload={(url) => {
                              setImageURL(url)
                            }}
                          />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",flexGrow:'1'}}>
                          <label>Name</label>
                          <input 
                              className={styles.input_box} 
                              type="text" id="name" name="name" 
                              placeholder="Enter Name of Organization..."
                              onChange={(e) => setName(e.target.value)}
                          />

                          <label>Email</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-envelope" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="text"
                                  placeholder={profile.email}
                                  disabled='true'
                              />
                          </div>

                          <label>Phone no.</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-phone" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="tel" id="phone" name="phone" 
                                  placeholder="Enter your mobile no..."
                                  onChange={(e) => setPhone(e.target.value)}
                              />
                          </div>
                        </div>
                        
                      </div>
                        
                        <label>College</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-graduation-cap" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="text" id="college" name="college" 
                                placeholder="Enter your College name..."
                                onChange={(e) => setCollege(e.target.value)}
                            />
                        </div>

                        <label>Founding On</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-lightbulb-on" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="date" id="time" name="time" 
                                placeholder="Enter the founding year..."
                                onChange={(e) => setFounded(e.target.value)}
                            />
                        </div>

                        <label>Location</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-location" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="text"  id="location" name="location" 
                                placeholder="Enter the location of organization..."
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <label>Website Link</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-link" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="text" id="link" name="link" 
                                placeholder="Enter your website link..."
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>
                        
                        <label>Affiliate Organization</label>
                        {
                          OrgData
                          ?
                          <div className={styles.select_box} >
                              <Select
                                  
                                  isMulti
                                  placeholder="Select Option"
                                  value={selectedOption}
                                  options={OrgData}
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
                        
                        
                        
                        
                        <label>About Us</label>
                        <textarea 
                             className={styles.input_box+' '+styles.textarea} 
                             type="textarea" id="name" name="name" 
                             placeholder="Tell something about your organization..."
                             rows="4" cols="50"
                             onChange={(e) => setBio(e.target.value)}
                        />

                        <button 
                            className={styles.btn}
                            style={{width:'100%'}}
                            onClick={() => CreateOrganization()}
                            disabled={loading}
                        >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                    </div>
                </div>
        </>
    )
}


export default OrganizationProfile