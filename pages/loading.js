import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

function Loading() {

    const [profile, setProfile] = useState(null)
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    useEffect(() => {
        fetchData()
    }, [profile])

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

    async function fetchData() {
        if(profile)
        {
            try {
                const { data, error } = await supabase
                .from('type')
                .select()
                .eq('entity_id',profile.id)
    
                if(data)
                {
                    router.push('/home')
                }
                else
                {
                    router.push('/createProfile')
                }
    
            } catch (error) {
                alert(error.message)
                router.push('/')
            }
        }
       
    }

    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',width:'100vw'}}>
                <img src="/assets/loading.gif" alt='loading...' height={100} ></img>
        </div>
    )
}


export default Loading