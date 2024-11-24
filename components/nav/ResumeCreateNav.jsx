import { useResume } from '@/context/resume';
import React from 'react'
import { Button } from '../ui/button';

export default function ResumeCreateNav() {
    const {Resume, setResume, Step, setStep} = useResume();
  return (
    <div className='flex justify-center w-full py-4'>
      <div className="flex space-x-4">
        {[1,2,3,4,5].map((item)=>(
            <Button key={item} className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-primary  ${item===Step?'bg-primary text-slate-200 dark:text-slate-800':'bg-secondary text-slate-700 dark:text-slate-400'}`} onClick={()=>setStep(item)}
            disabled={item>Step}
            >
                {item}
            </Button>
        ))}
    </div>
            
    </div>
  )
}
