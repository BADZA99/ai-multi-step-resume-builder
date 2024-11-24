'use client'
import ResumeCreateNav from '@/components/nav/ResumeCreateNav'
import Step1 from '@/components/resume/Step1'
import Step2 from '@/components/resume/Step2'
import Step3 from '@/components/resume/Step3'
import Step4 from '@/components/resume/Step4'
import Step5 from '@/components/resume/Step5'
import { useResume } from '@/context/resume'
import React from 'react'


export default function ResumeCreatePage() {
    //context
    const {Resume, setResume, Step, setStep} = useResume()
  return (
    <div className='flex flex-col  items-center justify-center h-screen'>
      <ResumeCreateNav/>
        {Step===1 && <Step1 />}
        {Step===2 && <Step2 />}
        {Step===3 && <Step3 />}
        {Step===4 && <Step4 />}
        {Step===5 && <Step5 />}
    </div>
  )
}
