import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Organization.module.css'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Grid from '../../components/Grid'

function Organization() {

    var imageData =  [
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
        {'src':'/assets/grid.jpg','likes':'190','comments':'456'}
    ]

    const [profileData,setProfileData]=useState(null)
    const [profile,setProfile]=useState(null)

    const router = useRouter();
    const { oid } = router.query;

    return (
        <>
            <Layout>
                <div style=
                        {{
                            maxWidth:'100%',alignItems:'center',
                            display:'flex',flexDirection:'column',justifyContent:'center'
                        }}
                >
                    
                    <div style={{display:'flex',margin:'20px 0',width:'50%',alignItems:'center'}}>
                        <img 
                            src="/assets/grid.jpg" alt="profile" 
                            height={250} width={250} style={{borderRadius:'50%'}}
                        />
                        <div style={{marginLeft:'100px'}}>
                            <h2 style={{fontWeight:'400'}}>The National Institute of Engineering</h2>
                            <br/>
                            <a href='mailto:shubham963741@gmail.com'><i className='fal fa-envelope'/> Email</a> 
                            <br/>
                            <a href='tel:+14123815500'><i className='fal fa-phone'/> phone</a>
                            <br/><br/>
                            <p><i className="fal fa-award"/> College</p>
                            <p><i className='fal fa-compass'/> Location</p>
                            <a href=""><i className='fal fa-link'/> WebLink</a>
                            <br/><br/>
                            <p>About US</p>
                        </div>
                    </div>

                    <Grid data={imageData}/>
                </div>
            </Layout>
        </>
    )
}


export default Organization