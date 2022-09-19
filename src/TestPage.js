import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/TestPage.css';

class TestList extends React.Component{
    render() {
        return(
        <div>
            <h1>List of {this.props.name}</h1>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>);
    }
}
class Hi extends React.Component(){
    render(){ return(
        <div>Hi There</div>
    );
}
}

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }

  ReactDOM.render(<h1>HELLO</h1>,document.getElementById('root'));