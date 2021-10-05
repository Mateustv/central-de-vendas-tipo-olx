import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar, Container, IconButton, makeStyles, Button, Divider, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useState } from 'react'
import { Menu } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  titleName: {
    marginLeft: 8,
  }
}))

export default function Header() {
  const style = useStyles()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>

            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined" >
                Anunciar e Vender
              </Button>
            </Link>

            <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src="" />
                  : <AccountCircle />
              }
              <Typography variant="subtitle2" color="secondary" className={style.titleName}>
                Nome Teste
              </Typography>
            </IconButton>

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => { setAnchorUserMenu(null) }}
            >
              <Link href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publica novo anúncios</MenuItem>
              </Link>
              <Divider />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
