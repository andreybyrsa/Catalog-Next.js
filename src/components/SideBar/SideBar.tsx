'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { DevicesOutlined, YardOutlined, Menu } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  SxProps,
  Toolbar,
  Typography,
  Theme,
} from '@mui/material'

import type { SideBarTab } from './SideBar.types'

const sideBarTabs: SideBarTab[] = [
  {
    id: 0,
    text: 'Электроника',
    icon: <DevicesOutlined />,
    path: '/electronics',
  },
  { id: 1, text: 'Дача и сад', icon: <YardOutlined />, path: '/garden' },
]

const AppBarStyles: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
  width: '100%',
}

const SideBarWrapperStyles: SxProps<Theme> = {
  height: { xs: '56px', sm: '64px', md: '100%' },
  borderRight: { md: 0.2 },
}

const SideBarDrawerStyles: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 240,
  },
}

const SideBarListStyles: SxProps<Theme> = {
  display: { xs: 'none', md: 'block' },
}

export default function SideBar() {
  const router = useRouter()
  const pathname = usePathname()

  const [isOpenedOnMobile, setIsOpenedOnMobile] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setIsOpenedOnMobile((prevState) => !prevState)
  }, [])

  const navigateToUrl = useCallback(
    (url: string) => {
      router.push(url)

      if (isOpenedOnMobile) {
        setIsOpenedOnMobile(false)
      }
    },
    [router, isOpenedOnMobile],
  )

  const checkCurrentPath = useCallback(
    (currentPath: string) => pathname?.includes(currentPath),
    [pathname],
  )

  const TabsList = useMemo(
    () => (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Каталог товаров</Typography>

        <List>
          {sideBarTabs.map(({ id, text, icon, path }, index) => (
            <div key={id}>
              <ListItemButton
                selected={checkCurrentPath(path)}
                onClick={() => navigateToUrl(path)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              {index !== sideBarTabs.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Box>
    ),
    [checkCurrentPath, navigateToUrl],
  )

  return (
    <Box
      component="nav"
      sx={SideBarWrapperStyles}
    >
      <AppBar
        position="fixed"
        sx={AppBarStyles}
        color="default"
      >
        <Toolbar sx={{ px: { xs: 2 } }}>
          <IconButton
            sx={{ p: 0 }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={isOpenedOnMobile}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={SideBarDrawerStyles}
      >
        {TabsList}
      </Drawer>

      <Box sx={SideBarListStyles}>{TabsList}</Box>
    </Box>
  )
}
