import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }


    render() {

        return(
            this.state.isLoggedIn && <div>Welcome Akash</div>
        )
        
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Akash</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Akash</div>
        //     )
        // } else{
        //     return (
        //         <div>Welcome guest</div>
        //     )
        // }
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Akash</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )

        // return (
        //     <div>
        //         <div>Welcome Akash</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
