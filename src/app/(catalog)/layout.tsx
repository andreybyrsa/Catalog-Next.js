import { PropsWithChildren } from 'react'
import { Box, SxProps, Theme } from '@mui/material'

import SideBar from '@Components/SideBar/SideBar'

const LayoutStyles: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
}

const SideBarWrapperStyles: SxProps<Theme> = {
  width: { md: '25%', lg: '20%' },
}

const ContentWrapperStyles: SxProps<Theme> = {
  width: { md: '75%', lg: '80%' },
  overflowY: 'scroll',
}

export default function ElectronicsLayoutPage({ children }: PropsWithChildren) {
  return (
    <Box
      component="main"
      sx={LayoutStyles}
    >
      <Box sx={SideBarWrapperStyles}>
        <SideBar />
      </Box>

      <Box sx={ContentWrapperStyles}>{children}</Box>
    </Box>
  )
}
