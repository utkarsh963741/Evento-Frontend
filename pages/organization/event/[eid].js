import React, { useState, useEffect } from 'react'
import { supabase } from '../../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import Link from 'next/link'
import Layout from '../../../components/Layout'
import Grid from '../../../components/Grid'

function Event() {

    const [profileData,setProfileData]=useState(null)
    const [profile,setProfile]=useState(null)

    const router = useRouter();
    const { oid } = router.query;

    return (
        <>
            <Layout>
                <div style={{display:'flex',flexDirection:'column',width:'60%'}}>
                    <img src='/assets/banner.png' alt='banner' style={{maxWidth:'100vw'}}></img>

                    <div>
                        <div style={{display:'flex',margin:'20px 0',width:'100%',alignItems:'center'}}>
                            <img 
                                src="/assets/grid.jpg" alt="profile" 
                                height={250} width={250} style={{borderRadius:'50%'}}
                            />
                            <div style={{marginLeft:'100px'}}>
                                <h2 style={{fontWeight:'400'}}>Title</h2>
                                <br/>
                                <p>Website URL</p>
                                <br/>
                                <p>Date</p>
                                <br/>
                                <p>Location</p>
                                <br/>
                                <p>Registered</p>
                                <button>REGISTER</button>
                            </div>
                        </div>
                        <div style={{margin:'50px 0 100px'}}>About</div>
                        
                    </div>
                </div>
            </Layout>
        </>
    )
}


export default Event