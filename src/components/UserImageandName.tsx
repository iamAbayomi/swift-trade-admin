/* eslint-disable jsx-a11y/alt-text */

import { useState, useEffect } from "react"
import styled from "styled-components"

interface UserDetails{
    image: string,
    name: string
}

function UserImageandName(props: UserDetails){
    
    const [profileImage, setProfileImage] = useState("")

    useEffect(()=>{
        setUserProfileImage()
    })

    function setUserProfileImage(){
        if(props.image == null){
            setProfileImage('./vectors/empty-user.png')
        }
        else{
            setProfileImage(props.image)
        }
    }

    return(
        <div>
            <div className="display-flex-withoutspace">
                <UserImage src={profileImage} />
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default UserImageandName


const UserImage = styled.img`
    margin: 0px 20px 0px 0px;
    height: 40px;
`