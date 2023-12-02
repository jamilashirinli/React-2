import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Adress'
import PersonalInfo from './PersonalInfo'
import './Profil.css'
const Profil = () => {
    return (
        <div>
            <Email email="Email: cema.sirinli@gmail.com" />
            <Name name="Name: Jamila" />
            <Address Address="Address: Nizami distrivt, Elshan Suleymanov street" />
            <PersonalInfo age="Age: 20"  phone="Phone: +994 99 718 20 03" />
        </div>
    )
}

export default Profil