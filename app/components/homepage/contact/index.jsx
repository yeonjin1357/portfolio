import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiNotion, SiVelog } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";
import SectionHead from "../section-head";

const SOCIALS = [
  ["github", "GitHub", BsGithub],
  ["notion", "Notion", SiNotion],
  ["velog", "Velog", SiVelog],
  ["linkedIn", "LinkedIn", BsLinkedin],
];

function ContactSection() {
  return (
    <section id="contact" className="my-16 lg:my-24 scroll-mt-20">
      <SectionHead label="연락 / Contact" title="함께 만들 화면이 있다면." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-8 items-start">
        <ContactForm />
        <div>
          <p className="text-steel text-[15px] leading-relaxed mb-6">
            합류·협업 제안은 메일로 보내주시면 1~2일 내로 답장 드릴게요.
          </p>
          <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-3 text-ink hover:text-accent transition-colors font-mono text-[14px] mb-8"
          >
            <MdAlternateEmail size={20} className="text-accent" />
            {personalData.email}
          </a>
          <div className="flex items-center gap-3">
            {SOCIALS.map(([key, label, Icon]) => (
              <Link
                key={label}
                href={personalData[key]}
                target="_blank"
                aria-label={label}
                className="w-11 h-11 grid place-items-center rounded-md border border-line text-steel hover:text-accent hover:border-ink transition-colors"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
