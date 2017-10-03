import React, { Component } from 'react';

class Cell extends Component {

  constructor(){
    super();
    this.state = {
      rando : Math.random(),
      imagePath : 'http://www.dogbreedplus.com/dog_breeds/images/papastzu.jpg'
    }
  }

  getImage(image_path){
    console.log(image_path);
    var xhr = new XMLHttpRequest();
    var proxy = 'http://cors-proxy.htmldriven.com/?url=';
    // xhr.open("GET", proxy + image_path, true);
    xhr.open("GET", '/ring3.jpg', true);
    // Ask for the result as an ArrayBuffer.
    xhr.responseType = "arraybuffer";
    // request.responseType    = "blob";



    xhr.onload = function( e ) {
      var arrayBuffer = xhr.response;
      console.log(xhr);
      if (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteArray.byteLength; i++) {
          // console.log(byteArray[i]);
          // do something with each byte in the array
        }
      }

      // console.log(this.response);
       // Obtain a blob: URL for the image data to draw it

       var blob = new Blob( [ arrayBuffer ], { type: "image/jpg" } );

       console.log(blob);
       // Get the description from S3 metadata
       var reader          = new FileReader ();
       reader.onload       = function (zFR_Event) {
         console.log(zFR_Event);
         //  document.querySelector('body').append()
         var newIm = new Image();
         newIm.src = zFR_Event.target.result;
         document.querySelector('body').appendChild(newIm);
       };
       reader.readAsDataURL(blob);
    };
    xhr.send();
  }

getImageOld(image_path){

  // var url                 = "http://jsbin.com/images/gear.png";
  var proxy = 'http://cors-proxy.htmldriven.com/?url=';
  var request             = new XMLHttpRequest();
  request.open("GET", proxy + image_path, true);
  request.responseType    = "arraybuffer";
  request.send (null);
  request.onload = function(res){
    console.log('res');
    console.log(res);
    var srcElement = res.srcElement;
    if (srcElement.status === 200) {
        var bb              = new Blob ();
        bb.append (srcElement); // Note: not request.responseText

        var blob            = bb.getBlob ('image/png');
        var reader          = new FileReader ();
        reader.onload       = function (zFR_Event) {
          //  document.querySelector('body').append()
          var newIm = new Image();
          newIm.src = zFR_Event.target.result;
          document.querySelector('body').appendChild(newIm);
        };

        reader.readAsDataURL (blob);
    }
  };

}
  //http://j.b5z.net/zirw/0/i/u/2055634/i/pdir/1269/i/1-schnauzer_puppies_021.jpg?bd=6
  //http://j.b5z.net/zirw/0/i/u/2055634/i/pdir/1269/i/1-schnauzer_puppies_021.jpg?bd=6
  // http://www.aejohg.com/p/rp/dce7513f4ce0af8a.png?mi_u=9044120806f0171564715ae34ea1e78a0e5be63b3a5488292140ad84e3d6a2fb&token=9044120806f0171564715ae34ea1e78a0e5be63b3a5488292140ad84e3d6a2fb&rsvp=XMB27700258482&campaign_mail_id=XMB2UMCA&cell_id=2222CAP7&mi_env=e3&
  // getImage(url){
  //   console.log('getImage');
  //   var proxy = 'http://cors-proxy.htmldriven.com/?url=';
  //   var xhr = new XMLHttpRequest();
  //
  //   xhr.open('GET', proxy + url, true);
  //   xhr.send();
  //   xhr.onload = function() {
  //     if (this.readyState === this.HEADERS_RECEIVED) {
  //         console.log(xhr.getResponseHeader('Content-Type'));
  //     }
  //   };
  // }

  componentWillUpdate(){

    // this.state.rando = rando;
    // this.setState({rando: random});
    this.getImage(this.props.imagePath);
  }

  render() {
    console.log(this.state);
    return (
      <td className="Cell">
        <img alt="" src={this.props.imagePath}/>
      </td>
    );
  }
}

export default Cell;
