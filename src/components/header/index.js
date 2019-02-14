import React from 'react';

const Header = (props) => {
  
    return (
      <div>
        <h1 id="title">{props.title}</h1>
        {props.subtitle && <p id="subTitle">{props.subtitle}</p>}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: 'Notes React + Redux'
  };

export default Header;
