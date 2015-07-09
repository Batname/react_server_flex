import React, {PropTypes} from 'react';
import Header from './header/app-header';

let Template = {
  propsTypes: {
    children: PropTypes.object
  },
  render(){
    return (
          <div className='container'>
            <Header />
            {this.props.children}
          </div>
        );
  }
};

export default React.createClass(Template);
