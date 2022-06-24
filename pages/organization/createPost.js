import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../../styles/Form.module.css'
import Link from 'next/link'
import Layout from '../../components/Layout'
import CreatePost from '../../components/Forms/CreatePost';

function createEvent() {
    return (
        <>
            <Layout>
                    <div className={styles.container}>
                        <h2 style={{margin:"10px",width:'100%',textAlign:'center'}}>Create Post</h2>
                        <CreatePost/>
                    </div>
            </Layout>

        </>
    )
}

export default createEvent