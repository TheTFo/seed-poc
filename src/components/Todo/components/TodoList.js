import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.less';

export class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <button onClick={this.props.onClickClear}>Clear All</button>
                <ul>
                    {
                        this.props.todos.map((t, i) =>
                            <TodoListItem
                                key={i}
                                index={i + 1}
                                text={t}
                                onDone={() => this.props.onClickDone(i)} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onClickDone: React.PropTypes.func.isRequired,
    onClickClear: React.PropTypes.func.isRequired
};

export default TodoList;
