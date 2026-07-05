// Brand assets
import itcomLogo from '@/assets/brand/itcom-logo.png'
import iimLogo from '@/assets/brand/iim-logo.png'
import campusBg from '@/assets/brand/campus-bg.jpg'
import thankyouBg from '@/assets/brand/thankyou-bg.jpg'
import chairPhoto from '@/assets/brand/chairperson.jpg'
import support1 from '@/assets/support/support-1.jpg'
import support2 from '@/assets/support/support-2.jpg'
import ecapPortal from '@/assets/work/ecap-portal.jpg'

// Staff photos
import somnathPhoto from '@/assets/staff/somnath-nayek.jpg'
import shashiPhoto from '@/assets/staff/shashi-arya.jpg'
import vikashPhoto from '@/assets/staff/vikash-thakur.jpg'
import kritwashaPhoto from '@/assets/staff/kritwasha-rai.jpg'
import gauravPhoto from '@/assets/staff/kumar-gaurav.jpg'
import shivaPhoto from '@/assets/staff/shiva-sirohi.jpg'

// Event photos
import promptWars from '@/assets/events/prompt-wars.jpg'
import fifa from '@/assets/events/fifa.jpg'
import automationMou from '@/assets/events/automation-mou.jpg'
import collab1 from '@/assets/events/collab-1.jpg'

// Member photos
import monaImg from '@/assets/members/mona-gurjar.jpg'
import shantanuImg from '@/assets/members/shantanu-ghosh.jpg'
import stutiMohtaImg from '@/assets/members/stuti-mohta.jpg'
import charanImg from '@/assets/members/charan-vijay.jpg'
import aviImg from '@/assets/members/avi-agarwal.jpg'
import yatiImg from '@/assets/members/yati-varshney.jpg'
import lakshmanImg from '@/assets/members/lakshman-kr.jpg'
import harshImg from '@/assets/members/harshvardhan-jadhav.jpg'
import stutiVermaImg from '@/assets/members/stuti-verma.jpg'
import kirtiImg from '@/assets/members/kirti-bhushan.jpg'
import aadityaImg from '@/assets/members/aaditya-gupta.jpg'
import balajiImg from '@/assets/members/balaji-g.jpg'
import divyanshImg from '@/assets/members/divyansh-verma.jpg'
import priyanshImg from '@/assets/members/priyansh-choudhary.jpg'
import jeetImg from '@/assets/members/jeet-jadav.jpg'
import palImg from '@/assets/members/pal-shivam.jpg'
import laraibImg from '@/assets/members/laraib-muttaqi.jpg'

export type Person = {
  name: string
  role?: string
  initials?: string
  photo?: string
  phone?: string
}

export const brandAssets = {
  logo: itcomLogo,
  iimLogo,
  campusBg,
  thankyouBg,
  ecapPortal,
}

export const brand = {
  name: 'IT Committee',
  institute: 'IIM Bodh Gaya',
  vision:
    'We are the IT Committee of IIM Bodh Gaya — the quiet infrastructure behind campus life. We build the platforms, tell the stories, design the visuals, and run the technology that keeps the institute moving. Precision, craft, and a bias for shipping are what we stand for.',
}

// ── Page 2: What the IT Committee does ───────────────────────────
export const purpose = {
  intro:
    'The IT Committee is the student body behind the digital and technical fabric of IIM Bodh Gaya — from institute platforms to the audio-visual backbone of every major campus moment.',
  body:
    'We sit at the intersection of technology, design, and storytelling — building the platforms, running the events, and shaping how the institute looks and reads.',
  duties: [
    'Build and maintain institute web platforms and internal tools.',
    'Own the committee’s visual and editorial voice.',
    'Run the audio-visual backbone of campus events.',
    'Partner with every committee on events and execution.',
  ],
}

export type VerticalIconId = 'dev' | 'content' | 'design' | 'events'

export const verticals: {
  id: string
  name: string
  symbol: string
  description: string
  accent: string
  iconId: VerticalIconId
}[] = [
  {
    id: 'dev',
    name: 'Developers',
    symbol: '01',
    description:
      "Builds and maintains the committee's web platforms, internal tools, and technical infrastructure across the institute.",
    accent: '#06b6d4',
    iconId: 'dev',
  },
  {
    id: 'content',
    name: 'Content',
    symbol: '02',
    description:
      'Editorial voice of the committee — newsletters, long-form pieces, social captions, and internal comms.',
    accent: '#2563eb',
    iconId: 'content',
  },
  {
    id: 'design',
    name: 'Graphic Design',
    symbol: '03',
    description:
      'Owns the visual identity — posters, social creatives, motion, and brand consistency across every campus surface.',
    accent: '#7c3aed',
    iconId: 'design',
  },
  {
    id: 'events',
    name: 'Events & Sponsors',
    symbol: '04',
    description:
      'Plans and executes IT Committee-led events, hackathons, and tech talks — and drives sponsor outreach.',
    accent: '#06b6d4',
    iconId: 'events',
  },
]

// ── Page 3: Support IT Committee provides ────────────────────────
export const support = {
  intro:
    'The IT Committee owns the day-to-day technical backbone of campus life — from the auditorium AV rig to the systems that keep every event running.',
  duties: [
    'Operate sound, projection, and lighting for every convocation, guest lecture, and cultural night.',
    'Set up and troubleshoot AV for all committee events across the auditorium and academic block.',
    'Maintain institute-facing web platforms, internal tools, and dashboards used by other committees.',
    'Coordinate with the IT Department on infrastructure, systems support, and access provisioning.',
    'Produce editorial, design, and motion assets for institute-wide communication.',
  ],
  images: [
    { src: support1, alt: 'IT Committee running the auditorium AV console during a campus event' },
    { src: support2, alt: 'IT Committee operating live event technology in the auditorium' },
  ],
}

// ── Page 4: Committee members ────────────────────────────────────
export const committeeMembers: Person[] = [
  { name: 'Mona Gurjar', photo: monaImg },
  { name: 'Shantanu Ghosh', photo: shantanuImg },
  { name: 'Stuti Mohta', photo: stutiMohtaImg },
  { name: 'Charan Vijay', photo: charanImg },
  { name: 'Avi Agarwal', photo: aviImg },
  { name: 'Yati Varshney', photo: yatiImg },
  { name: 'Lakshman K R', photo: lakshmanImg },
  { name: 'Harshvardhan Jadhav', photo: harshImg },
  { name: 'Stuti Verma', photo: stutiVermaImg },
  { name: 'Kirti Bhushan Nonhare', photo: kirtiImg },
  { name: 'Aaditya Gupta', photo: aadityaImg },
  { name: 'Balaji G', photo: balajiImg },
  { name: 'Divyansh Verma', photo: divyanshImg },
  { name: 'Priyansh Choudhary', photo: priyanshImg },
  { name: 'Jeet Jadav', photo: jeetImg },
  { name: 'Pal Shivam Jaiprakash', photo: palImg },
  { name: 'Laraib Muttaqui', photo: laraibImg },
].map((m) => ({ ...m, initials: initialsOf(m.name) }))

// ── Page 5: Events done by IT Committee ──────────────────────────
export const events: { title: string; blurb: string; image: string }[] = [
  {
    title: 'Prompt Wars',
    blurb: 'A flagship case competition testing prompt-engineering craft and applied AI thinking across teams.',
    image: promptWars,
  },
  {
    title: 'Automation Anywhere MoU',
    blurb: 'Hosted the signing and campus session for the Automation Anywhere partnership — bringing industry automation to students.',
    image: automationMou,
  },
  {
    title: 'FIFA Gaming Night',
    blurb: 'A high-energy competitive gaming event that brought the campus together after hours.',
    image: fifa,
  },
  {
    title: 'College Rivals Collaboration',
    blurb: 'A cross-campus collaboration with College Rivals — bridging IT Committee and sharing talent, ideas, and friendly rivalry.',
    image: collab1,
  },
]

// ── Page 4: Chairperson + IT Department ──────────────────────────
export const chairperson: Person & { intro: string } = {
  name: 'Dr. Supriya Kumar Ghatak',
  role: 'Chairperson · IT Committee',
  initials: 'SG',
  photo: chairPhoto,
  intro:
    'Faculty, Department of Information Technology Systems and Analytics. Ph.D. — Indian Institute of Technology Kharagpur. Leads the committee’s strategic direction, represents the IT Committee to the administration, and owns institute-wide technology initiatives across academic and cultural calendars.',
}

export const itSupport: Person[] = [
  { name: 'Somnath Nayek', role: 'System Manager', initials: 'SN', photo: somnathPhoto },
  { name: 'Shashi Shankar Arya', role: 'Assistant System Manager', initials: 'SA', photo: shashiPhoto },
  { name: 'Vikash Kumar Thakur', role: 'Web Designer', initials: 'VT', photo: vikashPhoto },
  { name: 'Kritwasha Rai', role: 'IT & Computer Assistant', initials: 'KR', photo: kritwashaPhoto },
  { name: 'Kumar Gaurav', role: 'IT & Computer Assistant', initials: 'KG', photo: gauravPhoto },
  { name: 'Shiva Kant Sirohi', role: 'Graduate Trainee', initials: 'SS', photo: shivaPhoto },
]

// ── Page 7: Who we look for ──────────────────────────────────────
export type RoleIconId =
  | 'developers'
  | 'tech'
  | 'content'
  | 'events'
  | 'design'
  | 'video'

export const recruitment = {
  headline: 'Who we look for.',
  sub: 'Six kinds of people build the IT Committee. If any of these sound like you, we want you on the team.',
  roles: [
    {
      title: 'Developers',
      body: 'You write code and build the platforms, tools, and automations that power the institute.',
      iconId: 'developers' as RoleIconId,
    },
    {
      title: 'Tech Enthusiasts',
      body: 'You love exploring new tools and technologies and bringing fresh ideas to the table.',
      iconId: 'tech' as RoleIconId,
    },
    {
      title: 'Content Makers',
      body: 'You write the captions, newsletters, and stories that give the committee its voice.',
      iconId: 'content' as RoleIconId,
    },
    {
      title: 'Event Organisers',
      body: 'You plan and run events end-to-end — from the first idea to on-ground execution.',
      iconId: 'events' as RoleIconId,
    },
    {
      title: 'Graphic Designers',
      body: 'You craft the posters, creatives, and visual identity behind everything we ship.',
      iconId: 'design' as RoleIconId,
    },
    {
      title: 'Video Editors',
      body: 'You turn raw footage into reels, recaps, and motion that people actually stop to watch.',
      iconId: 'video' as RoleIconId,
    },
  ],
}

// ── Page 8: Thank you + contact ──────────────────────────────────
export const pocs: Person[] = [
  { name: 'Lakshman K R', role: 'Point of Contact', initials: 'LK', phone: '96771 32615' },
  { name: 'Kirti Bhushan Nonhare', role: 'Point of Contact', initials: 'KB', phone: '70002 32158' },
  { name: 'Yati Varshney', role: 'Point of Contact', initials: 'YV', phone: '76689 43781' },
]

export const contact = {
  email: 'it.com@iimbg.ac.in',
}

export const sections = [
  { n: '01', label: 'Opening', id: 'opening' },
  { n: '02', label: 'What We Do', id: 'purpose' },
  { n: '03', label: 'Support', id: 'support' },
  { n: '04', label: 'Leadership', id: 'leadership' },
  { n: '05', label: 'Members', id: 'members' },
  { n: '06', label: 'Events', id: 'events' },
  { n: '07', label: 'Recruitment', id: 'recruitment' },
  { n: '08', label: 'Thank You', id: 'contact' },
]

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}
