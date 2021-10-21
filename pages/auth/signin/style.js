import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: 'white',
    padding: theme.spacing(6),
    borderRadius: '5px',
  },
  formControl: {
    marginBottom: theme.spacing(1)
  },
  inputLabel: {
    color: 'black'
  },
  button: {
    backgroundColor: 'black',
  },
  error: {
    color: 'red',
  },
  circularProgress: {
    display: 'block',
    margin: "7px auto",
    color: 'black',
  },
  alertError: {
    margin: '20px 0',
  },
  boxSeparator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    width: '100%',
    height: 1,
    margin: theme.spacing(7, 0, 4),

    '& span': {
      backgroundColor: 'white',
      padding: '0 30px',
    }
  },
  buttonGoogle: {
    color: 'white',
    backgroundColor: 'black'
  },
}))

export default useStyles