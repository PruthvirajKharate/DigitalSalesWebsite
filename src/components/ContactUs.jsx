import React from "react";
import Title from "./Title";
import assets from "../assets/assets/assets";
import toast from "react-hot-toast";

const ContactUs = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "66e40fe5-39d9-4e30-939b-2b967ac262c3");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
      <Title
        title={"Reach out to us"}
        description={
          "From strategy to execution, we craft digital solutions that move your business forward"
        }
      />
      <form
        onSubmit={onSubmit}
        action=""
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Enter you name"
              className="w-full p-3 text-sm outline-none"
              name="name"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Enter you email"
              className="w-full p-3 text-sm outline-none"
              name="email"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            id=""
            name="message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer
        hover:scale-103 transition-all"
        >
          Submit
          <img src={assets.arrow_icon} className="w-4" alt="" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
