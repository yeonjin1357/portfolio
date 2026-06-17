// `icons` entries must match keys in utils/skill-image.js (SVG assets exist for them).
// `extras` render as plain monospace chips (no icon needed).
export const skillGroups = [
  {
    title: 'Core · 제품 화면',
    icons: ['React', 'Next JS', 'Typescript', 'Vue'],
    extras: [],
  },
  {
    title: '데이터 · 시각화',
    icons: ['Javascript'],
    extras: ['eCharts', '실시간 차트', 'REST API'],
  },
  {
    title: '마크업 · 스타일 · 접근성',
    icons: ['HTML', 'CSS', 'Tailwind'],
    extras: ['반응형', '웹 접근성'],
  },
  {
    title: '도구 · 기타',
    icons: ['Git', 'Flutter'],
    extras: ['Storybook'],
  },
];
