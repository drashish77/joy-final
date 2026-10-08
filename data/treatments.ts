export type Treatment = {
  slug: string
  title: string
  short: string
  description: string
  category: string
  image?: string
  highlights: string[]
  faqs: { q: string; a: string }[]
}

export type TreatmentCategory = {
  number: string
  slug: string
  title: string
  description: string
  treatments: Treatment[]
  image?: string
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    number: '01',
    image: '/img/checkup_1.jpg',
    slug: 'general-dentistry',
    title: 'General & Preventive Dentistry',
    description:
      'Everyday dental care focused on prevention, early diagnosis and keeping your natural teeth healthy.',
    treatments: [
      {
        slug: 'dental-checkup',
        title: 'Dental Check-up',
        image: '/img/checkup_1.jpg',
        category: 'General Dentistry',
        short: 'A thorough examination to catch dental problems early.',
        description:
          'Regular dental examinations help identify cavities, gum problems, tooth wear and other oral health concerns before they become bigger problems.',
        highlights: [
          'Clinical examination',
          'Oral health assessment',
          'Treatment planning',
          'Preventive guidance'
        ],
        faqs: [
          {
            q: 'How often should I have a dental check-up?',
            a: 'Your dentist can recommend an interval based on your oral health, risk factors and treatment history.'
          }
        ]
      },
      {
        slug: 'dental-cleaning',
        image: '/img/scaling.jpg',
        title: 'Scaling & Teeth Cleaning',
        category: 'General Dentistry',
        short: 'Professional removal of plaque, tartar and surface deposits.',
        description:
          'Professional cleaning helps remove deposits that routine brushing cannot completely eliminate and supports healthier gums.',
        highlights: [
          'Plaque removal',
          'Tartar removal',
          'Gum health assessment',
          'Oral hygiene guidance'
        ],
        faqs: [
          {
            q: 'Does scaling damage teeth?',
            a: 'Professional scaling is designed to remove deposits from teeth and around the gumline without damaging healthy tooth structure.'
          }
        ]
      },
      {
        slug: 'dental-fillings',
        title: 'Dental Fillings',
        image: '/img/steps-of-dental-filling.jpg',
        category: 'Restorative Dentistry',
        short:
          'Restore teeth affected by cavities while preserving healthy tooth structure.',
        description:
          'A filling removes decay and restores the shape and function of the affected tooth.',
        highlights: [
          'Cavity treatment',
          'Tooth-colored options',
          'Restores function',
          'Helps prevent progression'
        ],
        faqs: []
      }
    ]
  },
  {
    number: '02',
    slug: 'root-canal-treatment',
    image: '/img/rct_steps.jpg',
    title: 'Root Canal & Tooth Saving',
    description:
      'When a tooth is infected or badly damaged, the goal is to save the natural tooth whenever possible.',
    treatments: [
      {
        slug: 'root-canal-treatment',
        title: 'Root Canal Treatment',
        image: '/img/rct_steps2.jpg',

        category: 'Endodontics',
        short:
          'Remove infection, relieve symptoms and preserve the natural tooth.',
        description:
          'Root canal treatment removes infected or inflamed tissue from inside a tooth, cleans the root canal system and seals it so the tooth can continue functioning.',
        highlights: [
          'Natural tooth preservation',
          'Infection control',
          'Pain-focused care',
          'Restoration planning'
        ],
        faqs: [
          {
            q: 'Does a root canal hurt?',
            a: 'The procedure is performed with local anaesthesia. Some tenderness can occur afterward, but your dentist will guide you through aftercare.'
          }
        ]
      }
    ]
  },
  {
    number: '03',
    slug: 'crowns-bridges-dentures',
    image: '/img/dental_crown.jpg',
    title: 'Crowns, Bridges & Dentures',
    description:
      'Restore damaged or missing teeth with restorations selected around function, appearance and long-term maintenance.',
    treatments: [
      {
        slug: 'dental-crowns',
        title: 'Dental Crowns',
        image: '/img/dental_crown.jpg',
        category: 'Prosthodontics',
        short:
          'Protect and restore teeth that are weakened or heavily damaged.',
        description:
          'A dental crown covers and protects a prepared tooth, restoring its shape, strength and appearance.',
        highlights: [
          'Tooth protection',
          'Restored chewing function',
          'Multiple material choices',
          'Natural-looking results'
        ],
        faqs: []
      },
      {
        slug: 'zirconia-crowns',
        title: 'Zirconia Crowns',
        image: '/img/dental_crown.jpg',
        category: 'Prosthodontics',
        short: 'A strong, tooth-colored restoration for selected cases.',
        description:
          'Zirconia crowns are metal-free ceramic restorations used when strength and aesthetics both matter.',
        highlights: [
          'Metal-free option',
          'High strength',
          'Tooth-colored appearance',
          'Suitable case selection'
        ],
        faqs: []
      },
      {
        slug: 'dental-bridges',
        title: 'Dental Bridges',
        image: '/img/dental_crown.jpg',
        category: 'Prosthodontics',
        short:
          'Replace a missing tooth using support from neighboring teeth or restorations.',
        description:
          'A dental bridge can replace one or more missing teeth and restore appearance and chewing function.',
        highlights: [
          'Fixed tooth replacement',
          'Restores chewing',
          'Improves appearance',
          'Multiple designs'
        ],
        faqs: []
      },
      {
        slug: 'removable-partial-denture',
        image: '/img/Partial-Dentures-featured.jpg',
        title: 'Removable Partial Dentures',
        category: 'Prosthodontics',
        short: 'A removable option for replacing multiple missing teeth.',
        description:
          'Partial dentures can replace several missing teeth while offering a removable solution for selected patients.',
        highlights: [
          'Removable design',
          'Multiple-tooth replacement',
          'Functional restoration',
          'Personalized fit'
        ],
        faqs: []
      }
    ]
  },
  {
    number: '04',
    slug: 'orthodontics',
    image: '/img/ortho2.jpg',
    title: 'Orthodontics & Clear Aligners',
    description:
      'Straighten teeth, improve bite and build a healthier, more confident smile with specialist orthodontic care.',
    treatments: [
      {
        slug: 'braces',
        title: 'Dental Braces',
        image: '/img/ortho.jpg',
        category: 'Orthodontics',
        short:
          'Correct crooked teeth, spacing and bite problems with fixed orthodontic treatment.',
        description:
          'Braces use controlled forces to gradually move teeth into healthier and more functional positions.',
        highlights: [
          'Metal braces',
          'Ceramic braces',
          'Bite correction',
          'Specialist treatment planning'
        ],
        faqs: [
          {
            q: 'Can adults get braces?',
            a: 'Yes. Orthodontic treatment can be planned for adults as well as children and teenagers.'
          }
        ]
      },
      {
        slug: 'clear-aligners',
        title: 'Clear Aligners',
        image: '/img/aligners.jpg',
        category: 'Orthodontics',
        short:
          'A discreet, removable approach to selected orthodontic problems.',
        description:
          'Clear aligners use a sequence of custom trays to gradually move teeth. Suitability depends on the complexity of the case.',
        highlights: [
          'Removable trays',
          'Discreet appearance',
          'Digital treatment planning',
          'Specialist supervision'
        ],
        faqs: [
          {
            q: 'Are clear aligners suitable for everyone?',
            a: 'Not every orthodontic problem is best treated with aligners. A specialist assessment is needed to determine suitability.'
          }
        ]
      }
    ]
  },
  {
    number: '05',
    slug: 'gum-treatment',
    image: '/img/bleeding_gums.jpg',
    title: 'Gum Treatment',
    description:
      'From bleeding gums and bad breath to periodontal disease, healthy gums are essential for keeping your teeth for longer.',
    treatments: [
      {
        slug: 'gum-disease-treatment',
        title: 'Gum Disease Treatment',
        image: '/img/bleeding_gums.jpg',
        category: 'Periodontology',
        short:
          'Identify and manage inflammation, infection and damage around the teeth.',
        description:
          'Gum treatment focuses on controlling bacterial buildup and inflammation while protecting the tissues supporting your teeth.',
        highlights: [
          'Bleeding gum assessment',
          'Professional cleaning',
          'Periodontal evaluation',
          'Maintenance planning'
        ],
        faqs: [
          {
            q: 'Why do my gums bleed?',
            a: 'Bleeding can be a sign of gum inflammation, commonly associated with plaque and tartar buildup. Persistent bleeding should be assessed by a dentist.'
          }
        ]
      }
    ]
  },
  {
    number: '06',
    slug: 'oral-surgery',
    image: '/img/wisdomTooth.jpg',
    title: 'Extractions & Oral Surgery',
    description:
      'Comfort-focused surgical care for teeth that cannot be treated conservatively or require planned removal.',
    treatments: [
      {
        slug: 'tooth-extraction',
        title: 'Tooth Extraction',
        category: 'Oral Surgery',
        image: '/img/wisdom_tooth.jpg',
        short: 'Safe removal of teeth when extraction is clinically necessary.',
        description:
          'When a tooth cannot be predictably restored or presents another clinical problem, extraction may be recommended after assessment.',
        highlights: [
          'Clinical assessment',
          'Local anaesthesia',
          'Planned removal',
          'Aftercare guidance'
        ],
        faqs: []
      },
      {
        slug: 'wisdom-tooth-removal',
        title: 'Wisdom Tooth Removal',
        image: '/img/wisdomTooth.jpg',
        category: 'Oral Surgery',
        short:
          'Treatment for painful, infected, impacted or problematic wisdom teeth.',
        description:
          'Wisdom teeth may require removal when they are impacted, repeatedly infected, difficult to clean or causing problems for neighboring structures.',
        highlights: [
          'Impacted wisdom teeth',
          'Infection management',
          'Surgical extraction',
          'Post-operative guidance'
        ],
        faqs: [
          {
            q: 'Does every wisdom tooth need to be removed?',
            a: 'No. Removal depends on the position, symptoms, cleanliness, disease risk and clinical findings.'
          }
        ]
      }
    ]
  },
  {
    number: '07',
    slug: 'cosmetic-dentistry',
    image: '/img/whitening1.jpg',
    title: 'Cosmetic & Smile Dentistry',
    description:
      'Subtle improvements that help teeth look cleaner, brighter and more harmonious while keeping treatment appropriate to your oral health.',
    treatments: [
      {
        slug: 'teeth-whitening',
        title: 'Teeth Whitening',
        image: '/img/whitening2.jpg',
        category: 'Cosmetic Dentistry',
        short:
          'Brighten natural teeth affected by suitable types of staining and discoloration.',
        description:
          'Professional whitening can lighten suitable natural teeth after checking the health of your teeth and gums and identifying the cause of discoloration.',
        highlights: [
          'Professional assessment',
          'Surface stain improvement',
          'Controlled treatment',
          'Aftercare guidance'
        ],
        faqs: [
          {
            q: 'Is teeth whitening permanent?',
            a: 'No. Whitening results can fade over time as new stains develop. Good oral hygiene and maintenance can help preserve the result.'
          }
        ]
      }
    ]
  },
  {
    number: '08',
    slug: 'childrens-dentistry',
    image: '/img/pedo_case.jpg',
    title: "Children's Dentistry",
    description:
      'Gentle dental care that helps children build healthy habits and positive experiences with the dentist.',
    treatments: [
      {
        slug: 'childrens-dentistry',
        image: '/img/pedo_case.jpg',
        title: "Children's Dental Care",
        category: 'Paediatric Dentistry',
        short: 'Preventive and restorative care tailored to growing smiles.',
        description:
          'Children benefit from age-appropriate examinations, preventive guidance and timely treatment of dental problems.',
        highlights: [
          'Preventive care',
          'Cavity assessment',
          'Oral hygiene guidance',
          'Growth monitoring'
        ],
        faqs: []
      }
    ]
  }
]

export const allTreatments = treatmentCategories.flatMap((c) => c.treatments)
export function getTreatment(slug: string) {
  return allTreatments.find((t) => t.slug === slug)
}
