import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function LoadingComponent() {
  return (
    <div className='text-4xl font-bold text-center'>
       <CircularProgress size="3rem" />
    </div>
  )
}

export default LoadingComponent