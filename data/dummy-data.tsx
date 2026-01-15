import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react'

export const featuresData = [
  {
    icon: <UploadIcon className='w-6 h-6' />,
    title: ' General Check-ups & Preventive Care',

    desc: 'We understand your goals, audience and challenges to craft a clear, actionable strategy.'
  },
  {
    icon: <ZapIcon className='w-6 h-6' />,
    title: 'Design & Development',
    desc: 'High-quality design and scalable development focused on performance and usability.'
  },
  {
    icon: <VideoIcon className='w-6 h-6' />,
    title: 'Launch & Growth',
    desc: 'We launch, optimize and continuously improve to drive measurable business growth.'
  }
]

export const plansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$499',
    desc: 'Best for early-stage startups.',
    credits: 'One-time',
    features: [
      'Project discovery & planning',
      'UI/UX design',
      'Basic website development',
      '1 revision round',
      'Email support'
    ]
  },
  {
    id: 'pro',
    name: 'Growth',
    price: '$1,499',
    desc: 'Growing teams and businesses.',
    credits: 'Monthly',
    features: [
      'Everything in Starter',
      'Advanced UI/UX design',
      'Custom development',
      'Performance optimization',
      'Priority support'
    ],
    popular: true
  },
  {
    id: 'ultra',
    name: 'Scale',
    price: '$3,999',
    desc: 'For brands ready to scale fast.',
    credits: 'Custom',
    features: [
      'Everything in Growth',
      'Dedicated project manager',
      'Ongoing optimization',
      'Marketing & growth support',
      'Chat + Email support'
    ]
  }
]

export const faqData = [
  {
    question: 'When will be an RCT (root canal treatment) needed for my tooth?',
    answer:
      'you might need a RCT include severe tooth pain, prolonged tooth sensitivity to hot or cold, pus discharge, darkening of the tooth, and tenderness when chewing.'
  },
  {
    question: 'What is the process for getting dental implants at joy dental',
    answer:
      'At Joy Dental, getting dental implants involves a consultation, implant placement, a healing period for bone integration, and then fitting the abutment and crown.'
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
  },
  {
    question: 'What types of braces does joy Dental offer?',
    answer:
      'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
  }
]

export const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'Home', url: '#' },
      { name: 'Services', url: '#' },
      { name: 'Work', url: '#' },
      { name: 'Contact', url: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { name: 'Twitter', url: '#' },
      { name: 'LinkedIn', url: '#' },
      { name: 'GitHub', url: '#' }
    ]
  }
]


export const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
    title: 'Misty Mountain Majesty'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop',
    title: 'Winter Wonderland'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop',
    title: 'Autumn Mountain Retreat'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1683722319473-f851deb3fdf2?q=80&w=880&auto=format&fit=crop',
    title: 'Tranquil Lake Reflection'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=734&auto=format&fit=crop',
    title: 'Misty Mountain Peaks'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1698774303292-7af9410c3a57?q=80&w=436&auto=format&fit=cropv',
    title: 'Golden Hour Glow'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1643994542584-1247b5266429?q=80&w=869&auto=format&fit=crop',
    title: 'Snowy Mountain Highway'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1613681230409-6423a38c43e1?q=80&w=871&auto=format&fit=crop',
    title: 'Foggy Mountain Forest'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1486102515046-44130769cb25?q=80&w=435&auto=format&fit=crop',
    title: 'Sunset Mountain Silhouette'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?q=80&w=430&auto=format&fit=crop',
    title: 'Alpine Meadow Bliss'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1546471180-335a013cb87b?q=80&w=387&auto=format&fit=crop',
    title: 'Mountain Lake Serenity'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1540163502599-a3284e17072d?q=80&w=880&auto=format&fit=crop',
    title: 'Icy Mountain Stream'
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1555803741-1ac759ac2f53?q=80&w=880&auto=format&fit=crop',
    title: 'Wildflower Mountain Meadow'
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?q=80&w=880&auto=format&fit=crop',
    title: 'Mountain Valley Vista'
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1512045519129-eb9ceb788555?q=80&w=880&auto=format&fit=crop',
    title: 'Rugged Mountain Terrain'
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=880&auto=format&fit=crop',
    title: 'Mountain Wildflower Bloom'
  },
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1611582450053-0f056a82a68e?q=80&w=735&auto=format&fit=crop',
    title: 'Mountain River Rapids'
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1590872000386-4348c6393115?q=80&w=688&auto=format&fit=crop',
    title: 'Lush Mountain Valley'
  }
]

//  General Dental Check-ups & Preventive Care

// Tooth Fillings & Root Canal Treatment

// Orthodontic Treatment (Braces & Aligners)

// Smile Design & Cosmetic Dentistry

// Dental Implants

// Teeth Cleaning & Whitening

// Pediatric Dental Care

// Gum Care & Oral Hygiene Management
//