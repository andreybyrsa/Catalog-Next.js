'use client'

import { useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { DevicesOutlined, YardOutlined } from '@mui/icons-material'
import { Box, Divider, Typography } from '@mui/material'

import type { LeftSideBarTab } from './LeftSideBar.types'

const leftSideBarTabs: LeftSideBarTab[] = [
  {
    id: 0,
    text: 'Электроника',
    icon: <DevicesOutlined />,
    path: '/electronics',
  },
  { id: 1, text: 'Дача и сад', icon: <YardOutlined />, path: '/garden' },
]

function LeftSideBar() {
  const router = useRouter()
  const pathname = usePathname()

  const navigateToUrl = useCallback((url: string) => router.push(url), [router])

  const checkCurrentPath = useCallback(
    (currentPath: string) => pathname?.includes(currentPath),
    [pathname],
  )

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Каталог товаров</Typography>

      <List>
        {leftSideBarTabs.map(({ id, text, icon, path }, index) => (
          <div key={id}>
            <ListItemButton
              selected={checkCurrentPath(path)}
              onClick={() => navigateToUrl(path)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            {index !== leftSideBarTabs.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Box>
  )
}

export default LeftSideBar
