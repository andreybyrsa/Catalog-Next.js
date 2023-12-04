import Link from 'next/link'
import { Container, Typography, Button, SxProps, Theme } from '@mui/material'

const ContentWrapperStyle: SxProps<Theme> = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
}

export default function HomePage() {
  return (
    <main>
      <Container sx={ContentWrapperStyle}>
        <Typography
          variant="h4"
          fontWeight="600"
          textAlign="center"
        >
          Добро пожаловать в Catalog Next.js!
        </Typography>
        <Typography
          color="GrayText"
          textAlign="center"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          exercitationem ratione temporibus, nihil animi facere consequuntur
          fugiat! Cumque veniam, soluta ducimus asperiores cum illo dignissimos
          totam hic rem nesciunt possimus.
        </Typography>

        <Button variant="contained">
          <Link href="/electronics">Перейти в каталог</Link>
        </Button>
      </Container>
    </main>
  )
}
