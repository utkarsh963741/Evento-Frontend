import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import Card from '../components/Card';

function Home() {
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