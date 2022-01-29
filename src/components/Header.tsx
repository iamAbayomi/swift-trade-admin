import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { showCurrentUsers } from "../redux/reducers/UsersSlice"

type props = {
    showDashboard : () => void
}

const Header: React.FC<props> = (props ) =>{
    const user : any = useSelector<any[]>(showCurrentUsers)

    
    return(
        <div className="header-bar">
            <img className="menu-toggle" id="toggle-menu" 
                    src="/vectors/menu.svg"
                    onClick={props.showDashboard}
                />
            <img className="logo" src="/vectors/logo.svg" />
            <div className="header-tool">
                <div className="search-bar">
                    <div className="search-content">
                        <div className="search-logo-and-highlight">
                        <img className="search-logo" src="/vectors/search-icon.svg"/>
                        <input className="search-highlight" 
                        placeholder="Search e.g card"
                        />
                        </div>
                    </div>
                </div>
                {/* Profile Information Section */}
                <Link to="/settings/profile"  className="link" style={ {marginTop: "10px" }} >
                    <div className="profile-section" style={{display : 'flex'}}>
                        <img className="profile-image" src={  user ?  user.profile_picture : "/vectors/empty-user.png"} />
                        <p className="username">
                            { user ? `${user?.first_name} ${user?.last_name}`: ' '}
                        </p>
                    </div>
                </Link>

                {/* Notification Icoprofile_image: ''n Section */}
                <Link to="/settings/notification" className="link">
                    <img className="notifications-icon pointer" src="/vectors/notifications.svg" />
                </Link>
            </div>
        </div>
    )
}

export default Header