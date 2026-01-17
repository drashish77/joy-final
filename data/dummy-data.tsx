import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react'

export const featuresData = [
  {
    icon: <UploadIcon className='w-6 h-6' />,
    imgUrl: 'img/checkUp.jpg',
    title: 'Routine Check-ups',
    desc: 'A regular dental checkup helps your dentist to determine whether you have any dental problems and aids you in maintaining oral health to fend against dental emergencies.'
  },
  {
    icon: <UploadIcon className='w-6 h-6' />,
    title: 'Scaling/ Teeth cleaning',
    imgUrl: 'img/scaling.jpeg',
    desc: 'A regular dental checkup helps your dentist to determine whether you have any dental problems and aids you in maintaining oral health to fend against dental emergencies.'
  },
  {
    icon: <ZapIcon className='w-6 h-6' />,
    title: 'Wisdom Tooth Surgery',
    imgUrl: 'img/wisdomTooth.jpg',
    desc: "You'll probably need to have your wisdom teeth or third molar removed if it is impacted, which causes discomfort, infection, or other dental issues."
  },
  {
    icon: <VideoIcon className='w-6 h-6' />,
    title: 'Orthodontic Treatment',
    imgUrl: 'img/ortho.jpg',
    desc: 'Whether teeth are crowded or positioned incorrectly in any other manner, orthodontic treatment can straighten or move teeth to improve their appearance and function.'
  },
  {
    icon: <UploadIcon className='w-6 h-6' />,
    title: 'Dental Implants',
    imgUrl: 'img/implant.jpg',
    desc: 'In dental implant surgery, tooth roots are replaced with metal posts that resemble screws, and damaged or missing teeth are replaced with prosthetic teeth that closely resemble real teeth in appearance and function.'
  },
  {
    icon: <ZapIcon className='w-6 h-6' />,
    title: 'Aesthetic Dentistry',
    imgUrl: 'img/veneer.jpeg',
    desc: 'Cosmetic dentistry uses a range of methods, including veneers, braces, and teeth whitening, to give you perfectly straight, white, and bright teeth.'
  },
  {
    icon: <VideoIcon className='w-6 h-6' />,
    title: 'Restorative Dentistry',
    imgUrl: 'img/restoration.png',
    desc: 'The purpose of restorative dentistry is to repair damaged teeth or replace missing ones by saving and providing teeth that look, feel, and work like natural teeth.'
  },
  {
    icon: <UploadIcon className='w-6 h-6' />,
    title: 'Pediatric Dentistry',
    imgUrl: 'img/pediatric.jpg',
    desc: 'Pediatric dentists are dedicated to the oral health of children from infancy through the teen years, caring for a child’s teeth, gums, and mouth throughout the various stages of childhood.'
  },
  {
    icon: <ZapIcon className='w-6 h-6' />,
    title: 'Other Services',
    imgUrl: 'img/other.jpg',
    desc: 'General dentistry services include complete exams, x-rays, dental cleanings, fillings, root canals, and extractions.'
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
    id: 1,
    question: 'How often should I visit the dentist for a check-up?',
    answer:
      'You should visit the dentist for a check-up every six months to maintain oral health, catch issues early, and receive professional cleanings.'
  },
  {
    id: 2,
    question: 'What should I expect during my first visit to Joy Dental?',
    answer:
      'During your first visit to Joy Dental, expect a comprehensive oral exam, discussion of your dental health and goals, possible X-rays, and a customized treatment plan.'
  },
  {
    id: 3,
    question: 'When will be an RCT (root canal treatment) needed for my tooth?',
    answer:
      'you might need a RCT include severe tooth pain, prolonged tooth sensitivity to hot or cold, pus discharge, darkening of the tooth, and tenderness when chewing.'
  },
  {
    id: 4,
    question: 'What is the process for getting dental implants at joy dental',
    answer:
      'At Joy Dental, getting dental implants involves a consultation, implant placement, a healing period for bone integration, and then fitting the abutment and crown.'
  },
  {
    id: 5,
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
  },
  {
    id: 6,
    question: 'What types of braces does joy Dental offer?',
    answer:
      'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
  },
  {
    id: 7,
    question: 'What safety measures are in place at Joy Dental clinics?',
    answer:
      'At Joy Dental, we have 10x safety protocols, radiation safety, and a 4-step sterilization process for instruments. We use AI-enhanced DORI protocols for sterilization compliance.'
  }
]

export const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'Home', url: '#' },
      { name: 'Services', url: '#' },
      { name: 'cases', url: '#' },
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
      { name: 'instagram', url: '#' },
      { name: 'facebook', url: '#' }
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

export const heroCarouselItems = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?q=80&w=880&auto=format&fit=crop',
    title: 'Misty Mountain Majesty'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1617812191081-2a24e3f30e45?q=80&w=880&auto=format&fit=crop',
    title: 'Winter Wonderland'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Autumn Mountain Retreat'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Tranquil Lake Reflection'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Misty Mountain Peaks'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1570840934347-4dc56c98b8ef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Golden Hour Glow'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Snowy Mountain Highway'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1525786210598-d527194d3e9a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Foggy Mountain Forest'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sunset Mountain Silhouette'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Alpine Meadow Bliss'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1720685193964-4529228a33c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountain Lake Serenity'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Icy Mountain Stream'
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1656514894252-fb336a3ad6a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Wildflower Mountain Meadow'
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1609840113929-b130355987e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountain Valley Vista'
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Rugged Mountain Terrain'
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountain Wildflower Bloom'
  },
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountain River Rapids'
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountain River Rapids'
  },
  {
    id: 19,
    url: 'https://images.unsplash.com/photo-1663182234283-28941e7612da?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountain River Rapids'
  }
  //   {
  //     id: 18,

  //     url: 'https://images.unsplash.com/photo-1590872000386-4348c6393115?q=80&w=688&auto=format&fit=crop',
  //     title: 'Lush Mountain Valley'
  //   }
]