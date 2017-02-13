import React from 'react';
import './TodoListItem.less';

export const TodoListItem = ({index, text, onDone, t}) => {
    return (
        <li className={'todo-list-item'}>
            <a className="done" onClick={onDone}>{t('done')}</a>{`${index}) ${text}`}
        </li>
    );
};

TodoListItem.propTypes = {
    index: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    onDone: React.PropTypes.func.isRequired
};

export default TodoListItem;