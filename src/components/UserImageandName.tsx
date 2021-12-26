/* eslint-disable jsx-a11y/alt-text */

import styled from "styled-components"

interface UserDetails{
    image: string,
    name: string
}

function UserImageandName(props: UserDetails){
    return(
        <div>
            <div className="display-flex-withoutspace">
                <UserImage src={props.image} />
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default UserImageandName


const UserImage = styled.img`
    margin: 0px 20px 0px 0px;
    width: 40px;
`