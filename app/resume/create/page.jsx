'use client'
import { useResume } from '@/context/resume'
import React from 'react'

export default function ResumeCreatePage() {
    //context
    const {Resume, setResume, Step, setStep} = useResume()
  return (
    <div>
      <pre>
        {JSON.stringify(Resume, null, 2)}
      </pre>
    </div>
  )
}
