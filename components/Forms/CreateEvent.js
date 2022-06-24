import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';

function CreateEvent() {
    const [imageURL, setImageURL] = useState(null)
    return (
        <>
            <div className={styles.container}> 
                    <div>
                      <div style={{margin:'10px 0'}}>
                          <label>Banner Image</label>
                          <ImageUpload
                            url={imageURL}
                            sizeh={175}
                            sizew={'100%'}
                            onUpload={(url) => {
                              setImageURL(url)
                            }}
                          />
                        </div>

                        <div style={{display:"flex",alignItems:'center'}}>
                        <div style={{height:'100%',width:'40%'}}>
                          <ImageUpload
                            url={imageURL}
                            sizeh={215}
                            sizew={215}
                            onUpload={(url) => {
                              setImageURL(url)
                            }}
                          />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",flexGrow:'1'}}>
                          <label>Event Title</label>
                          <input 
                              className={styles.input_box} 
                              type="text" id="name" name="name" 
                              placeholder="Enter the Event name..."
                            //   onChange={(e) => setName(e.target.value)}
                          />

                          <label>Website URL</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-globe" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder="Enter the URL..."
                                //   onChange={(e) => setPrice(e.target.value)}
                              />
                          </div>

                          <label>Date</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-calendar" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder="Enter the Date..."
                                //   onChange={(e) => setPrice(e.target.value)}
                              />
                          </div>
                        </div>
                        
                      </div>

                        <label>Location</label>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <div style={{margin:'5px 20px'}}>
                                <input type="radio" value="male" id="male"
                                    // onChange={this.handleChange} name="gender" 
                                />
                                <i className="fas fa-video" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="male">Online</label>
                            </div>
                            

                            <div>
                                <input type="radio" value="female" id="female"
                                    // onChange={this.handleChange} name="gender" 
                                />
                                <i className="fas fa-users" style={{fontWeight:"100",margin:'0px 10px'}}></i>
                                <label for="female">Offline</label>
                            </div>
                        </div>
                        
                        <label>Organization</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-table" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="number" min="0.00" step="any" id="time" name="time" 
                                placeholder="Organization..."
                                // onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <label>About</label>
                        <textarea 
                             className={styles.input_box+' '+styles.textarea} 
                             type="textarea" id="name" name="name" 
                             placeholder="Enter event details here..."
                             rows="15" cols="50"
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


export default CreateEvent