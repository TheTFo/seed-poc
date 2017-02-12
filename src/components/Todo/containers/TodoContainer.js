import { connect } from 'react-redux';
import * as actions from '../../../actions/todoActions';
import TodoPage from '../components/TodoPage';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage); 
