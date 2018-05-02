import React, { Component } from "react"
import Comment from "./Comment"
import CommentBox from "./CommentBox"

class Comments extends Component {
    state = {
        comments: []
    }
    componentDidMount() {
        console.log(this.props.postId)
        const url = `https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`
        fetch(url).then(response => {
            response.json().then(data => {
                this.setState({
                    comments: data
                })
            })
        })
    }

    insertComment = comment => {
        const { comments } = this.state
        const newComments = [{
            body: comment.body,
            name: comment.name,
            id: comments.lenght + 1,
        }, ...comments]

        this.setState({
            comments: newComments
        })
        console.log(comment)
    }
    render() {
        return (
            <div className="comments">
                <CommentBox insertComment={this.insertComment} />
                {this.state.comments.map(comment => {
                    return (
                        <Comment key={comment.id} user={comment.name} >
                            {comment.body.split("\n").map((block, index) => {
                                return (
                                    <p key={index}>{block}</p>
                                )
                            })}
                        </Comment>
                    )
                })}
            </div>
        )
    }
}

export default Comments;