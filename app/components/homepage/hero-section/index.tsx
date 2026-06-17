import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiNotion, SiVelog } from 'react-icons/si';
import SignalSurface from './signal-surface.client';

function HeroSection() {
  return (
    <section className='relative pt-10 lg:pt-16 pb-8'>
      <p className='font-mono text-xs tracking-[0.16em] uppercase text-verified flex items-center gap-2.5 mb-5'>
        <span className='w-5 h-px bg-verified inline-block' />
        Frontend Developer / 모니터링 · 데이터 시각화
      </p>
      <h1 className='font-display font-bold tracking-[-0.035em] leading-[1.08] text-ink text-[clamp(2rem,6vw,4rem)] mb-5'>
        보이지 않는 신호를
        <br />
        <span className='text-accent'>읽히는 화면</span>으로.
      </h1>
      <p className='text-steel text-[clamp(0.95rem,2vw,1.2rem)] max-w-[60ch]'>
        사용자와 제품 사이의 경험을 화면으로 구현하는 프론트엔드 개발자
        최연진(JINJIN)입니다. 실시간 데이터를 신뢰할 수 있게 시각화하고, 재사용
        가능한 UI를 설계합니다.
      </p>

      <div className='flex items-center gap-3 mt-7 flex-wrap'>
        <Link
          href='#projects'
          className='font-mono text-[13px] px-5 py-3 rounded-md bg-ink text-paper hover:bg-accent transition-colors'
        >
          작업 보기 →
        </Link>
        <Link
          href='#contact'
          className='font-mono text-[13px] px-5 py-3 rounded-md border border-ink text-ink hover:bg-ink hover:text-paper transition-colors'
        >
          연락하기
        </Link>
      </div>

      <div className='flex items-center gap-4 mt-7 text-steel'>
        <Link
          href={personalData.github}
          target='_blank'
          aria-label='GitHub'
          className='hover:text-accent transition-colors'
        >
          <BsGithub size={22} />
        </Link>
        <Link
          href={personalData.notion}
          target='_blank'
          aria-label='Notion'
          className='hover:text-accent transition-colors'
        >
          <SiNotion size={22} />
        </Link>
        <Link
          href={personalData.velog}
          target='_blank'
          aria-label='Velog'
          className='hover:text-accent transition-colors'
        >
          <SiVelog size={22} />
        </Link>
        <Link
          href={personalData.linkedIn}
          target='_blank'
          aria-label='LinkedIn'
          className='hover:text-accent transition-colors'
        >
          <BsLinkedin size={22} />
        </Link>
      </div>

      <SignalSurface />
    </section>
  );
}

export default HeroSection;
