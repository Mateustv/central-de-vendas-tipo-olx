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
  }
}))

export default useStyles