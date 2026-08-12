"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import {
  featuredNotes,
  portfolioExperiences,
  portfolioProjects,
} from "@/utils/data/portfolio-data";
import styles from "./portfolio.module.scss";

const INDEX_ITEMS = [
  { number: "01", label: "WORK", detail: "exemONE · dichroma", href: "#work" },
  { number: "02", label: "EXPERIENCE", detail: "2021-NOW · 02 roles", href: "#experience" },
  { number: "03", label: "ABOUT", detail: "Background & practice", href: "#about" },
  { number: "04", label: "NOTES", detail: "Selected writing · 04", href: "#notes" },
  { number: "05", label: "CONTACT", detail: "Email · profile links", href: "#contact" },
] as const;

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <span className={styles.sectionNumber}>{number}</span>
      <h2 id={`${title.toLowerCase()}-heading`}>{title}</h2>
      <p>{description}</p>
      <a href="#index" aria-label={`${title}에서 목차로 이동`}>
        ↑
      </a>
    </header>
  );
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const immediateRef = useRef<HTMLSpanElement>(null);
  const delayedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const immediate = immediateRef.current;
    const delayed = delayedRef.current;
    if (!hero || !immediate || !delayed) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    let targetX = 0;
    let targetY = 0;
    let fastX = 0;
    let fastY = 0;
    let slowX = 13;
    let slowY = -5;
    let animationFrame = 0;

    const draw = () => {
      fastX += (targetX - fastX) * 0.24;
      fastY += (targetY - fastY) * 0.24;
      slowX += (targetX - slowX) * 0.075;
      slowY += (targetY - slowY) * 0.075;

      immediate.style.transform = `translate3d(${fastX.toFixed(2)}px, ${fastY.toFixed(2)}px, 0)`;
      delayed.style.transform = `translate3d(${slowX.toFixed(2)}px, ${slowY.toFixed(2)}px, 0)`;

      const stillMoving =
        Math.abs(targetX - fastX) > 0.02 ||
        Math.abs(targetY - fastY) > 0.02 ||
        Math.abs(targetX - slowX) > 0.02 ||
        Math.abs(targetY - slowY) > 0.02;

      if (stillMoving) {
        animationFrame = requestAnimationFrame(draw);
      } else {
        animationFrame = 0;
      }
    };

    const requestDraw = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const horizontal = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const vertical = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      targetX = Math.max(-1, Math.min(1, horizontal)) * 13;
      targetY = Math.max(-1, Math.min(1, vertical)) * 8;
      requestDraw();
    };

    const settle = () => {
      targetX = 0;
      targetY = 0;
      requestDraw();
    };

    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", settle);
    hero.addEventListener("pointercancel", settle);
    hero.addEventListener("pointerup", settle);
    requestDraw();

    return () => {
      cancelAnimationFrame(animationFrame);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", settle);
      hero.removeEventListener("pointercancel", settle);
      hero.removeEventListener("pointerup", settle);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" ref={heroRef} aria-labelledby="portfolio-title">
      <h1 id="portfolio-title" className={styles.wordmark} aria-label="JIN JIN">
        <span className={styles.wordGroup} aria-hidden="true">
          <span className={styles.echo}>JIN</span>
          <span className={styles.immediate} ref={immediateRef}>JIN</span>
        </span>
        <span className={styles.slash} aria-hidden="true">/</span>
        <span className={styles.wordGroup} aria-hidden="true">
          <span className={styles.echo} ref={delayedRef}>JIN</span>
          <span>JIN</span>
        </span>
      </h1>

      <div className={styles.identityLine}>
        <p>최연진</p>
        <p>웹 퍼블리싱에서 시작해 지금은 제품 인터페이스를 구현합니다.</p>
        <a href="#index">INDEX <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}

function PortfolioIndex() {
  return (
    <nav className={styles.index} id="index" aria-label="포트폴리오 목차">
      {INDEX_ITEMS.map((item) => (
        <a href={item.href} key={item.href}>
          <span className={styles.indexNumber}>{item.number}</span>
          <span className={styles.indexLabel}>{item.label}</span>
          <span className={styles.indexDetail}>{item.detail}</span>
          <span className={styles.indexArrow} aria-hidden="true">↘</span>
        </a>
      ))}
    </nav>
  );
}

function WorkSection() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-heading">
      <SectionHeading number="01" title="WORK" description="Selected work · 02" />

      <div className={styles.workContent}>
        {portfolioProjects.map((project) => (
          <article className={styles.project} id={project.id} key={project.id}>
            <header className={styles.projectHeader}>
              <span className={styles.projectNumber}>{project.number}</span>
              <p>{project.kind}</p>
              <span className={styles.projectPeriod}>{project.period}</span>
              <h3>{project.name}</h3>
            </header>

            <div className={styles.projectLead}>
              <p>{project.oneLine}</p>
              <p>{project.role}</p>
            </div>

            <div
              className={`${styles.projectMedia} ${project.images.length === 1 ? styles.projectMediaSingle : ""}`}
            >
              {project.images.map((image) => (
                <figure key={image.src}>
                  <div className={styles.mediaFrame}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={project.images.length === 1
                        ? "(max-width: 760px) 100vw, 84vw"
                        : "(max-width: 760px) 100vw, 48vw"}
                    />
                  </div>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.detailBlock}>
                <p className={styles.detailLabel}>SELECTED CONTRIBUTIONS</p>
                <ul>
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailBlock}>
                <p className={styles.detailLabel}>WORKING WITH</p>
                <p>{project.stack.join(" · ")}</p>
              </div>
            </div>

            <div className={styles.projectLinks}>
              {project.links.map((link) => (
                <Link
                  className={styles.projectLink}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label} <ExternalArrow />
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-heading">
      <SectionHeading number="02" title="EXPERIENCE" description="2021-NOW · 02 roles" />

      <div className={styles.experienceContent}>
        <p className={styles.sectionIntro}>
          웹 퍼블리싱과 제품 프론트엔드, 두 역할에서 맡아온 범위를 시간순으로 정리했습니다.
        </p>

        <ol className={styles.experienceList}>
          {portfolioExperiences.map((experience) => (
            <li key={experience.number}>
              <span className={styles.experienceNumber}>{experience.number}</span>
              <div className={styles.experienceIdentity}>
                <h3>{experience.company}</h3>
                <p>{experience.position}{experience.product ? ` · ${experience.product}` : ""}</p>
              </div>
              <span className={styles.experiencePeriod}>{experience.period}</span>
              <div className={styles.experienceSummary}>
                <p>{experience.summary}</p>
                <p className={styles.experienceResponsibilities}>
                  {experience.responsibilities.join(" · ")}
                </p>
                <p className={styles.experienceStack}>{experience.stack.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <SectionHeading number="03" title="ABOUT" description="Background & practice" />

      <div className={styles.aboutContent}>
        <div className={styles.aboutCopy}>
          <p>
            정확하게 구현하는 일과 오래 쓰일 구조를 만드는 일을 따로 생각하지 않습니다.
            화면 크기, 데이터 상태, 키보드 탐색처럼 실제 사용 조건까지 함께 살핍니다.
          </p>
          <p>
            퍼블리싱에서 익힌 HTML과 CSS의 기본 위에 Vue와 TypeScript로 제품 기능을 개발합니다.
            공통화가 필요한 지점은 컴포넌트와 문서로 남기고, 동작은 테스트로 확인합니다.
          </p>
          <p>업무에서 새로 마주친 개념은 작은 프로젝트와 글로 다시 확인합니다.</p>
        </div>

        <dl className={styles.factList}>
          <div><dt>BASED</dt><dd>Seoul, Korea</dd></div>
          <div><dt>CURRENT</dt><dd>Exem · exemONE</dd></div>
          <div><dt>SINCE</dt><dd>2021</dd></div>
          <div><dt>WORKING WITH</dt><dd>Vue · TypeScript · React · CSS · Storybook</dd></div>
        </dl>
      </div>
    </section>
  );
}

function NotesSection() {
  return (
    <section className={styles.section} id="notes" aria-labelledby="notes-heading">
      <SectionHeading number="04" title="NOTES" description="Selected writing · 04" />

      <div className={styles.notesContent}>
        <p className={styles.notesIntro}>
          업무에서 마주친 개념과 새로 확인한 프론트엔드 도구를 글로 정리합니다.
        </p>

        <div className={styles.noteList}>
          {featuredNotes.map((note) => (
            <Link href={note.href} target="_blank" rel="noreferrer" key={note.href}>
              <span className={styles.noteNumber}>{note.number}</span>
              <span className={styles.noteCategory}>{note.category}</span>
              <strong>{note.title}</strong>
              <span className={styles.noteDescription}>{note.description}</span>
              {note.date ? (
                <time className={styles.noteDate} dateTime={note.date}>{note.date.replaceAll("-", ".")}</time>
              ) : (
                <span className={styles.noteDate} aria-hidden="true" />
              )}
              <ExternalArrow />
            </Link>
          ))}
        </div>

        <Link className={styles.allNotesLink} href={personalData.velog} target="_blank" rel="noreferrer">
          Velog에서 모든 글 보기 <ExternalArrow />
        </Link>
      </div>
    </section>
  );
}

function ContactSection() {
  const [emailLocal, emailDomain] = personalData.email.split("@");

  return (
    <section className={`${styles.section} ${styles.contactSection}`} id="contact" aria-labelledby="contact-heading">
      <SectionHeading number="05" title="CONTACT" description="Email · profile links" />

      <div className={styles.contactContent}>
        <p className={styles.contactLead}>채용 및 협업과 관련한 이야기는 이메일로 보내주세요.</p>
        <p className={styles.contactSub}>확인 후 답장드리겠습니다.</p>
        <a className={styles.emailLink} href={`mailto:${personalData.email}`}>
          {emailLocal}<wbr />@{emailDomain} <ExternalArrow />
        </a>

        <nav className={styles.socialLinks} aria-label="연락 및 외부 프로필">
          <a href={`mailto:${personalData.email}`}>EMAIL <ExternalArrow /></a>
          <Link href={personalData.github} target="_blank" rel="noreferrer">GITHUB <ExternalArrow /></Link>
          <Link href={personalData.linkedIn} target="_blank" rel="noreferrer">LINKEDIN <ExternalArrow /></Link>
          <Link href={personalData.velog} target="_blank" rel="noreferrer">VELOG <ExternalArrow /></Link>
        </nav>
      </div>
    </section>
  );
}

export default function PortfolioExperience() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let current = window.scrollY > 24;
    setScrolled(current);

    const updateHeader = () => {
      const next = window.scrollY > 24;
      if (next === current) return;
      current = next;
      setScrolled(next);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main-content">본문으로 바로가기</a>

      <header className={styles.topbar} data-scrolled={scrolled ? "true" : "false"}>
        <a href="#top">JIN/JIN</a>
        <span>CHOI YEONJIN · FRONTEND DEVELOPER</span>
        <a href="#contact">CONTACT <span aria-hidden="true">↓</span></a>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <PortfolioIndex />
        <WorkSection />
        <ExperienceSection />
        <AboutSection />
        <NotesSection />
        <ContactSection />
      </main>

      <footer className={styles.footer}>
        <span>© 2026 CHOI YEONJIN</span>
        <span>FRONTEND DEVELOPER · SEOUL</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
