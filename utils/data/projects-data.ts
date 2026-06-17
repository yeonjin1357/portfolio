import type { Project } from '@/utils/types';

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'exemONE (엑셈원)',
    role: '사내 프로젝트',
    summary:
      'Vue 기반 통합 모니터링 제품의 APM·실사용자 모니터링(RUM) 화면을 개발했습니다. 실시간 데이터 시각화 차트 컴포넌트를 구현하고, 재사용 가능한 공통 UI 아키텍처를 설계했습니다.',
    tools: ['Vue.js', 'TypeScript', 'Canvas', 'Storybook'],
    link: 'https://ex-em.com/ko/service/all-in-one',
    linkLabel: '제품 보기',
  },
  {
    id: 2,
    name: 'dichroma (색맹·색약 시뮬레이터)',
    role: '개인 프로젝트',
    summary:
      '색각 이상을 시뮬레이션하고 WCAG 대비를 검사하는 Chrome 확장 + 순수 TypeScript 색과학 라이브러리. axe-core 대비 감사와 Vitest/Playwright 검증을 갖춘 모노레포로 구성했습니다.',
    tools: ['TypeScript', 'React', 'WXT', 'axe-core', 'Vitest'],
    link: 'https://github.com/yeonjin1357/dichroma',
    linkLabel: 'GitHub',
  },
];
