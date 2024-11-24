'use client'
import React from 'react'
import db from '../../utils/db';
import { useResume } from '@/context/resume';
export default  function Dashboard() {
  const {resumes}=useResume();
  // await db();
  return (
    <div>
      <pre>{JSON.stringify(resumes,null,2)}</pre>
    </div>
  )
}
