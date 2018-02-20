import { connect } from 'react-redux';
import FormAdd from '../components/FormAdd';

import { addUser } from '../actions';

const mapDispatchToProps = {
        addUser
} 

const FormAddContainer = connect(null, mapDispatchToProps)(FormAdd)

export default FormAddContainer;