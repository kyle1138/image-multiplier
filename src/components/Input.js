import React, { Component } from 'react';

class Input extends Component {


  newImage(e){
    this.props.setImage(this.refs.url.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newImage.bind(this)}>
          <label>
            Image Path:
          </label>
          <input type="text" ref="url" defaultValue=
          'http://www.aejohg.com/p/rp/dce7513f4ce0af8a.png?mi_u=9044120806f0171564715ae34ea1e78a0e5be63b3a5488292140ad84e3d6a2fb&token=9044120806f0171564715ae34ea1e78a0e5be63b3a5488292140ad84e3d6a2fb&rsvp=XMB27700258482&campaign_mail_id=XMB2UMCA&cell_id=2222CAP7&mi_env=e3&'/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Input;
