import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import Select from 'react-select';

import styles from '../styles/Form.module.css'
import Link from 'next/link'
import UserProfile from '../components/Forms/UserProfile'
import OrganizationProfile from '../components/Forms/OrganizationProfile';


function createProfile() {
    const data = [
        {
          value: 1,
          label: "User"
        },
        {
          value: 2,
          label: "Organization"
        }
      ];

      const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <h2 style={{margin:"10px"}}>Create Profile</h2>

                <label>Select Profile Type</label>
                <div className={styles.select_box} >
                <Select
                    placeholder="Select Option"
                    value={selectedOption} // set selected value
                    options={data} // set list of the data
                    onChange={handleChange} // assign onChange function
                />
                </div>
                <UserProfile/>
                <OrganizationProfile/>
            </div>
        </div>
    )
}


export default createProfile