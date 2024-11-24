'use server';
import db from '../utils/db';
import Resume from '../models/resume';
import { currentUser } from '@clerk/nextjs/server';


export const saveResumeToDb=async (data)=>{
    try{
        db();
        const user= await currentUser();
        const userEmail=user?.emailAddresses[0]?.emailAddress;

        const {_id,...rest}=data;
        const resume=await Resume.create({...rest,userEmail});

        return JSON.parse(JSON.stringify(resume));
    }
    catch(error){
        console.log(error);
    }
}

export const getUserResumesFromDb=async ()=>{
    try{
        db();
        const user= await currentUser();
        const userEmail=user?.emailAddresses[0]?.emailAddress;
        const Resumes=await Resume.find({userEmail});
        return JSON.parse(JSON.stringify(Resumes));
        // return Resumes;

    }catch(error){
        console.log(error);
    }

}
