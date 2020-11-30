import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
export const BotaoRadio = () =>{

    return (
<FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="idaVolta"
          control={<Radio color="primary" />}
          label="Ida e volta"
          labelPlacement="end"
        />
        <FormControlLabel
          value="soIda"
          control={<Radio color="primary" />}
          label="Só Ida"
          labelPlacement="end"
        />
        <FormControlLabel
          value="multDestino"
          control={<Radio color="primary" />}
          label="Mult Destino"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}