import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalPatients() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total de Pacientes</Title>
      <Typography component="p" variant="h4">
        16
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Dia 3 de Setembro, 2020
      </Typography>
      <br/>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
         <strong> Adicionar Paciente</strong>
        </Link>
      </div>
    </React.Fragment>
  );
}