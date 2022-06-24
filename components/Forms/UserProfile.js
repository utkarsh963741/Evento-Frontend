import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';

function UserProfile() {
    const [imageURL, setImageURL] = useState(null)
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
                            //   onChange={(e) => setName(e.target.value)}
                          />

                          <label>Email</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-envelope" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder="Enter your email..."
                                //   onChange={(e) => setPrice(e.target.value)}
                              />
                          </div>

                          <label>Phone no.</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-phone" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder="Enter your phone no..."
                                //   onChange={(e) => setPrice(e.target.value)}
                              />
                          </div>
                        </div>
                        
                      </div>
                        

                        

                        <label>College Name</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-graduation-cap" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="number" min="0.00" step="any" id="time" name="time" 
                                placeholder="Enter your college name ..."
                                // onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <div style={{display:'flex',marginTop:'5px'}}>
                            <div>
                                <label>Branch</label>
                                <select className={styles.input_box}  
                                        id="branch" name="branch"
                                        style={{width:'95%'}}
                                        // onChange={(e) => setType(e.target.value)}
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
                                        // onChange={(e) => setType(e.target.value)}
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
                                    // onChange={this.handleChange} name="gender" 
                                />
                                <i className="fas fa-male" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="male">Male</label>
                            </div>
                            

                            <div>
                                <input type="radio" value="female" id="female"
                                    // onChange={this.handleChange} name="gender" 
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
                           //   onChange={(e) => setName(e.target.value)}
                        />

                        <button 
                            className={styles.btn}
                            style={{width:'100%'}}
                            onClick={() => AddProduct({ name, price, time ,imageURL})}
                            // disabled={loading}
                        >
                            Submit
                            {/* {loading ? 'Loading ...' : 'Add Product Type'} */}
                        </button>
                    </div>
                </div>
        </>
    )
}


export default UserProfile