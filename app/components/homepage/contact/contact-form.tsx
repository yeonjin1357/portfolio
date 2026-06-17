"use client";

import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

const FIELD =
  "w-full bg-white border border-line rounded-md focus:border-accent outline-none transition-colors px-3 py-2.5 text-ink";

function ContactForm() {
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ email: false, required: false });

  const checkRequired = () => {
    if (input.email && input.message && input.name) setError({ ...error, required: false });
  };

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    }
    if (error.email) return;
    setError({ ...error, required: false });

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("메일 설정이 누락되었어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    try {
      const res = await emailjs.send(serviceID, templateID, input, { publicKey });
      if (res.status === 200) {
        toast.success("메일이 전송되었어요!");
        setInput({ name: "", email: "", message: "" });
      }
    } catch (err) {
      toast.error((err as { text?: string })?.text || "전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <form className="rounded-lg border border-line bg-card p-5 lg:p-6" onSubmit={handleSendMail} noValidate>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="font-mono text-[12px] text-steel">성함</label>
          <input
            id="cf-name"
            className={FIELD}
            type="text"
            maxLength={100}
            required
            value={input.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="font-mono text-[12px] text-steel">이메일</label>
          <input
            id="cf-email"
            className={FIELD}
            type="email"
            maxLength={100}
            required
            value={input.email}
            aria-invalid={error.email}
            aria-describedby={error.email ? "cf-email-err" : undefined}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(input.email) });
            }}
          />
          {error.email && (
            <p id="cf-email-err" className="text-[13px] text-caution">
              유효한 이메일을 입력해 주세요.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-msg" className="font-mono text-[12px] text-steel">메시지</label>
          <textarea
            id="cf-msg"
            className={FIELD}
            maxLength={500}
            rows={4}
            required
            value={input.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
          />
        </div>

        {error.required && (
          <p className="text-[13px] text-caution">성함·이메일·메시지를 모두 입력해 주세요.</p>
        )}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-ink text-paper px-6 py-3 font-mono text-[13px] hover:bg-accent transition-colors"
        >
          메일 보내기 <TbMailForward size={16} />
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
