import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function getUserData(user: any, token: any){
    console.log("I am getting the user data")
    // Added the non-null assertion operator to prevent undefined values
    axios.defaults.headers!['Authorization'] = token
    
    axios.get('https://swift-trade-v1.herokuapp.com/api/v1/user',{
        headers: {
            'Authorization' : `Bearer ${token}`
        }})
        .then((res: any) => {
            console.log('This is the user response', res)  
            saveToken(token, res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
}

export function removeUserData(token: any, userData: any ){
   cookies.remove(token, { path: '/' });
   cookies.remove(userData, { path: '/' });
   console.log('I am removing cookies')
}


export function saveToken(token: any, userData : any){
    // cookies.set('token', )
    console.log(
    cookies.set('token', token, { path: '/' }))
    cookies.set('userData', userData, { path: '/' });
    // console.log(cookies.get('myCat')); // Pacman
}

export function getToken(){
    let token = cookies.get('token')
    // console.log('This is the token' +  token)
    console.log()
    return token
}

export function getTokenByRedux(){
    let token = cookies.get('token')
    // console.log('This is the token' +  token)
    console.log(' I got called by redux', token)
    return token
}
export async function getUser(){
    let user = await cookies.get('userData')
    // console.log('This is the user data')
    // console.log(user)
    return user
}


export function getTokenWithMethod(callback: any){
    let token = cookies.get('token')
    console.log('This is the token' +  token)
    console.log('This shows that the functions is asynchronous')
    callback()
    return token
}

export function saveUserData(){

}

export function getUserRole(this: any){
    console.log("I am getting the user data")
    axios.get('https://swift-trade-v1.herokuapp.com/api/v1/role')
        .then((res) => {
            console.log('This is the user response', res)    
            this.setState({user: res})
        })
        .catch((err)=>{console.log(err)})
}