import React from 'react'


const Enquiry = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
   
    <section className="">
      <h2 className="container-title mt-5">Contact Us</h2>

      <div className=" ">
        <form action={handleFormSubmit} className='flex w-xl mx-auto flex-col gap-5 font-outfit font-semibold'>
          <input
          
            type="text"
            className="py-2 px-2 outline-none rounded border-2 border-[#202020]"
            placeholder="Enter your name"
            name="username"
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
            name="qualification"
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

          <button type="submit" value="send" className='bg-[#202020] rounded-2xl py-2 text-xl'>
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Enquiry