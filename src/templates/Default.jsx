import { Box } from '@mui/system'
import { makeStyles } from "@material-ui/core"

import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

const useStyles = makeStyles((theme) => ({
    Container: {
        padding: theme.spacing(8, 0, 6)
    }
}))

export default function Default({ children }) {
    const style = useStyles()
    return (
        <>
            <Header />
            <Box className={style.Container}>
                {children}
            </Box>
            <Footer />
        </>
    )
}