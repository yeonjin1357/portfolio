"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error?.text || error);
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-[#d3d8e8] rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-violet-200 whitespace-pre-line">{`제 포트폴리오를 읽어주셔서 감사합니다!
        합류 및 협업 제안이 있으시다면 언제든지 연락해 주세요!
        함께 할 멋진 일에 대해 메일을 보내주시면 1~2일 내로 답장을 드릴게요.`}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">성함: </label>
            <input className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2" type="text" maxLength="100" required={true} onChange={(e) => setInput({ ...input, name: e.target.value })} onBlur={checkRequired} value={input.name} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">이메일: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-400">유효한 이메일을 입력해주세요!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">메시지: </label>
            <textarea className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2" maxLength="500" name="message" required={true} onChange={(e) => setInput({ ...input, message: e.target.value })} onBlur={checkRequired} rows="4" value={input.message} />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && <p className="text-sm text-red-400">이메일과 메시지를 입력해주세요!</p>}
            <button className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" onClick={handleSendMail}>
              <span>메일 보내기</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
