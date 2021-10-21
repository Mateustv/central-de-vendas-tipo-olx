import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar, Container, IconButton, makeStyles, Button, Divider, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useState } from 'react'
import { Menu } from '@mui/material'
import { useSession, signOut } from 'next-auth/client'

const useStyles = makeStyles((theme) => ({
  titleName: {
    marginLeft: 8,
  },
  noLink: {
    cursor: 'pointer',
  }
}))

export default function Header() {
  const style = useStyles()
  const [session] = useSession()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Link href="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={style.noLink}>
                Anunx
              </Typography>
            </Link>

            <Link href={session ? "/user/publish" : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" >
                Anunciar e Vender
              </Button>
            </Link>
            {session
              ? (
                <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                  {
                    session.user.image
                      ? <Avatar src={session.user.image} />
                      : <AccountCircle />
                  }
                  <Typography variant="subtitle2" color="secondary" className={style.titleName}>
                    {session.user.name}
                  </Typography>
                </IconButton>
              )
              : null
            }


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
              <MenuItem onClick={() => signOut({
                callbackUrl: '/'
              })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
