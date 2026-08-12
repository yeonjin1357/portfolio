export type PortfolioProject = {
  id: string;
  number: string;
  name: string;
  kind: string;
  period: string;
  oneLine: string;
  role: string;
  contributions: string[];
  stack: string[];
  links: {
    href: string;
    label: string;
  }[];
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

export type FeaturedNote = {
  number: string;
  category: string;
  title: string;
  description: string;
  date?: string;
  href: string;
};

export type PortfolioExperience = {
  number: string;
  company: string;
  position: string;
  product?: string;
  period: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "exemone",
    number: "01",
    name: "exemONE",
    kind: "EXEM · PRODUCT WORK",
    period: "2024 - NOW",
    oneLine: "APM과 실사용자 모니터링 기능을 포함한 Vue 기반 통합 모니터링 제품.",
    role: "제품 화면 개발과 공통 UI 구성을 담당하고 있습니다.",
    contributions: [
      "APM·실사용자 모니터링(RUM) 기능의 제품 화면 개발",
      "eCharts·Canvas 기반 데이터 시각화 컴포넌트 구현",
      "Storybook을 활용한 공통 UI 컴포넌트 설계와 문서화",
    ],
    stack: ["Vue", "TypeScript", "eCharts", "Canvas", "Storybook", "REST API"],
    links: [
      {
        href: "https://ex-em.com/ko/service/all-in-one",
        label: "제품 소개 보기",
      },
    ],
    images: [
      {
        src: "/image/work/exemone-dashboard.jpg",
        alt: "여러 서버와 애플리케이션 지표를 한 화면에 구성한 exemONE 대시보드",
        caption: "exemONE · 공개 제품 화면 · 회사 공식 사이트 출처",
      },
    ],
  },
  {
    id: "dichroma",
    number: "02",
    name: "dichroma",
    kind: "PERSONAL · BROWSER EXTENSION",
    period: "2026",
    oneLine: "색각 이상 시뮬레이션과 WCAG 명암비 검사를 브라우저에서 수행하는 개인 프로젝트.",
    role: "Chrome 확장 프로그램과 순수 TypeScript 라이브러리를 함께 개발했습니다.",
    contributions: [
      "색각 시뮬레이션 로직을 순수 TypeScript 라이브러리로 분리",
      "확장 프로그램과 라이브러리를 모노레포로 구성",
      "axe-core·Vitest·Playwright로 접근성과 주요 동작 검증",
    ],
    stack: ["TypeScript", "React", "WXT", "axe-core", "Vitest", "Playwright"],
    links: [
      {
        href: "https://chromewebstore.google.com/detail/dichroma-%E2%80%94-color-vision-s/ponflcikcmlkfjcabadigfpokapmfnmh",
        label: "Chrome 웹 스토어에서 보기",
      },
      {
        href: "https://github.com/yeonjin1357/dichroma",
        label: "GitHub에서 코드 보기",
      },
    ],
    images: [
      {
        src: "/image/work/dichroma-simulation.png",
        alt: "동일한 웹 화면의 원본 색상과 적록 색각 시뮬레이션 결과를 나란히 비교한 화면",
        caption: "dichroma · 원본과 색각 시뮬레이션 비교 · 실제 확장 프로그램",
      },
      {
        src: "/image/work/dichroma-audit.png",
        alt: "웹 화면에서 명암비 문제를 표시하고 검사 결과를 보여주는 dichroma 패널",
        caption: "dichroma · 색각 조건을 반영한 명암비 검사 · 실제 확장 프로그램",
      },
    ],
  },
];

export const featuredNotes: FeaturedNote[] = [
  {
    number: "01",
    category: "WORK LOG",
    title: "도메인 공부: 호스트(CPU)",
    description: "모니터링 제품을 개발하며 정리한 CPU 지표와 용어.",
    href: "https://velog.io/@yeonjin1357/%EB%8F%84%EB%A9%94%EC%9D%B8-%EA%B3%B5%EB%B6%80-%ED%98%B8%EC%8A%A4%ED%8A%B8CPU",
  },
  {
    number: "02",
    category: "FRONTEND",
    title: "TypeScript 6.0 Beta 발표 정리",
    description: "공식 발표를 바탕으로 주요 변경점을 정리한 글.",
    date: "2026-02-19",
    href: "https://velog.io/@yeonjin1357/TypeScript-6.0-Beta-%EB%B0%9C%ED%91%9C-%EC%A0%95%EB%A6%AC",
  },
  {
    number: "03",
    category: "TOOLING",
    title: "공식 문서를 AI 도구에 연결하기",
    description: "Google Developer Knowledge API와 MCP 서버를 연결한 과정.",
    date: "2026-02-18",
    href: "https://velog.io/@yeonjin1357/GitHub-Agent-HQ-Agent-Skills%EB%A1%9C-%EC%83%9D%EC%82%B0%EC%84%B1-%EC%98%AC%EB%A6%AC%EB%8A%94-%EC%8B%A4%EC%A0%84-%ED%8C%81",
  },
  {
    number: "04",
    category: "TRANSLATION",
    title: "Frontend Focus #699 번역",
    description: "프론트엔드 뉴스레터 번역 기록.",
    date: "2025-07-28",
    href: "https://velog.io/@yeonjin1357/%EB%B2%88%EC%97%AD-Frontend-Focus-699-25.07.02",
  },
];

export const portfolioExperiences: PortfolioExperience[] = [
  {
    number: "01",
    company: "EXEM",
    position: "Frontend Developer",
    product: "exemONE",
    period: "2024.06 - NOW",
    summary: "기업용 통합 모니터링 제품의 프론트엔드 기능과 공통 UI를 개발합니다.",
    responsibilities: [
      "APM·RUM 제품 화면",
      "데이터 시각화 컴포넌트",
      "공통 UI와 Storybook",
    ],
    stack: ["Vue", "TypeScript", "eCharts", "Canvas", "Storybook"],
  },
  {
    number: "02",
    company: "HYEYUM & COMPANY",
    position: "Web Publisher",
    period: "2021.11 - 2024.04",
    summary: "디자인 시안을 웹 화면으로 옮기고 반응형·접근성 품질을 담당했습니다.",
    responsibilities: [
      "HTML·CSS·JavaScript 기반 화면 구현",
      "뷰포트별 반응형 UI",
      "웹 접근성을 고려한 구조와 상태 표현",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Web Accessibility"],
  },
];
