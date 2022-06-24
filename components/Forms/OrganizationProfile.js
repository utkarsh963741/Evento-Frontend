import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import Select from 'react-select';

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import ImageUpload from '../ImageUpload';

function OrganizationProfile() {
    const [imageURL, setImageURL] = useState(null)
    const data = [
        {
          value: 1,
          label: "cerulean"
        },
        {
          value: 2,
          label: "fuchsia rose"
        },
        {
          value: 3,
          label: "true red"
        },
        {
          value: 4,
          label: "aqua sky"
        }
      ];

      const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }


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
                            //   onChange={(e) => setName(e.target.value)}
                          />

                          <label>Email</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-envelope" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder="Enter your email address..."
                                //   onChange={(e) => setPrice(e.target.value)}
                              />
                          </div>

                          <label>Phone no.</label>
                          <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                              <i className="fas fa-phone" style={{fontWeight:"100"}}></i>
                              <input 
                                  className={styles.icon_input}  
                                  type="number" min="0.00" step="any" id="price" name="price" 
                                  placeholder="Enter your mobile no..."
                                //   onChange={(e) => setPrice(e.target.value)}
                              />
                          </div>
                        </div>
                        
                      </div>
                        

                        

                        <label>College</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-graduation-cap" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="number" min="0.00" step="any" id="time" name="time" 
                                placeholder="Enter your College name..."
                                // onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <label>Founding Year</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-lightbulb-on" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="number" min="0.00" step="any" id="time" name="time" 
                                placeholder="Enter the founding year..."
                                // onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <label>Location</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-location" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="number" min="0.00" step="any" id="time" name="time" 
                                placeholder="Enter the location of organization..."
                                // onChange={(e) => setTime(e.target.value)}
                            />
                        </div>

                        <label>Website Link</label>
                        <div className={styles.icon_input_box} style={{display:"flex",alignItems:"center"}}>
                            <i className="fas fa-link" style={{fontWeight:"100"}}></i>
                            <input 
                                className={styles.icon_input}  
                                type="number" min="0.00" step="any" id="time" name="time" 
                                placeholder="Enter your website link..."
                                // onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        
                        <label>Affiliate Organization</label>
                        <div className={styles.select_box} >
                            <Select
                                
                                isMulti
                                placeholder="Select Option"
                                value={selectedOption} // set selected value
                                options={data} // set list of the data
                                onChange={handleChange} // assign onChange function
                            />
                        
                            {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                                <b>Selected Options</b><br />
                                <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
                            </div>}
                        </div>
                        
                        
                        <label>About Us</label>
                        <textarea 
                             className={styles.input_box+' '+styles.textarea} 
                             type="textarea" id="name" name="name" 
                             placeholder="Tell something about your organization..."
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


export default OrganizationProfile