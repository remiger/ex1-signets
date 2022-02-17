import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './FloatingActionButton.scss';

const theme = createTheme({
  palette: {
    fonce: {
      // Purple and green play nicely together.
      main: '#333333',
    },
    pale: {
      // This is green.A700 as hex.
      main: '#ffffff',
    },
  },
});

export default function FloatingActionButton() {
    return (
      <div className="FloatingActionButton">
        <ThemeProvider theme={theme}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="fonce" aria-label="add">
              <AddIcon color="pale" />
            </Fab>
          </Box>
        </ThemeProvider>
      </div>
    );
  }