import { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Image from '../wiki';

class Home extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <ul className="nav">
                        <li className="lii">
                            <Link to="/" className='l'>WikiPedia</Link>
                        </li>
                        <li className="lii">
                            <Link to="/timer" className='l'>Timer</Link>
                        </li>
                    </ul>
                </nav>
                <Image />
            </div>
        );
    }
}

export default Home;

