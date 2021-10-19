import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '60%'
  },
}))

const Card = ({ image, title, subtitle, buttons }) => {
  const styles = useStyles()

  return (
    <CardMUI>
      <CardMedia
        className={styles.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" content="h2">
          {title}
        </Typography>
        <Typography variant="h5" content="h2">
          {subtitle}
        </Typography>
      </CardContent>
      {
        buttons
          ? <CardActions>
            {buttons}
          </CardActions>
          : null
      }
    </CardMUI>
  )
}

export default Card