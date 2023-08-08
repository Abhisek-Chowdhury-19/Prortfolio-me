import { Component } from 'react';
import '../App.css'
import './mian.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
class Main extends Component{
  state={clicked:false}
  handleclick=() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
    return (
      <>
        <nav className="navigation">
      <a href="/" className="brand-name">
       <h1>Abhisek<span>.</span></h1>
      </a>
     
      <div className="navigation-menu">
        <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
          <li>
            <a href="/home" className='active'>Home</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id='mobile' onClick={this.handleclick}>

      <i className={this.state.clicked ? 'bi bi-x ' : 'bi bi-list'} style={{ fontSize: 40 }}></i>
      
        
      </div>
    </nav>
   {/* <hr></hr> */}
    </>
    );
}
}
export default Main;