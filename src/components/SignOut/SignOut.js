import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    className="button"
    type="button"
    onClick={auth.doSignOut}
  >
    Cerrar sesión
  </button>

export default SignOutButton;
