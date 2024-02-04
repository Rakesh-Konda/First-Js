import {Component} from 'react'
import Home from '../Home';
import { Link } from 'react-router-dom';
import './index.css'

class Hi extends Component{
    state={time:0,minutes:0,green:false,red:false}
    id=null;
    go=()=>{
        {this.start()}
    }
    start = () => {
        if (this.id !== null) {
            clearInterval(this.id);
        }
    
        this.id = setInterval(() => {
            this.setState((prevstate) => {
                const newTime = prevstate.time + 1;
                if (newTime == 60) {
                    this.setState((prevstate)=>({
                        minutes:prevstate.minutes+1,time:0,
                    }))
                    clearInterval(this.id);
                    // this.setState({time:0})
                    {this.go()}
                }
    
                return {
                    time: newTime,
                    green: !prevstate.green,
                    red: false
                };
            });
        }, 1000);
    };
    
    stop=()=>{
        this.setState((prevState)=>({
            red:!prevState.red,
            green:false
        }))
        clearInterval(this.id);
    }
    Reset=()=>{
        this.setState((prevState)=>({
            red:!prevState.red,
            green:false,
            time:0,
            minutes:0
        }))
        clearInterval(this.id);
    }
    render(){
        const {time,green,red,minutes}=this.state;
        return (
            <div className='divt'>
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
                <div className='tc'>
                    <div >
                        <h1>Timer</h1>
                        <p className='min'>Minutes : 
                          <span className='span'>{"  "+minutes/2}</span>
                        </p>
                        <p className='p'>{time}</p>
                    </div>
                    <div>
                        <button type='button' disabled={green} className='green' onClick={this.start}>Start timer</button>
                        <button type='button' disabled={red} className='red' onClick={this.stop}>Stop timer</button>
                        <button type='button'  className='meroon' onClick={this.Reset}>Reset timer</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hi