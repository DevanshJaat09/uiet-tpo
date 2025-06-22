import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

const Enquiry = () => {
 
  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new URLSearchParams();
  formData.append("name", e.target.name.value);
  formData.append("number", e.target.number.value);
  formData.append("email", e.target.email.value);
  formData.append("city", e.target.city.value);
  formData.append("qualifications", e.target.qualifications.value);
  formData.append("exam", e.target.exam.value);
  formData.append("interested course", e.target["interested course"].value);
  formData.append("message", e.target.message.value);

  const url = "https://script.google.com/macros/s/AKfycbw9IneBs5qsC2py3YWgJDMq9MHYf7SREnuF3hegTh9nQrPvGAhrgdfkjLRW6rStzjs5/exec";

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString()
  })
    .then((res) => res.text())
    .then((data) => {
     toast.success(' FORM SUBMITTED SUCCESSFULLY!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark"

});
    })
    .catch((error) => console.error(error));

    e.target.name.value = ""
    e.target.number.value = ""
    e.target.email.value = ""
    e.target.city.value = ""
    e.target.qualifications.value = ""
    e.target.exam.value = ""
    e.target["interested course"].value = ""
    e.target.message.value = ""
    window.scrollTo(0, 0);
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
   <>
   <div className='w-full bg-[#afafaf] min-h-screen ' >
    <div className='box-2 py-10'>
      <h2 className="text-center text-5xl font-outfit font-extrabold mb-5">Dream, Design, Develop, Deliver with UIET KUK</h2>

      <div className=" ">
        <form 
        onSubmit={submitHandler} className='flex w-xl mx-auto flex-col gap-5 font-outfit font-semibold'>
          <input
          
            type="text"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Enter your name"
            name="name"
            required
            autoComplete="off"
          />
          <input
          
            type="number"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Enter your mobile no."
            name="number"
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />
          <input
          
            type="text"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Enter your city name"
            name="city"
            required
            autoComplete="off"
          />
          <input
          
            type="text"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Last Educational Qualification"
            name="qualifications"
            required
            autoComplete="off"
          />
          <input
          
            type="text"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Exam"
            name="exam"
            required
            autoComplete="off"
          />
          <input
          
            type="text"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Interested Course"
            name="interested course"
            required
            autoComplete="off"
          />
          <textarea
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send" className=' mb-10 border-2 border-[#202020] rounded-2xl py-2 text-xl' >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Enquiry



// function doPost(e) {
//   var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1OAeH260Z0aXk4DvdK2SP2NPZiBqL_b4upYBSm1bkRxk/edit?gid=0#gid=0").getSheetByName("Sheet1");
//   sheet.appendRow([
//     new Date(),
//     e.parameter.name,
//     e.parameter.number,
//     e.parameter.email,
//     e.parameter.city,
//     e.parameter.qualifications,
//     e.parameter.exam,
//     e.parameter["interested course"],
//     e.parameter.message
//   ]);
//   return ContentService.createTextOutput("Form submitted successfully");
// }