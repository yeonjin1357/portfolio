export const projectsData = [
  {
    id: 1,
    name: 'exemONE(엑셈원)',
    description: `💡  Vue.js를 사용하여 자사 통합 모니터링 제품의 화면 개발 담당을 맡았습니다.
    
    애플리케이션 성능 모니터링 및 실사용자 모니터링(RUM) 화면 구현을 주로 진행하였으며 실시간 데이터 시각화를 위한 다양한 차트 컴포넌트를 구현하였습니다.
    
    공통 UI 컴포넌트 설계 및 재사용 가능한 컴포넌트 아키텍처 구축하였고 REST API 연동을 통한 실시간 데이터 수집 및 처리를 진행하였습니다.`,
    tools: ['Vue.js', 'TypeScript', 'eCharts', 'Stroybook'],
    role: '사내 프로젝트',
    link: 'https://www.ex-em.com/product/exemone',
  },
  {
    id: 2,
    name: '물방울 (물 마시기 리마인더)',
    description: `💡 물방울 프로젝트는 Flutter(Dart)로 개발한 극미니멀 물 마시기 리마인더 앱입니다.
    
    딱 3개 화면(메인/설정/통계)으로 구성했고, 간단한 일/주/월 통계와 목표 달성률을 제공해 물 섭취 습관 형성에 집중했습니다.
    
    Provider 기반 전역 상태 관리, SQLite(sqflite)로 섭취 기록·통계 저장, SharedPreferences로 사용자 설정을 보존합니다. flutter_local_notifications와 timezone 처리로 시간대에 안전한 알림을 스케줄링하고, Android의 정확한 알람 권한/절전 모드 대응 및 상단 고정 진행률 알림(퍼시스턴트)도 지원합니다.`,
    tools: ['Flutter', 'Dart'],
    role: '개인 프로젝트',
    link: 'https://play.google.com/store/apps/details?id=com.droplet.water&pcampaignid=web_share',
  },
  {
    id: 3,
    name: 'CleanCut (배경 제거 앱)',
    description: `💡 CleanCut은 Flutter로 만든 배경 제거 앱으로, 서버의 BiRefNet-dynamic 모델을 통해 인물/오브젝트 배경을 고품질로 제거합니다.
    
    Remove.bg 스타일의 미니멀 UI, 원본/결과 비교, 투명 PNG 저장/공유, 로딩 오버레이 등 핵심 UX를 갖추었습니다.
    
    FastAPI + PyTorch 서버(API 방식)로 동작하며 GPU/Hugging Face Spaces 배포를 고려해 앱 크기를 최소화하고 업데이트를 유연하게 유지했습니다.`,
    tools: ['Flutter', 'Dart', 'FastAPI', 'PyTorch'],
    role: '개인 프로젝트',
    link: '',
  },
  {
    id: 4,
    name: '영어나무',
    description: `💡 영어나무 프로젝트는 React + TypeScript + Next.js를 기반으로 한 개인 프로젝트이며, 사용자가 입력한 정답을 OPEN AI의 어시스턴트 API를 사용하여 처리하였습니다. 오답이라면 이유까지 자세히 설명할 수 있도록 구현하였습니다.
    
    Atomic Design Pattern을 기반으로 폴더 구조를 구성하였으며, 전역 상태 관리 라이브러리는 가벼운 Zustand를 사용하였습니다.`,
    tools: ['React', 'Next.js', 'TypeScript'],
    role: '개인 프로젝트',
    link: 'https://www.notion.so/jinjin98/a5bcbe414bef4b7cb78c7683f5e77e6a?pvs=4',
  },
  {
    id: 5,
    name: 'BUDDY (AI 챗봇)',
    description: `💡 BUDDY 프로젝트는 React를 기반으로 한 개인 프로젝트이며, OpenAI API와 Firebase 데이터베이스를 통합하여 동작하는 AI 챗봇 웹사이트로 개발되었습니다. 사용자는 이메일과 비밀번호를 통해 인증 받고, 이메일 인증 후 AI 챗봇과의 대화를 시작할 수 있습니다.
      
    로그인 기능 및 회원가입 시 이메일 인증 기능 구현은 Firebase Auth을 사용하여 구현하였습니다. 또한 Redux-Toolkit을 사용하여 전역 변수를 관리하였습니다.
      
    컴포넌트 스타일링은 CSS-Module을 사용하였고 호스팅 배포는 Vercel을 이용하여 배포하였습니다.`,
    tools: ['React', 'Redux-Toolkit', 'JavaScript', 'Firebase'],
    role: '개인 프로젝트',
    link: 'https://www.notion.so/jinjin98/BUDDY-3f109f3a883c4e1fa28bac8f22091349?pvs=4',
  },
  {
    id: 6,
    name: 'RealTime (실시간 채팅)',
    description: `💡 RealTime 프로젝트는 React를 기반으로 한 개인 프로젝트이며, React를 사용하여 제작한 첫번째 프로젝트입니다. React hooks 사용에 익숙해지기 위해서 그리고 다양한 기능을 구현해보기 위해서 개발한 RealiTime 프로젝트는 방문자들이 실시간으로 채팅을 할 수 있는 사이트입니다.
    
    Firebase 데이터베이스를 통해 사용자의 정보를 DB에 저장하였습니다. 또한 React-Toolkit / CSS-Module을 사용하였고 호스팅 배포는 Github-pages를 통하여 배포하였습니다.`,
    tools: ['React', 'Redux-Toolkit', 'JavaScript', 'Firebase'],
    role: '개인 프로젝트',
    link: 'https://www.notion.so/jinjin98/RealTime-c464bced49bf42da8b41ce898892d517?pvs=4',
  },
];
