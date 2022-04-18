import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardItemProducto from './Card';


export default function VerticalLinearStepper({steps, actual}) {
  const [activeStep, setActiveStep] = React.useState(actual);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              optional={
                index === steps.length-1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.producto.producto} <span style={{ color: '#9e9e9e' }}>(Inicio: {step.inicio})</span> 
            </StepLabel>
            <StepContent>
                {/* -- Card Producto - */}
                <CardItemProducto producto={step.producto} />

                <Box sx={{ mb: 2, mt:4 }}>
                    <div>
                    <Button
                        align="left"
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        {index === steps.length - 1 ? 'Último' : 'Siguiente'}
                    </Button>
                    <Button
                        align="left"
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Atras
                    </Button>
                    </div>
                </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Todas las productos han sido subastados.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Repasar
          </Button>
        </Paper>
      )}
    </Box>
  );
}
