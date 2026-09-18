import {
  Network, MapPinned, University, Leaf, PawPrint, HeartHandshake, Activity, Pill, Ambulance, Microscope, ScanLine,
  Droplets, FlaskConical, Sparkles, Syringe, Brain, PersonStanding, Compass, Stamp, FolderCheck, Banknote,
  PlaneTakeoff, IdCard, PenLine, Medal, Trophy, Flag as FlagIcon, Venus, BadgePercent, ChartPie, BadgeCheck, Handshake,
  Hospital, Palette, Award, Cpu, Plane, BookOpen, Briefcase, Monitor, Cog, GraduationCap, Landmark, Building2,
  Route, Wallet, ChartColumnIncreasing, Stethoscope, HeartPulse, FileText, Sparkle,
} from 'lucide-react';
import { stateShapes } from '../data/state-shapes';

// One icon per card/tag title used across the internal pages.
export const topicIcons = {
  // India admissions
  'Engineering & Technology': Cog, 'Computer & IT': Monitor, 'Management & Business': Briefcase,
  'Bachelor’s': GraduationCap, 'Master’s': Award, 'Professional Courses': Palette,
  // Study abroad
  'Bachelor’s / Undergraduate': GraduationCap, 'Master’s / Postgraduate': Award, 'Business & Management': Briefcase,
  'IT & Technology': Cpu, Engineering: Cog, 'Healthcare & Life Sciences': HeartPulse, 'Other Programs': Palette, Destinations: Plane,
  // MBBS admission routes
  'All India / Central Counselling': Network, 'State Counselling': MapPinned, 'Government Medical Colleges': Landmark,
  'Private Medical Colleges': Building2, 'Deemed Universities': University, 'NRI / Other Applicable Quotas': Plane,
  // Medical career groups
  'Medical & Dental': Stethoscope, 'AYUSH & Naturopathy': Leaf, 'Veterinary Science': PawPrint, 'Nursing Sciences': HeartHandshake,
  'Allied Health & Rehabilitation': Activity, Pharmacy: Pill, 'Paramedical Diplomas': Ambulance, 'Research & Non-clinical Sciences': Microscope,
  // Allied health courses
  'Cardiac Care Technology': HeartPulse, 'Radiology & Imaging Technology': ScanLine, 'Perfusion Technology': Droplets,
  'Medical Laboratory Technology': FlaskConical, 'Aesthetic Science & Cosmetology': Sparkles, 'Anaesthesia Technology': Syringe,
  'Neurophysiology Technology': Brain, Physiotherapy: PersonStanding, Nursing: HeartHandshake,
  // Services
  'Career Counselling': Compass, 'College/University Selection': University, 'Application Assistance': FileText,
  'Admission Guidance': Route, 'Scholarship Assistance': Award, 'Visa Assistance': Stamp, 'Documentation Support': FolderCheck,
  'Education Loan Guidance': Banknote, 'Pre-Departure Guidance': PlaneTakeoff, 'Student Immigration Assistance': IdCard, 'Test Preparation': PenLine,
  // Scholarships
  University, Merit: Medal, Academic: GraduationCap, Sports: Trophy, Government: Landmark, 'Country-Specific': FlagIcon,
  Women: Venus, Research: Microscope, MBA: Briefcase, PhD: BookOpen, 'Tuition Waivers': BadgePercent, Partial: ChartPie,
  Full: BadgeCheck, Assistantships: Handshake, Fellowships: Sparkle,
  // State guide sections
  'COUNSELLING ROUTES': Route, ELIGIBILITY: BadgeCheck, 'FEES & COMPLETE COST': Wallet, 'CUTOFF REFERENCES': ChartColumnIncreasing,
  'DOCUMENTS & REPORTING': FolderCheck, 'LOCATION & TRAINING': Hospital,
};

export function TopicIcon({ title, className = 'icon-badge', size }) {
  const Icon = topicIcons[title];
  if (!Icon) return null;
  return <span className={className} aria-hidden="true"><Icon size={size} strokeWidth={1.7} /></span>;
}

export function StateShape({ name, className = 'state-shape' }) {
  const shape = stateShapes[name];
  if (!shape) return null;
  return <svg className={className} viewBox={shape.viewBox} aria-hidden="true" focusable="false"><path d={shape.d} /></svg>;
}

export const flagCodes = {
  UK: 'gb', 'United Kingdom': 'gb', USA: 'us', 'United States': 'us', Canada: 'ca', Australia: 'au', 'New Zealand': 'nz',
  Germany: 'de', France: 'fr', Ireland: 'ie', Italy: 'it', Singapore: 'sg', UAE: 'ae',
};

export function Flag({ country, code = flagCodes[country], className = 'flag-chip' }) {
  if (!code) return null;
  return <img className={className} src={`/images/flags/${code}.svg`} alt="" width="36" height="27" loading="lazy" />;
}

// A shield crest with the institution's initials: a consistent stand-in until official logos are supplied.
export function CollegeCrest({ name, className = '' }) {
  const initials = name.replace(/[.,()]/g, ' ').split(/\s+/).filter(word => word && !['of', 'and', 'the', '&'].includes(word.toLowerCase())).slice(0, 3).map(word => word[0].toUpperCase()).join('');
  const tone = [...name].reduce((sum, character) => sum + character.charCodeAt(0), 0) % 4;
  return <span className={`college-crest crest-tone-${tone} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 48 56"><path d="M24 2.5 43.5 9v17.6c0 12.2-8.2 20.9-19.5 26.4C12.7 47.5 4.5 38.8 4.5 26.6V9Z" /><path className="crest-inner" d="M24 7.5 39 12.6v14c0 9.6-6.3 16.6-15 21.1-8.7-4.5-15-11.5-15-21.1v-14Z" /></svg>
    <span>{initials}</span>
  </span>;
}
