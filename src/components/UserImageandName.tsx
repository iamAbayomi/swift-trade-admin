/* eslint-disable jsx-a11y/alt-text */

interface UserDetails{
    image: string,
    name: string
}

function UserImageandName(props: UserDetails){
    return(
        <div>
            <div className="display-flex">
                <img src={props.image} />
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default UserImageandName