export const projectsData = [
  {
    id: 1,
    name: 'exemONE(엑셈원)',
    description: `Vue.js를 사용하여 자사 통합 모니터링 제품의 화면 개발 담당을 맡았습니다.
    
    애플리케이션 성능 모니터링 및 실사용자 모니터링(RUM) 화면 구현을 주로 진행하였으며 실시간 데이터 시각화를 위한 다양한 차트 컴포넌트를 구현하였습니다.
    
    공통 UI 컴포넌트 설계 및 재사용 가능한 컴포넌트 아키텍처 구축하였고 REST API 연동을 통한 실시간 데이터 수집 및 처리를 진행하였습니다.`,
    tools: ['Vue.js', 'TypeScript', 'eCharts', 'Stroybook'],
    role: '사내 프로젝트',
    link: 'https://www.ex-em.com/product/exemone',
  },
  {
    id: 2,
    name: 'dichroma(색맹·색약 시뮬레이터)',
    description: `dichroma는 색각 이상(색맹·색약)을 시뮬레이션하고 대비를 검사하는 Chrome 확장 프로그램이자 순수 TypeScript 색과학 라이브러리입니다.
    
    Viénot 1999, Brettel 1997, Machado 2009 기반의 색각 이상 모델을 실제 페이지에 적용하고, 시뮬레이션된 색공간에서 WCAG 대비를 다시 계산해 접근성 검토 후보를 보여줍니다.
    
    React + WXT 기반 확장 앱과 @dichroma/core 패키지로 모노레포를 구성했으며, axe-core를 활용한 대비 감사와 Vitest/Playwright 기반 검증 흐름을 함께 갖추었습니다.`,
    tools: ['TypeScript', 'React', 'WXT', 'axe-core', 'Vitest'],
    role: '개인 프로젝트',
    link: 'https://github.com/yeonjin1357/dichroma',
  },
];
