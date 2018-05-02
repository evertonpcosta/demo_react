import React, { Component } from "react"

export default class Comment extends Component {
    state = {
        open: true,
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        if (this.state.open === false) {
            return (
                <div className="comment">
                    <button onClick={this.toggle}>Mostrar  Comentário</button>
                </div>
            )
        }
        return (
            <div className="comment">
                <button onClick={this.toggle}>Ocultar Comentário</button>
                <p className="comment_user">{this.props.user}</p>
                {this.props.children}
            </div>
        )
    }
}