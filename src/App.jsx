import HomepageMotion from './components/HomepageMotion';
import FAQ from './components/FAQ';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ChoosePath from './components/ChoosePath';
import ProfileConversion from './components/ProfileConversion';
import WhyJnex from './components/WhyJnex';
import CollegeExplorer from './components/CollegeExplorer';
import { CostComparison as SmartComparison } from './components/DecisionTools';
import PanIndia from './components/PanIndia';
import { MedicalDiscovery, BroaderDiscovery, Guides } from './components/Discovery';
import PageContent, { PageIntro } from './pages';
import { whatsappHref, whatsappNumber, track } from './data/config';
import CounsellingRoadmap from './components/CounsellingRoadmap';
import LiveCounsellingHub from './components/LiveCounsellingHub';
import ParentSection from './components/ParentSection';
import FreeResources from './components/FreeResources';
import MBBSAbroad from './components/MBBSAbroad';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App({ path = typeof window !== 'undefined' ? window.location.pathname.replace(/\/?$/, '/') : '/' }) {
  const [profile, setProfile] = useState(null);
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <HomepageMotion />
      <main id="main-content">
        {path !== '/' ? <><PageIntro path={path} /><PageContent path={path} /></> : <>
        <Hero onStartProfile={setProfile} />
        <TrustStrip />
        <PanIndia />
        <ChoosePath />
        <ProfileConversion initialProfile={profile} />
        <WhyJnex />
        <CollegeExplorer />
        <PanIndia editorial />
        <SmartComparison />
        <CounsellingRoadmap />
        <LiveCounsellingHub />
        <ParentSection />
        <FreeResources />
        <MedicalDiscovery />
        <MBBSAbroad />
        <BroaderDiscovery />
        <Guides />
        <FAQ />
        </>}
        <FinalCTA />
      </main>
      <Footer />

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 mobile-action-bar p-2.5 flex gap-2 z-50 sm:hidden">
        <a
          href={whatsappHref} onClick={() => track(whatsappNumber ? 'whatsapp_click' : 'counsellor_click')}
          className="flex-1 bg-green-50 text-green-700 font-bold py-3 rounded-xl border border-green-200 text-center text-sm hover:bg-green-100 transition-colors"
        >
          {whatsappNumber ? 'WhatsApp' : 'Contact JNEX'}
        </a>
        <a href="/#counselling" className="flex-1 text-center bg-accent text-white font-bold py-3 rounded-xl text-sm hover:bg-accent-light transition-colors">
          Check My Options
        </a>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-16 sm:hidden" />
    </div>
  );
}

export default App;
