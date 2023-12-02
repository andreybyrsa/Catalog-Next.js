'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { IconButton, SxProps, Theme } from '@mui/material'
import { Close } from '@mui/icons-material'

import type { ModalLayoutProps } from './ModalLayout.types'

const ContentWrapperStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 1,
  width: 700,
  minHeight: 300,
  maxHeight: 500,
  overflow: 'scroll',
  bgcolor: 'white',
  borderRadius: 2,
}

const ContentHeaderStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'end',
}

export default function ModalLayout({
  children,
  isOpened,
  setIsOpened,
  canGoBack,
}: ModalLayoutProps) {
  const router = useRouter()

  const handleCloseModal = useCallback(() => {
    if (setIsOpened) {
      setIsOpened(false)
    }
    if (canGoBack) {
      router.back()
    }
  }, [setIsOpened, canGoBack, router])

  return (
    <Modal
      open={isOpened}
      onClose={handleCloseModal}
    >
      <Box sx={ContentWrapperStyles}>
        <Box sx={ContentHeaderStyles}>
          <IconButton onClick={handleCloseModal}>
            <Close />
          </IconButton>
        </Box>

        {children}
      </Box>
    </Modal>
  )
}
