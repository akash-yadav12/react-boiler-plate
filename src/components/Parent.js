import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
// import Purecomponent from './PureComponent'
// import RegularComp from './RegularComp'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"akash"
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Akash'
            })
        },2000)
    }
    render() {
        console.log('Parent Component render')
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
                {/* <RegularComp name={this.state.name}/>
                <Purecomponent name={this.state.name}/>  */}
            </div>
        )
    }
}

export default Parent
