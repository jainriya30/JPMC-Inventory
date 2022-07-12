import React from 'react';
import { Login, Signup} from '../../components';
import './Register.scss'

const Register = ({compo}) => {
  return (
    <div>
        <div className="app__image">
            <div className="app__image-inner">
            {compo}
            </div>
        </div>
    </div>
  )
}

export default Register