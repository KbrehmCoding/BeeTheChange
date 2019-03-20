import React from "react";
import Container from 'react-bootstrap/Container';
import {Component} from "react";
import './Post.scss'


// function Post(props) {
//     return (
//         <Container className="post">
//             <p>
//                 {props.children}
//             </p>
//         </Container>

class Post extends Component {
    render() {
        return (
            <Container>
                {this.props.user} {this.props.message}
            </Container>
        );
    }
}

export default Post;