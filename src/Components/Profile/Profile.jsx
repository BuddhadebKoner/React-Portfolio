import React, { useState } from 'react'
import './Profile.css'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import assets from '../../assets/icons/icons'




export default function Profile() {

    const [showMail, setShowMail] = useState(false);
    const toggleMail = () => setShowMail(!showMail);


    return (
        <>
            <div className="profile-container">
                <div className="profile-photo">
                    <ProfilePhoto />
                </div>
                <div className="follow-me">
                    <button className='super-follow-btn' href="">
                        <img src={assets.Donate} alt="" className='donate-icon' />
                        <h4 className='donate-text'>Donate</h4>
                    </button>
                    <button className='follow-btn hover-btn'>Follow</button>

                    <div className="mail-btn-show-mail-container">
                        <div className="main-btn-container">
                            <button
                                className='mail-btn hover-btn'
                                onClick={toggleMail}
                            >
                                <img src={assets.mail} alt="" className='mail-icon' />
                            </button>
                        </div>

                        <div className="show-mail-container">
                            {showMail && (
                                <div className="mail-box">
                                    <a href="mailto:iambuddhadebkoner@gmail.com">
                                        example@mail.com
                                    </a>
                                </div>

                            )}
                        </div>
                    </div>

                    <button className='threedot-btn hover-btn'><img src={assets.threeDot} alt="" className='mail-icon' /></button>
                </div>
            </div>
        </>
    )
}
