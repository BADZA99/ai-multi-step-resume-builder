import React from 'react'
import db from '../../utils/db';
export default async function Dashboard() {
  await db();
  return (
    <div>
      dashboard page 
    </div>
  )
}
