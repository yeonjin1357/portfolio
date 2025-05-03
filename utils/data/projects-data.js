export const projectsData = [
  {
    id: 1,
    name: 'exemONE(엑셈원)',
    description: `💡  Vue.js를 사용하여 자사 통합 모니터링 제품의 화면 개발 담당을 맡았습니다.
    
    애플리케이션 성능 모니터링 및 실사용자 모니터링(RUM) 화면 구현을 진행하였으며 실시간 데이터 시각화를 위한 다양한 차트 컴포넌트를 구현하였습니다.
    
    공통 UI 컴포넌트 설계 및 재사용 가능한 컴포넌트 아키텍처 구축하였고 REST API 연동을 통한 실시간 데이터 수집 및 처리를 진행하였습니다.`,
    tools: ['Vue.js', 'TypeScript', 'eCharts', 'Tailwind', 'Gitlab'],
    role: '사내 프로젝트',
    link: 'https://www.ex-em.com/product/exemone',
  },
  {
    id: 2,
    name: '영어나무',
    description: `💡 영어나무 프로젝트는 React + TypeScript + Next.js를 기반으로 한 개인 프로젝트이며, 사용자가 입력한 정답을 OPEN AI의 어시스턴트 API를 사용하여 처리하였습니다. 오답이라면 이유까지 자세히 설명할 수 있도록 구현하였습니다.
    
    Atomic Design Pattern을 기반으로 폴더 구조를 구성하였으며, 전역 상태 관리 라이브러리는 가벼운 Zustand를 사용하였습니다.`,
    tools: [
      'React',
      'Next.js',
      'TypeScript',
      'OpenAI API',
      'CSS-Module',
      'Vercel',
    ],
    role: '개인 프로젝트',
    link: 'https://www.notion.so/jinjin98/a5bcbe414bef4b7cb78c7683f5e77e6a?pvs=4',
  },
  {
    id: 3,
    name: 'BUDDY (AI 챗봇)',
    description: `💡 BUDDY 프로젝트는 React를 기반으로 한 개인 프로젝트이며, OpenAI API와 Firebase 데이터베이스를 통합하여 동작하는 AI 챗봇 웹사이트로 개발되었습니다. 사용자는 이메일과 비밀번호를 통해 인증 받고, 이메일 인증 후 AI 챗봇과의 대화를 시작할 수 있습니다.
      
    로그인 기능 및 회원가입 시 이메일 인증 기능 구현은 Firebase Auth을 사용하여 구현하였습니다. 또한 Redux-Toolkit을 사용하여 전역 변수를 관리하였습니다.
      
    컴포넌트 스타일링은 CSS-Module을 사용하였고 호스팅 배포는 Vercel을 이용하여 배포하였습니다.`,
    tools: [
      'React',
      'Redux-Toolkit',
      'OpenAI API',
      'CSS-Module',
      'JavaScript',
      'Firebase',
      'Vercel',
    ],
    role: '개인 프로젝트',
    link: 'https://www.notion.so/jinjin98/BUDDY-3f109f3a883c4e1fa28bac8f22091349?pvs=4',
  },
  {
    id: 4,
    name: 'RealTime (실시간 채팅)',
    description: `💡 RealTime 프로젝트는 React를 기반으로 한 개인 프로젝트이며, React를 사용하여 제작한 첫번째 프로젝트입니다. React hooks 사용에 익숙해지기 위해서 그리고 다양한 기능을 구현해보기 위해서 개발한 RealiTime 프로젝트는 방문자들이 실시간으로 채팅을 할 수 있는 사이트입니다.
    
    Firebase 데이터베이스를 통해 사용자의 정보를 DB에 저장하였습니다. 또한 React-Toolkit / CSS-Module을 사용하였고 호스팅 배포는 Github-pages를 통하여 배포하였습니다.`,
    tools: [
      'React',
      'Redux-Toolkit',
      'React-router-dom',
      'CSS-Module',
      'JavaScript',
      'Firebase',
      'Github-pages',
    ],
    role: '개인 프로젝트',
    link: 'https://www.notion.so/jinjin98/RealTime-c464bced49bf42da8b41ce898892d517?pvs=4',
  },
];
