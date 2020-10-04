import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import styles from './Calculator.module.scss';

const Calculator = () => {

  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState()

  const calculateImc = () => {
    const alturam = altura/100
    setImc((peso/(alturam*alturam)).toFixed(2))
  }

  const verifyImc = () => {
    if (imc < 18.5) return "Abaixo do peso"
    if (imc < 24.9) return "Peso normal"
    if (imc < 29.9) return "Sobrepeso"
    if (imc < 34.9) return "Obesidade grau 1"
    if (imc < 39.9) return "Obesidade grau 2"
    return "Obsesidade grau 3"
  }

  return (
    <div className={styles.calculator}>
      <Container maxWidth="sm">
        <Typography variant="h3">Calculadora</Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Altura em cm"
              variant="filled"
              fullWidth
              type="number"
              value={altura}
              onChange={({ target }) => setAltura(target.value)}
              />
          </Grid>

          <Grid item>
            <TextField
              label="Peso em kg"
              variant="filled"
              fullWidth
              type="number"
              value={peso}
              onChange={({ target }) => setPeso(target.value)}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => calculateImc()}
            >
              Calcular
            </Button>
          </Grid>
          {
            imc &&
            <Grid item>
              <Typography>O seu IMC é: {imc} kg/m² - {verifyImc()} </Typography>
            </Grid>
          }
          
        </Grid>
      </Container>
      
    </div>
  );
};

export default Calculator;