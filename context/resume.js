"use client";
import React from "react";
import { saveResumeToDb } from "@/actions/resume";

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

  const saveResume = async () => {
    try {
      const data = Resume;
      const result = await saveResumeToDb(data);
      alert("Resume saved successfully");
      setResume(result);
      // setStep(2);
      console.log(result);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
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
