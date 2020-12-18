import React, {Component} from "react";
import pic1 from "../sass/img/natur/nat-8.jpg";
import pic2 from "../sass/img/natur/nat-9.jpg";
import vid from "../sass/img/men_doc/VID_20191221_124918.mp4";




type myProps = {};

type myState = {
  pic1: string,
  pic2: string,
  videoURL: string,
};

class Stories extends Component<myProps ,myState> {
  constructor (props: any) {
    super(props);
    this.state = {
      pic1: pic1,
      pic2: pic2,
      videoURL: vid
    };    
  }
  
  render () {
    return (
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={ vid } type="video/mp4" />
            {/* <!-- <source src="img/natur/video.webm" type="video/webm"> --> */}
                Your browser is not supported
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">O que nossos clientes tem a dizer</h2>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={this.state.pic1} alt="Person" className="story__img" />
              <figcaption className="story__caption">Ana Caroline</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                    Uma delícia
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, dignissimos at error exercitationem accusantium eos! Iure commodi, sint enim sequi magnam distinctio odio iusto quas! Minima, accusantium esse! Hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src={this.state.pic2} alt="Person" className="story__img" />
              <figcaption className="story__caption">Denis Ribeiro</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">
                    Mudou minha vida
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, dignissimos at error exercitationem accusantium eos! Iure commodi, sint enim sequi magnam distinctio odio iusto quas! Minima, accusantium esse! Hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-top-big">
          <a href="https://www.facebook.com/meninasdoceirass/" className="btn-text">Leia todas as histórias <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
        </div>
      </section>
    );
  }
}

export default Stories;
// function Stories() {
//   return (
//     <section className="section-stories">
//       <div className="bg-video">
//         <video className="bg-video__content" autoPlay muted loop>
//           <source src={ vid } type="video/mp4" />
//           {/* <!-- <source src="img/natur/video.webm" type="video/webm"> --> */}
//                 Your browser is not supported
//         </video>
//       </div>
//       <div className="u-center-text u-margin-bottom-big">
//         <h2 className="heading-secondary">O que nossos clientes tem a dizer</h2>
//       </div>
//       <div className="row">
//         <div className="story">
//           <figure className="story__shape">
//             <img src={pic1} alt="Person" className="story__img" />
//             <figcaption className="story__caption">Ana Caroline</figcaption>
//           </figure>
//           <div className="story__text">
//             <h3 className="heading-tertiary u-margin-bottom-small">
//                     Uma delícia
//             </h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, dignissimos at error exercitationem accusantium eos! Iure commodi, sint enim sequi magnam distinctio odio iusto quas! Minima, accusantium esse! Hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="story">
//           <figure className="story__shape">
//             <img src={pic2} alt="Person" className="story__img" />
//             <figcaption className="story__caption">Denis Ribeiro</figcaption>
//           </figure>
//           <div className="story__text">
//             <h3 className="heading-tertiary u-margin-bottom-small">
//                     Mudou minha vida
//             </h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus totam, dignissimos at error exercitationem accusantium eos! Iure commodi, sint enim sequi magnam distinctio odio iusto quas! Minima, accusantium esse! Hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
//           </div>
//         </div>
//       </div>
//       <div className="u-center-text u-margin-top-big">
//         <a href="https://www.facebook.com/meninasdoceirass/" className="btn-text">Leia todas as histórias <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
//       </div>
//     </section>
//   );
// }

// export default Stories;

