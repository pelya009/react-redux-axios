import { connect } from 'react-redux';
import FormAdd from '../components/FormAdd';

import { addUser } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        onAdd: name => dispatch(addUser(name))
    };
} 

const FormAddContainer = connect(null, mapDispatchToProps)(FormAdd)

export default FormAddContainer;