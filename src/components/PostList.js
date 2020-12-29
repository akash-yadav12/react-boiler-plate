import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) =>{
                console.log(res)
                this.setState({posts:res.data})
            })
            .catch(e=>{
                console.log(e)
                this.setState({error:"error retrieving data"})
            })
    }
    
    render() {
        const {posts,error} = this.state
        return (
            <div>
                List of posts       
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                { error? <div>{error}</div>:null}
            </div>
        )
    }
}

export default PostList
