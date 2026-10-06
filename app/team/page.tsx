'use client'

import { motion } from 'motion/react'
import {
  Heart,
  Target,
  Smile,
  Award,
  Users,
  Zap,
  GraduationCap,
  Briefcase,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

// export const metadata = {
//   title: 'About joy dental - Quality Dental Care Excellence',
//   description:
//     'Learn about joy dental clinic, our mission to provide exceptional dental care, our expert team, and our commitment to patient satisfaction.'
// }

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Ashish Gupta',
    cred: ['BDS', 'MBA'],
    role: 'Chief Dentist & Founder',
    bio: 'BDS from Govt Dental College, Indore with 12+ years of experience in cosmetic and restorative dentistry',
    image: '/img/ashish_drr.png'
  },
  {
    id: 2,
    name: 'Dr. Priyanka Gupta',
    cred: ['BDS', 'MDS'],
    role: 'Orthodontics & Founder',
    bio: 'BDS from GDC, Indore and MDS from KGMC, Lucknow, expertise in modern braces and clear aligner treatments',
    image: '/img/priyanka_dr.png'
  }
  // {
  //   id: 3,
  //   name: 'Dr. Roop kumar Nirmal',
  //   cred: ['BDS', 'MDS'],

  //   role: 'Oral and Maxillofacial surgery',
  //   bio: 'Specialized in dental implants and advanced surgical procedures with 15+ years experience',
  //   image: '/img/roop_dr.png'
  // }
  //   {id:1,
  //     name: 'Dr Trishna Mhapsekar',
  //     cred: ['BDS', 'MDS'],
  //     role: 'periodontology',
  //     bio: 'Ensures smooth clinic operations and exceptional patient experience at every visit',
  //     image:
  //       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  //   }
]

const coreValues = [
  {
    id: 1,
    icon: Heart,
    title: 'Patient-Centered Care',
    description:
      'We prioritize your comfort, health, and happiness in every treatment'
  },
  {
    id: 2,
    icon: Target,
    title: 'Excellence',
    description:
      'We continuously improve our skills and adopt latest dental technologies'
  },
  {
    id: 3,
    icon: Smile,
    title: 'Accessibility',
    description:
      "Quality dental care that's affordable and accessible to everyone"
  },
  {
    id: 4,
    icon: Award,
    title: 'Integrity',
    description:
      'Transparent communication and ethical practices in all our services'
  },
  {
    id: 5,
    icon: Users,
    title: 'Community',
    description:
      'Building lasting relationships with our patients and local community'
  },
  {
    id: 5,
    icon: Zap,
    title: 'Innovation',
    description: 'Using cutting-edge technology for better outcomes and comfort'
  }
]

const stats = [
  { label: 'Happy Patients', value: '10,000+' },
  { label: 'Years Experience', value: '12+' },
  { label: 'Expert Dentists', value: '2+' },
  { label: 'Advanced Treatments', value: '50+' }
]

export default function TeamPage() {
  return (
    <div className='min-h-screen bg-background'>
      {/* <Navigation /> */}
      {/* Team Section */}
      <section className='py-28 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              Meet Our Expert Team
            </h2>
            <p className='text-muted-foreground text-lg'>
              Dedicated professionals committed to your dental health
            </p>
          </motion.div>

          <div className='grid grid-cols-1  lg:grid-cols-2 gap-8'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all group'
              >
                <div className='relative overflow-hidden h-64 md:h-96 bg-muted'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-bold text-foreground mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-primary font-medium text-sm mb-3'>
                    {member.cred?.map((a, idx) => (
                      <span key={idx}> {a}, </span>
                    ))}
                  </p>
                  <p className='text-primary font-medium text-sm mb-3'>
                    {member.role}
                  </p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Founding Doctors Section */}
      <section className='py-5 bg-background '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              Meet Our Founding Doctors
            </h2>
            <p className='text-lg text-muted-foreground'>
              Expertise, Excellence & Trusted Care
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-16'
          >
            At joy dental, our foundation is built on clinical excellence,
            academic distinction, and years of hands-on experience. Our founding
            doctors bring together prestigious educational credentials, advanced
            specialist training, and a strong commitment to continuous learning
            through conferences, workshops, and the latest evidence-based dental
            practices.
          </motion.p>

          <div className='space-y-16'>
            {/* Dr. Ashish Gupta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors'
            >
              <div className='flex items-start gap-6 mb-6'>
                <div className='flex-shrink-0'>
                  <div className='w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center'>
                    <Briefcase className='w-10 h-10 text-primary' />
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-1'>
                    Dr. Ashish Gupta
                  </h3>
                  <p className='text-lg text-primary font-semibold'>
                    Founder | Dental Surgeon
                  </p>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='text-lg font-bold text-foreground mb-3 flex items-center gap-2'>
                  <GraduationCap className='w-5 h-5 text-primary' />
                  Qualifications
                </h4>
                <ul className='space-y-2 text-muted-foreground'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                    <span>
                      <strong>BDS</strong> – Government Dental College, Indore
                      (The only govt. dental college of MP)
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                    <span>
                      <strong>MBA</strong> – IIHMR, Jaipur (WHO-recognized)
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                    <span>12+ years of clinical experience</span>
                  </li>
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='space-y-4 text-muted-foreground leading-relaxed'
              >
                <ul>
                  <li>
                    👉 With <strong>12+ years of clinical experience</strong> in
                    dentistry, Dr. Ashish Gupta has been dedicated to delivering
                    comprehensive, patient-centric dental care with a focus on
                    precision, trust, and long-term oral health.
                  </li>
                  <li>
                    👉 Graduation from the prestigious and only Government
                    Dental College, Indore, one of the most respected
                    institutions in the state, and further strengthened his
                    professional expertise by pursuing an MBA from IIHMR,
                    Jaipur, a globally recognized healthcare management
                    institute.
                  </li>
                  <li>
                    👉 His combination of clinical expertise and healthcare
                    management knowledge enables the clinic to maintain the
                    highest standards of patient care, treatment planning, and
                    modern dental practice management.
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Dr. Priyanka Gupta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors'
            >
              <div className='flex items-start gap-6 mb-6'>
                <div className='flex-shrink-0'>
                  <div className='w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center'>
                    <GraduationCap className='w-10 h-10 text-primary' />
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-foreground mb-1'>
                    Dr. Priyanka Gupta
                  </h3>
                  <p className='text-lg text-primary font-semibold'>
                    Founder | Specialist Orthodontist
                  </p>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='text-lg font-bold text-foreground mb-3 flex items-center gap-2'>
                  <GraduationCap className='w-5 h-5 text-primary' />
                  Qualifications
                </h4>
                <ul className='space-y-2 text-muted-foreground'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                    <span>
                      <strong>BDS</strong> – Government Dental College, Indore
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                    <span>
                      <strong>NEET PG : </strong> 1<sup>st</sup> Rank in Madhya
                      Pradesh | AIR 13<sup>th</sup> (Unreserved Category)
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                    <span>
                      <strong>MDS in Orthodontics</strong> – King George's
                      Medical University, Lucknow
                    </span>
                  </li>
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='space-y-4 text-muted-foreground leading-relaxed mb-6'
              >
                <p>
                  Dr. Priyanka Gupta is an accomplished Orthodontic Specialist
                  with exceptional academic achievements and advanced expertise
                  in smile correction, braces, and orthodontic treatment
                  planning.
                </p>
                <p>
                  After completing her BDS from the prestigious Government
                  Dental College, Indore, she secured an outstanding{' '}
                  <strong>
                    Rank 1 in Madhya Pradesh and All India Rank 13 in the NEET
                    PG examination (Unreserved Category)
                  </strong>{' '}
                  — a remarkable testament to her dedication and academic
                  excellence.
                </p>
                <p>
                  She went on to complete her MDS in Orthodontics from King
                  George's Medical University (KGMU), Lucknow, one of India's
                  most renowned medical institutions.
                </p>
                <p>
                  Prior to co-founding joy dental, she served as an{' '}
                  <strong>
                    Assistant Professor at Index Hospital & Research Centre
                  </strong>
                  , where she trained and mentored numerous dental students in
                  orthodontic diagnosis, treatment planning, and clinical case
                  management.
                </p>
              </motion.div>

              <div className='bg-primary/10 rounded-lg p-4'>
                <h4 className='text-lg font-bold text-foreground mb-3'>
                  Expertise in:
                </h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  {[
                    'Metal braces',
                    'Ceramic braces',
                    'Smile designing',
                    'Orthodontic treatment planning',
                    'Bite correction',
                    'Advanced aligner therapy'
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                      viewport={{ once: true }}
                      className='flex items-center gap-2 text-foreground'
                    >
                      <CheckCircle className='w-4 h-4 text-primary flex-shrink-0' />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Commitment to Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/30'
            >
              <h3 className='text-2xl font-bold text-foreground mb-6 flex items-center gap-2'>
                <Award className='w-8 h-8 text-primary' />
                Commitment to Excellence
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                Both our doctors regularly attend national conferences,
                workshops, and advanced training programs to stay updated with
                the latest innovations in modern dentistry and orthodontics.
              </p>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                This commitment ensures that every patient at joy dental
                receives care that is aligned with the latest global standards
                and techniques.
              </p>
            </motion.div>

            {/* Why Patients Trust Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-card rounded-2xl p-8 border border-border'
            >
              <h3 className='text-2xl font-bold text-foreground mb-6 flex items-center gap-2'>
                <Heart className='w-8 h-8 text-primary' />
                Why Patients Trust Us
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[
                  'Highly qualified founding doctors',
                  'Government college-trained professionals',
                  'Specialist orthodontic expertise',
                  '12+ years of clinical experience',
                  'Academic excellence & national ranks',
                  'Modern, evidence-based treatments'
                ].map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className='flex items-center gap-3 text-foreground'
                  >
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0' />
                    <span>{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-background'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-foreground mb-6'>
              Ready for a Brighter Smile?
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Schedule your appointment today and experience the joy dental
              difference. Your journey to optimal dental health starts here.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/#contact'
                className='px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors'
              >
                Schedule Appointment
              </Link>
              <Link
                href='/#treatments'
                className='px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors'
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className='py-8 bg-card border-t border-border'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium'
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
