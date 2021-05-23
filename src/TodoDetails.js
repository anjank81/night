import React, { Component } from 'react';
import { ThemeContext } from './theme-context';
import './App.css';
export default class TodoDetails extends Component {
  render() {
    console.log(this.props);
    console.log(this.context);
    return (
      <div className="todoContainer">
        {this.props.index && 'Todo Details'}
        {this.context.map((val) => {
          return (
            <div>
              {val.id === this.props.index && (
                <div>
                  <input
                    type="text"
                    value={val.title}
                    onChange={(e, index) =>
                      this.props.onClick(e.target.value, this.props.index)
                    }
                  />
                  <div>{val.creator}</div>
                  <div>
                    <img src={val.imgURL} alt="TodoPhoto" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
TodoDetails.contextType = ThemeContext;
