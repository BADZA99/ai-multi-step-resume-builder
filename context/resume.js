"use client";
import React from "react";

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

  return (
    <ResumeContext.Provider
      value={{
        Resume,
        setResume,
        Step,
        setStep,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => React.useContext(ResumeContext);
