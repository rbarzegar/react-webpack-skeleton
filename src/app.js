import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

class HelloWorld extends React.Component {
   render() {
      return (
         <h1>Hello World</h1>
      );
   }
};

const mount = document.getElementById("app");
ReactDOM.render(<HelloWorld />, mount);
