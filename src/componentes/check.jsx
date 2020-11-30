import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      }
    },
    checked: {},
    left:'300%'
  })((props) => <Checkbox color="default" {...props} />);

export const  Check = () => {

  return (
    <FormControlLabel className={GreenCheckbox}
    control={
      <Checkbox 
        color="primary"
      />
    }
    label="Ainda não defini a data."
  />
  );
}
