import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import styles from '../styles/Explore.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import Grid from '../components/Grid';

function Explore() {
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
                        {'src':'/assets/grid.jpg','likes':'190','comments':'456'},
                    ]
    return (
        <>
            <Layout>
                <Grid data={imageData}/>
            </Layout>
        </>
    )
}


export default Explore