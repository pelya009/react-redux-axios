import { connect } from 'react-redux';
import FormAdd from '../components/FormAdd';

import { addUser } from '../actions';

const mdtp = {
  addUser,
};

const FormAddContainer = connect(null, mdtp)(FormAdd);

export default FormAddContainer;
