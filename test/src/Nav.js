import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <h1>this is the nav</h1>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>about</li></Link>
                    <Link to="/Shop"><li>Shop</li></Link>
                </ul>
            </div>
        )
    }
}
