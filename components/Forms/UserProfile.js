import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';
import Select from 'react-select';

function UserProfile() {

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
    const [branch, setBranch] = useState(null)
    const [sem, setSem] = useState(null)
    const [gender, setGender] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(null)

    async function CreateUser() {
        try {
          setLoading(true)
          var followOrg = []

          if(selectedOption)
            followOrg = [...selectedOption].map(item=>{return item.value})
    
          const data = {
            "id":profile.id,
            "name":name,
            "email":profile.email,
            "phone":phone,
            "dp":imageURL,
            "other_info":{
                "college":college,
                "branch":branch,
                "sem":sem,
                "gender":gender,
            },
            "bio":bio,
            "following":followOrg
          }
    
          console.log(data)
          let { error } = await supabase.from('user').upsert(data, {
            returning: 'minimal', // Don't return the value after inserting
          })
    
          if (error) {
            throw error
          }
        } catch (error) {
          alert(error.message)
        } finally {
            try{
                let { error } = await supabase.from('type').upsert({"entity_id":profile.id,"type":"user"}, {
                    returning: 'minimal', // Don't return the value after inserting
                  })
            }
            catch(error)
            {
                alert(error)
            }finally{
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
                              placeholder="Enter your name..."
                              onChange={(e) => setName(e.target.value)}
                          />

                          <label>Email</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-envelope" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder={profile.email}
                                  disabled='true'
                              />
                          </div>

                          <label>Phone no.</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-phone" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="tel"  id="phone" name="phone" 
                                  placeholder="Enter your phone no..."
                                  onChange={(e) => setPhone(e.target.value)}
                              />
                          </div>
                        </div>
                        
                      </div>
                        

                        <label>College Name</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-graduation-cap" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="text"  id="college" name="college" 
                                placeholder="Enter your college name ..."
                                onChange={(e) => setCollege(e.target.value)}
                            />
                        </div>

                        <div style={{display:'flex',marginTop:'5px'}}>
                            <div>
                                <label>Branch</label>
                                <select className={styles.input_box}  
                                        id="branch" name="branch"
                                        style={{width:'95%'}}
                                        onChange={(e) => setBranch(e.target.value)}
                                >
                                    <option value="cse">Computer Science Engineering</option>
                                    <option value="ise">Information Science Engineering</option>
                                    <option value="ece">Electronics and Communication Engineering</option>
                                    <option value="ise">Engineering</option>
                                </select>
                            </div>
                            
                            <div>
                                <label>Semester</label>
                                <select className={styles.input_box}  
                                        id="sem" name="sem"
                                        onChange={(e) => setSem(e.target.value)}
                                >
                                    <option value="1">1st</option>
                                    <option value="2">2nd</option>
                                    <option value="3">3rd</option>
                                    <option value="4">4th</option>
                                    <option value="5">5th</option>
                                    <option value="6">6th</option>
                                    <option value="7">7th</option>
                                    <option value="8">8th</option>
                                </select>
                            </div>
                            
                        </div>

                        <label>Gender</label>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <div style={{margin:'5px 20px'}}>
                                <input type="radio" value="male" id="male"
                                    onChange={(e) => setGender('male')} name="gender" 
                                />
                                <i className="fas fa-male" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="male">Male</label>
                            </div>
                            

                            <div>
                                <input type="radio" value="female" id="female" name='gender'
                                    onChange={(e) => setGender('female')}
                                />
                                <i className="fas fa-female" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="female">Female</label>
                            </div>
                        </div>
                        
                        <label>About Me</label>
                        <textarea 
                             className={styles.input_box+' '+styles.textarea} 
                             type="textarea" id="name" name="name" 
                             placeholder="Tell something about yourself..."
                             rows="4" cols="50"
                             onChange={(e) => setBio(e.target.value)}
                        />

                        <label>Follow Some Organization</label>
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

                        <button 
                            className={styles.btn}
                            style={{width:'100%'}}
                            onClick={() => CreateUser({})}
                            disabled={loading}
                        >
                            {loading ? 'Loading ...' : 'Submit'}
                        </button>
                    </div>
                </div>
        </>
    )
}


export default UserProfile