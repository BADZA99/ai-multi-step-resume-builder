import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useResume } from "@/context/resume";

export default function Step1() {
  // context
  const { Resume, setResume, Step, setStep } = useResume();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Resume);
    //save to db
    //go to step 2
    // setStep(2);
  };
  return (
    <div className="w-full lg:w-1/2 shadow-lg border-t-4 rounded-lg p-5 ">
      <h2 className="text-2xl font-bold mb-5">Personal Information</h2>{" "}
      <form action="" onSubmit={handleSubmit}>
        <Input
          className="mb-3"
          onChange={(e) => setResume({ ...Resume, name: e.target.value })}
          value={Resume.name}
          placeholder="Your Name"
          type="text"
          autoFocus
          required
        />
        <Input
          className="mb-3"
          onChange={(e) => setResume({ ...Resume, job: e.target.value })}
          value={Resume.job}
          placeholder="Your Job"
          type="text"
          required
        />
        <Input
          className="mb-3"
          onChange={(e) => setResume({ ...Resume, phone: e.target.value })}
          value={Resume?.phone}
          placeholder="Your Phone"
          type="number"
          required
        />
        <Input
          className="mb-3"
          onChange={(e) => setResume({ ...Resume, address: e.target.value })}
          value={Resume.address}
          placeholder="Your Address"
          type="text"
          required
        />
        <Input
          className="mb-3"
          onChange={(e) => setResume({ ...Resume, email: e.target.value })}
          value={Resume.email}
          placeholder="Your Email"
          type="email"
          required
        />
        <div className="flex justify-end ">
          <Button className="">save</Button>
        </div>
      </form>
    </div>
  );
}
