import React, { Component } from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';


class Header extends Component {

  constructor() {
      super();
      
      this.state = {
          isShowing: false
      }
  }

  openModalHandler = () => {
      this.setState({
          isShowing: true
      });
  }

  closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }

  render () {
      return (
    <div className="Headr">


        <div className="Headr__cont1">
          { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
          <button className="open-modal-btn" onClick={this.openModalHandler}></button>
          <div className="Headr__item1">

            <Modal className="modal"
                      show={this.state.isShowing}
                      close={this.closeModalHandler}>
            </Modal>
          </div>
        </div>
        <div className="Headr__item2">
          <Link to="/home">
            <img id="logoKod3rs" src="/img/logo1.png" alt=""/>
          </Link>
        </div>
        <a href="https://google.com" className="Headr__item3">Home</a>
        <a href="https://google.com" className="Headr__item3">Login</a>
        <a href="https://google.com" className="Headr__item3">Dark</a>
        <a href="https://google.com" className="Headr__item3">Profile</a>
        <div className="Cart-component">
            <Link to="/cart2" className="Header-Cart__image">
              <div className="Headr__item4"><img id="Cart" src="/img/cartLgt1.png" alt="" /></div>
            </Link>
        </div>
    </div>
  );
}
}

export default Header;
