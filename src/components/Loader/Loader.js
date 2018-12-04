import React, { Component } from "react";
import './Loader.css';

class Loader extends Component {
    render () {
        if(this.props.status === 'loading') {
            return (
            <div className="loader">
                <div className="lds-dual-ring"></div>
            </div>
            );
        } else {
            return ( null );
        }
    }
};
//   return (
    // <div class="wrapper">
    //   <div class="pokeball" />
    // </div>
//     <div>
//         <p>Cargando ...</p>
//     </div>
//   );
// };

export default Loader;
