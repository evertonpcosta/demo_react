import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class ArticleList extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
            response.json().then(data => {
                this.setState({
                    posts: data
                })
            })
        })
    }
    render() {
        return (
            <ul>
                {this.state.posts.map(post => {
                    return <li kew={post.id}><Link to={`${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        )
    }
}