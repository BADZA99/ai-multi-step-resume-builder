import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useResume } from "@/context/resume";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function Step1Create() {
  // context
  const { Resume, setResume, Step, setStep, saveResume } = useResume();

  //hooks
  const {isSignedIn} = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveResume();
    console.log(Resume);
    //save to db
    //go to step 2
    // setStep(2);
  };

  const handleChange = (e) => {
   const {name,value}=e.target;

  //  update  resume data 
    setResume((prevState)=>{
      const updatedResume={...prevState,[name]:value};
      // save updated resume to local storage
      localStorage.setItem('resume',JSON.stringify(updatedResume));
      return updatedResume;
    });
  };
  return (
    <div className="w-full lg:w-1/2 shadow-lg border-t-4 rounded-lg p-5 ">
      <h2 className="text-2xl font-bold mb-5">Personal Information</h2>{" "}
      <Input
        name="name"
        className="mb-3"
        onChange={handleChange}
        value={Resume?.name}
        placeholder="Your Name"
        type="text"
        autoFocus
        required
      />
      <Input
        name="job"
        className="mb-3"
        onChange={handleChange}
        value={Resume?.job}
        placeholder="Your Job"
        type="text"
        required
      />
      <Input
        name="phone"
        className="mb-3"
        onChange={handleChange}
        value={Resume?.phone}
        placeholder="Your Phone"
        type="number"
        required
      />
      <Input
        name="address"
        className="mb-3"
        onChange={handleChange}
        value={Resume?.address}
        placeholder="Your Address"
        type="text"
        required
      />
      <Input
        name="email"
        className="mb-3"
        onChange={handleChange}
        value={Resume?.email}
        placeholder="Your Email"
        type="email"
        required
      />
      <div className="flex justify-end ">
        {!isSignedIn ? (
          <SignInButton>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              sign in to save
            </Button>
          </SignInButton>
        ) : (
          <Button onClick={handleSubmit} className="">
            save
          </Button>
        )}
      </div>
    </div>
  );
}
