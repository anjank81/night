/* eslint-disable array-callback-return */
import React from 'react';
import { ThemeContext, items, itemsDetails } from './theme-context';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
function Todo(props) {
  return <TodoList onClick={props.changeTheme}></TodoList>;
}
function TodoDet(props) {
  return (
    <TodoDetails onClick={props.changeTheme} index={props.id}></TodoDetails>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      itemsDetails: itemsDetails,
      index: null,
    };

    this.toggleTheme = (e) => {
      // eslint-disable-next-line array-callback-return

      this.setState({ index: e });
    };
    this.change = (e, i) => {
      console.log(e, i);
      itemsDetails.map((val) => {
        val.title = val.id === i ? e : val.title;
      });
      items.map((val) => {
        val.color =
          val.id === i && i === this.state.index
            ? val.color === 'dark'
              ? 'light'
              : 'dark'
            : val.color;
        val.title = val.id === i ? e : val.title;
      });
      this.setState({ itemsDetails: itemsDetails, items: items });
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.items}>
          <Todo changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemeContext.Provider value={this.state.itemsDetails}>
          <TodoDet changeTheme={this.change} id={this.state.index} />
        </ThemeContext.Provider>
      </div>
    );
  }
}
