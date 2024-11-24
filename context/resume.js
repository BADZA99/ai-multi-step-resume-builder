"use client";
import React from "react";
import { saveResumeToDb } from "@/actions/resume";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ResumeContext = React.createContext();

const initialState = {
  name: "",
  job: "",
  phone: "",
  address: "",
  email: "",
  themeColor: "",
  //   about: '',
  //   skills: [],
  //   education: [],
  //   work: [],
  //   projects: [],
  //   awards: [],
  //   certifications: [],
  //   languages: [],
  //   interests: [],
  //   references: [],
};

export function ResumeProvider({ children }) {
  const [Resume, setResume] = React.useState(initialState);
  const [Step, setStep] = React.useState(1);
const router=useRouter();
  React.useEffect(() => {
    const resume = localStorage.getItem("resume");
    if (resume) {
      setResume(JSON.parse(resume));
    }
  }, []);

  const saveResume = async () => {
    try {
      const data = Resume;
      const result = await saveResumeToDb(data);
      setResume(result);
      toast.success("Resume saved successfully🎉");
      router.push(`/dashboard/resume/edit/${data._id}`);
      setStep(2);
      // console.log(result);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        Resume,
        setResume,
        Step,
        setStep,
        saveResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => React.useContext(ResumeContext);
