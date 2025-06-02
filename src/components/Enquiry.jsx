import React, { useEffect } from 'react'


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
      alert("Your responses have been submitted");
    })
    .catch((error) => console.error(error));

  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
   <>
   <div className='w-full  min-h-screen ' id='img'>
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
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Enquiry