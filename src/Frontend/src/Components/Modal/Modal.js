import React from 'react';
import './Modal.css';
import Button from '../Atoms/Button';
import Banner from '../Atoms/Banner';

function shoot() {
    alert("Button operational");
  }

const modal = (props) => {
    return (
        <div className="modal-wrapper"
        style={{
            transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <Banner name={'Menu'} />
            <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Home'} /></div>
            <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Login'} /></div>
            <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Dark Mode'} /></div>
            <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Cart'} /></div>
            <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Profile'} /></div>
            <button className="Menu1__item4" onClick={props.close}>CLOSE</button>
        </div>
    )
}

export default modal;

