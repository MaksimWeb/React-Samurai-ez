import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import JobYes from "../../Common/JobImage/JobYes";
import JobNo from "../../Common/JobImage/JobNo";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    let jobImage = () => {
        return props.profile.lookingForAJob ? <JobYes/> : <JobNo/>
    }

    return (
        <div>
            <div><img
                src="data:image/jpeg;base64,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"
                alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <div className={s.contactsBlock}>
                    Мои контакты:
                    <span>{props.profile.contacts.facebook}</span>
                    <span>{props.profile.contacts.vk}</span>
                    <span>{props.profile.contacts.twitter}</span>
                    <span>{props.profile.contacts.instagram}</span>
                </div>
                <div>
                    Ищу работу:
                    {jobImage()}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;