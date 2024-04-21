import axios from "axios";
import React, { Component } from "react";
class Demo extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            show: true
        }
        this.increase = this.increase.bind(this);
    }
    increase() {
        console.log('Clicked');
        this.setState({
            a: this.state.a + 1
        })
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                this.setState({
                    posts: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.setState({
                    show: false
                })
            })
    }
    render() {
        return <>
            {this.state.show && <p>Loading...............</p>}
            {
                this.state.posts.map((ele) => {
                    return <div key={ele.id}>
                        <p>{ele.id}</p>
                        <h2>{ele.title}</h2>
                        <p>{ele.body}</p>
                    </div>
                })
            }
        </>
    }

}
export default Demo