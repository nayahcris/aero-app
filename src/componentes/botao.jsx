import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    backgroundImage: 'linear-gradient(to right, blue 0%, #26a0da  51%, #314755  100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: '10px',
    marginBottom: '5px',
    left: '70%'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export const Botao = () => {
  return <StyledButton >Procurar</StyledButton>;
}
