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
                             rows="4" cols="50"
                           //   onChange={(e) => setName(e.target.value)}
                        />

                        <div>
                            <label>Branch</label>
                            <select className={styles.input_box}  
                                    id="branch" name="branch"
                                    // onChange={(e) => setType(e.target.value)}
                            >
                                <option value="cse">Computer Science Engineering</option>
                                <option value="ise">Information Science Engineering</option>
                                <option value="ece">Electronics and Communication Engineering</option>
                                <option value="ise">Engineering</option>
                            </select>
                        </div>

                        <button 
                            className={styles.btn}
                            style={{width:'100%'}}
                            onClick={() => AddProduct({ name, price, time ,imageURL})}
                            // disabled={loading}
                        >
                            Create Post
                            {/* {loading ? 'Loading ...' : 'Add Product Type'} */}
                        </button>
                    </div>
                </div>
        </>
    )
}


export default CreateEvent