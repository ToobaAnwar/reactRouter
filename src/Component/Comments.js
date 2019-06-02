import React, {Component} from 'react';
import axios from 'axios'

class Comments extends Component{
    state = {
        comments : []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            console.log(res , 'response')
            this.setState({
                comments : res.data.slice(0, 10)
            })
        })
    }
    render(){
        const {comments} = this.state;
        const commentList = comments.length ? (
            comments.map(comment =>{
                 return(                    <div className = "post card" key={comment.id}>
                 <div className= "card-content">
                     <span className="card-title">{comment.name}</span>
                     <p>{comment.body}</p>
                 </div>
                 </div>
  
                )
            })
        ) : (
            <div className="center"> No Comments yet </div>
        )
        return(
            <div className="container">
                <h4 className="center">Comments</h4>
                {commentList}
            </div>
        )
    }
}

export default Comments;