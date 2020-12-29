import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             comments: '',
             topic:'react'
        }
        
    }
    changeValue = (event) =>{
        this.setState({
            userName : event.target.value
        })
    }    
    hanldeCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={this.changeValue}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.hanldeCommentsChange}></textarea>
                </div>
                <div>
                    <label>Option</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>

            </form>
        )
    }
}

export default Form
