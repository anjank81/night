import React, { Component } from 'react';
import TodoDetails from './TodoDetails';
import { ThemeContext } from './theme-context';
import './App.css';
export default class TodoList extends Component {
  render() {
    console.log(this.context);
    console.log(this.props);
    return (
      <div className="App">
        <div>TO-DO List</div>
        <div className="todoContainer">
          {this.context.map((val, i) => {
            return (
              <div key={i} onClick={() => this.props.onClick(val.id)}>
                <div
                  style={{
                    background: val.color == 'light' ? 'azure' : '#0d1cea',
                  }}
                >
                  {' '}
                  {val.title}{' '}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
TodoList.contextType = ThemeContext;
