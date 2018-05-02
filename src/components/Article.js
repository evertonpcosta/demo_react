import React, { Component } from "react";
import Comments from "./Comments";

class Article extends Component {
    state = {
        body: "",
        title: "Carregando",
    }

    fetchArticle = (id) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url).then(response => {
            response.json().then(data => {
                this.setState({
                    body: data.body,
                    title: data.title,
                })
            })
        })
    }
    componentDidMount() {
        this.fetchArticle(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.fetchArticle(nextProps.match.params.id)
        }
    }
    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="title">{this.state.title}</h1>
                </header>
                {
                    this.state.body.split("\n").map((text, i) => <p key={i}>{text} </p>)
                }
                <Comments postId={this.props.match.params.id} />
            </div>
        )
    }
}
export default Article;