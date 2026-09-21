import { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { track } from '../data/config';

const video = { id: '1cQUEg_TWxU', title: 'MBBS 2026 | JNEX Education', channel: 'https://www.youtube.com/@JnexEducation' };

// Vertical YouTube Short. The player loads only after a click, so the homepage stays light.
export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return <section id="videos" className="bg-slate-50 video-section"><div className="content-wrap split-feature">
    <div>
      <p className="eyebrow">WATCH · MBBS {new Date().getFullYear()}</p>
      <h2>Plan your MBBS admission with JNEX.</h2>
      <p className="section-copy">A quick look at how JNEX guides students and parents through MBBS admissions: NEET rank, state counselling routes, college choices and budget. Then share your profile for options that fit you.</p>
      <div className="section-actions"><a className="primary-button" href="#counselling">Check My MBBS Options <ArrowRight size={16} aria-hidden="true" /></a><a className="text-link" href={video.channel} target="_blank" rel="noopener noreferrer">More videos on YouTube ↗</a></div>
    </div>
    <div className="short-frame">
      {playing ? <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        : <button type="button" className="short-poster" onClick={() => { setPlaying(true); track('video_play', { video: video.id }); }} aria-label={`Play video: ${video.title}`}>
          <img src={`https://i.ytimg.com/vi/${video.id}/hq2.jpg`} alt="" loading="lazy" decoding="async" />
          <span className="short-play" aria-hidden="true"><Play size={26} fill="currentColor" /></span>
          <span className="short-caption">{video.title}</span>
        </button>}
    </div>
  </div></section>;
}
