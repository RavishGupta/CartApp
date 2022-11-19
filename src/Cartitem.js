import React from 'react';

class Cartitem extends React.Component { 
    constructor(){
        super();
        this.state={
            price:999,
            title: 'Phone',
            qty:1,
            img:''
        }
    }
    increaseQuanity = () =>{

    }
    render(){
        const {price , title , qty} =this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div id='cart-item-actions'>
                        {/* {buttons} */}
                        <img alt='increase' className='action-icons' src='https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg' onClick={this.increaseQuanity.bind(this)}/>
                        <img alt='decrease' className='action-icons' src='https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' />
                        <img alt='delete' className='action-icons' src='https://as2.ftcdn.net/v2/jpg/03/73/50/09/1000_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg' />
                    </div>
                </div>
            </div>
        );
    }
}
const styles ={
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'#ccc'
    }
  }
export default Cartitem