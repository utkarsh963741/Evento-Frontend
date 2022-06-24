import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import Card from '../components/Card';

function Home() {
    const [profile, setProfile] = useState(null)
    const [type, setType] = useState(null)

    useEffect(() => {
        fetchProfile()
    }, [])

    useEffect(() => {
        fetchData()
    }, [profile])

    useEffect(() => {
        fetchFeed()
    }, [type])

    async function fetchProfile() {
        try {
            const profileData = await supabase.auth.user()

            if (!profileData) {
                router.push('/')
            } 
            else{
                setProfile(profileData)
            }

        } catch (error) {
            alert(error.message)
            router.push('/')
        }
    }

    async function fetchData() {
        if(profile)
        try {
            const {data, error} = await supabase.from('type').select('*').eq('entity_id',profile.id)
 
            if(data)
            {
                console.log(data[0].type)
                setType(data[0].type)
            }

        } catch (error) {
            alert(error.message)
        }
    }

    async function fetchFeed() {
        if(profile && type)
        {
            if(type=="organization")
            {
                let aff = []
                try {
                    const {data, error} = await supabase.from('organization').select('*').eq('id',profile.id)
        
                    if(data)
                    {
                        console.log(data[0].affeliate_org)
                        aff = [...data[0].affeliate_org]
                        // setType(data[0].type)
                    }

                } catch (error) {
                    console.log(error.message)
                }
                finally
                {
                    try {
                        const {data, error} = await supabase.from('post').select('*').in('id',aff)
            
                        if(data)
                        {
                            console.log(data)
                        }
    
                    } catch (error) {
                        console.log(error.message)
                    }
                }
            }
            else
            {
                console.log('fuck')
            }
        }
    }

    return (
        <>
            <Layout>
                <div>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </Layout>

        </>
    )
}

export default Home