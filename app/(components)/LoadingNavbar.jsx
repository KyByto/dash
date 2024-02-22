import React from 'react'
import { Skeleton } from '@mui/material';

export default function LoadingNavBar() {
  return (
    <main className="w-screen h-screen">
       <Skeleton animation="wave" variant="rectangular" width="100vw" height="15vh" borderRadius={16} />
        <Skeleton animation="wave" variant="circular" width={60} height={60} style={{ position: 'absolute', top: '2.5%', left: '2%' }} className='hidden sm:block' />
        <Skeleton animation="wave" variant="rectangular" width="85vw" height="10vh" style={{position:"absolute" , top:'2.5%' , left:'10%'}}  />



    </main>
  )
}
