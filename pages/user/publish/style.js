import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mask: {},
  maskMain: {},
  boxContainer: {
    marginBottom: theme.spacing(5)
  },
  box: {
    backgroundColor: 'white',
    padding: theme.spacing(6),
    borderRadius: '5px',
  },
  descriptionTextField: {
    marginBottom: theme.spacing(2)
  },
  thumbsContainer: {
    display: 'flex',
    margin: 15,
    flexWrap: 'wrap',
  },
  dropzone: {
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: '0 15px 15px 0',
    width: 250,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
  },
  thumb: {
    width: 250,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',

    '& $maskMain': {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',
    }

  }
}))

export default useStyles