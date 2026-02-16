/**
 * Strapi Seed Script
 * Populates the CMS with initial content from the aiinfoxtechlv frontend fallback data.
 *
 * Usage:
 *   STRAPI_URL=http://localhost:1337 STRAPI_ADMIN_TOKEN=<your-token> npx ts-node scripts/seed.ts
 *
 * Prerequisites:
 *   - Strapi must be running
 *   - An API token with full access must be created in Strapi admin
 *   - Public role must have find/findOne permissions for all content types
 */

const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_ADMIN_TOKEN ?? '';

if (!STRAPI_TOKEN) {
  console.error('ERROR: STRAPI_ADMIN_TOKEN env var is required.');
  console.error('Create a Full Access API token in Strapi Admin → Settings → API Tokens');
  process.exit(1);
}

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${STRAPI_TOKEN}`,
};

async function createEntry(endpoint: string, data: Record<string, unknown>): Promise<void> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ data }),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    console.error(`  FAIL ${endpoint}: ${resp.status} — ${text}`);
    return;
  }

  const json = (await resp.json()) as { data?: { id?: number; documentId?: string } };
  console.log(`  OK ${endpoint} → id=${json.data?.id ?? json.data?.documentId ?? 'unknown'}`);
}


/* ------------------------------------------------------------------ */
/*  Course Data                                                        */
/* ------------------------------------------------------------------ */

const COURSES = [
  {
    site: 'lv',
    title: 'Machine Learning with Python',
    slug: 'machine-learning-with-python',
    shortDescription: 'Hands-on ML with scikit-learn, pandas, and model deployment.',
    icon: 'BrainCircuit',
    order: 1,
    heroTitle: 'What Will You Learn in Machine Learning with Python?',
    heroSubtitle: 'Explore our Machine Learning with Python curriculum to gain hands-on experience with AI-driven technologies and industry-standard tools.',
    whyChooseTitle: 'Why Choose Aiinfox for **Machine Learning with Python**?',
    whyChooseDescription: 'Aiinfox empowers you with hands-on Machine Learning with Python training, ensuring you gain real-world skills and job-ready expertise in AI and data science.',
    whyChooseBadge: 'Machine Learning With Python',
    leftFeatures: [
      { icon: 'CheckCircle2', title: '100% Practical Training' },
      { icon: 'Briefcase', title: 'Apply For Job In The IT Sector' },
      { icon: 'FileCheck2', title: '25+ Case Studies' },
      { icon: 'Clock', title: '0% EMI Option Available' },
      { icon: 'Code2', title: 'No Technical Background is Needed' },
    ],
    rightFeatures: [
      { icon: 'BadgeCheck', title: '100% Job Assurance' },
      { icon: 'GraduationCap', title: 'Certification' },
      { icon: 'LineChart', title: '1200+ Placement Partners' },
      { icon: 'BrainCircuit', title: 'Learn from Developers' },
      { icon: 'Sparkles', title: 'Free Interview Preparations' },
    ],
    benefitCards: [
      { icon: 'Briefcase', title: '25,00,000+ AI Jobs Available', description: 'More than 2.5 million jobs are available in the Indian marketplace.' },
      { icon: 'BadgeCheck', title: 'Apply Without Qualification', description: 'No degree is required to opt for our available courses.' },
      { icon: 'BookOpen', title: 'Study Materials', description: 'Get access to study material from our institute for thorough revisions.' },
      { icon: 'Users', title: 'Experienced AI Mentors', description: 'Understand IT concepts with theory and practical exposure.' },
      { icon: 'Award', title: 'Scholarship Opportunities', description: 'Talented students can apply for scholarships for financial relief.' },
      { icon: 'LineChart', title: 'Work In MNCs', description: 'Join any MNC in your future for professional growth.' },
      { icon: 'Code2', title: 'Freelancing', description: 'Complete your course, and grab clients online to work from home.' },
      { icon: 'GraduationCap', title: 'Interview Preparation', description: 'Improve communication, behavior, and knowledge up to industry standards.' },
    ],
    benefitBadge: 'Develop new Skills',
    benefitTitle: 'Learn From Our **Machine Learning With Python** Training Institute',
    learnBadge: 'Beyond Technical Skills',
    learnTitle: 'What Will You Learn in **Machine Learning with Python**?',
    learnDescription: 'Explore our Machine Learning with Python curriculum to gain hands-on experience with AI-driven technologies and industry-standard tools.',
    learnPoints: [
      { icon: 'ChevronRight', text: 'Master Core ML Concepts \u2013 Learn algorithms, data preprocessing, model building, and evaluation.' },
      { icon: 'ChevronRight', text: 'Work on Real-World AI Projects \u2013 Gain practical exposure with datasets, automation, and predictive modeling.' },
      { icon: 'ChevronRight', text: 'Soft-Skill Development \u2013 Improve problem-solving, critical thinking, and teamwork skills for the AI industry.' },
    ],
    offerTitle: 'What Do We Offer in **Machine Learning with Python** Course?',
    offerDescription: 'Our Machine Learning with Python course is designed to equip you with the essential skills to develop AI-powered solutions from scratch.',
    offerDetailText: 'Gain real-world expertise and industry-relevant AI skills with our expert-led training. From mastering Python libraries like NumPy, Pandas, Scikit-learn, and TensorFlow to working on real-time machine learning projects, we ensure you\'re job-ready.',
    ctaBannerTitle: 'Start Your **Machine Learning With Python** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'AI Agents Automation', slug: 'ai-agents-automation',
    shortDescription: 'Build LLM agents, tools, and workflows for real tasks.',
    icon: 'Bot', order: 2,
    heroTitle: 'What Will You Learn in AI Agents Automation?',
    heroSubtitle: 'Master agentic AI workflows and build intelligent automation systems.',
    whyChooseTitle: 'Why Choose Aiinfox for **AI Agents Automation**?',
    whyChooseDescription: '', whyChooseBadge: 'AI Agents Automation',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **AI Agents Automation** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **AI Agents Automation**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **AI Agents Automation** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **AI Agents Automation** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Mobile App Development', slug: 'mobile-app-development',
    shortDescription: 'Create high-quality mobile apps with modern stacks.',
    icon: 'Smartphone', order: 3,
    heroTitle: 'What Will You Learn in Mobile App Development?',
    heroSubtitle: 'Build native and cross-platform apps with modern frameworks.',
    whyChooseTitle: 'Why Choose Aiinfox for **Mobile App Development**?',
    whyChooseDescription: '', whyChooseBadge: 'Mobile App Development',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Mobile App Development** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Mobile App Development**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Mobile App Development** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Mobile App Development** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Artificial Intelligence with Python', slug: 'artificial-intelligence-with-python',
    shortDescription: 'Fundamentals of AI, search, NLP basics, and applied AI.',
    icon: 'Sparkles', order: 4,
    heroTitle: 'What Will You Learn in Artificial Intelligence with Python?',
    heroSubtitle: 'Explore AI fundamentals and build intelligent applications.',
    whyChooseTitle: 'Why Choose Aiinfox for **AI with Python**?',
    whyChooseDescription: '', whyChooseBadge: 'AI with Python',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **AI with Python** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **AI with Python**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **AI with Python** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **AI** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Python & Django Web', slug: 'python-django-web',
    shortDescription: 'Build robust backends and admin panels with Django.',
    icon: 'LaptopMinimal', order: 5,
    heroTitle: 'What Will You Learn in Python & Django Web?',
    heroSubtitle: 'Master backend development with Python and Django.',
    whyChooseTitle: 'Why Choose Aiinfox for **Python & Django**?',
    whyChooseDescription: '', whyChooseBadge: 'Python & Django Web',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Python & Django** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Python & Django**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Python & Django** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Python & Django** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Data Analytics with Python', slug: 'data-analytics-with-python',
    shortDescription: 'Data wrangling, visualization, and insights with Python.',
    icon: 'LineChart', order: 6,
    heroTitle: 'What Will You Learn in Data Analytics with Python?',
    heroSubtitle: 'Become a data analyst with hands-on Python skills.',
    whyChooseTitle: 'Why Choose Aiinfox for **Data Analytics**?',
    whyChooseDescription: '', whyChooseBadge: 'Data Analytics',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Data Analytics** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Data Analytics**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Data Analytics** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Data Analytics** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Generative AI Training', slug: 'generative-ai-training',
    shortDescription: 'Prompting, fine-tuning, and RAG with open-source models.',
    icon: 'Sparkles', order: 7,
    heroTitle: 'What Will You Learn in Generative AI Training?',
    heroSubtitle: 'Master GenAI techniques and build intelligent applications.',
    whyChooseTitle: 'Why Choose Aiinfox for **Generative AI**?',
    whyChooseDescription: '', whyChooseBadge: 'Generative AI',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Generative AI** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Generative AI**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Generative AI** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Generative AI** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'AWS Cloud Computing', slug: 'aws-cloud-computing',
    shortDescription: 'Architect, secure, and scale applications on AWS.',
    icon: 'Cloud', order: 8,
    heroTitle: 'What Will You Learn in AWS Cloud Computing?',
    heroSubtitle: 'Master AWS cloud services and architecture.',
    whyChooseTitle: 'Why Choose Aiinfox for **AWS**?',
    whyChooseDescription: '', whyChooseBadge: 'AWS Cloud',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **AWS** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **AWS**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **AWS Cloud Computing** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **AWS** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Azure Cloud Computing', slug: 'azure-cloud-computing',
    shortDescription: 'Deploy, manage, and scale applications on Microsoft Azure.',
    icon: 'Cloud', order: 9,
    heroTitle: 'What Will You Learn in Azure Cloud Computing?',
    heroSubtitle: 'Master Azure cloud services and enterprise deployments.',
    whyChooseTitle: 'Why Choose Aiinfox for **Azure**?',
    whyChooseDescription: '', whyChooseBadge: 'Azure Cloud',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Azure** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Azure**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Azure Cloud Computing** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Azure** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Advanced Executive Program in Cybersecurity', slug: 'advanced-executive-program-cybersecurity',
    shortDescription: 'Master cybersecurity fundamentals, ethical hacking, and security operations.',
    icon: 'Shield', order: 10,
    heroTitle: 'What Will You Learn in Cybersecurity?',
    heroSubtitle: 'Master cybersecurity concepts and ethical hacking techniques.',
    whyChooseTitle: 'Why Choose Aiinfox for **Cybersecurity**?',
    whyChooseDescription: '', whyChooseBadge: 'Cybersecurity',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Cybersecurity** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Cybersecurity**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Cybersecurity** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Cybersecurity** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'DevOps Master: Automation, Deployment & Monitoring', slug: 'devops-master-automation-deployment-monitoring',
    shortDescription: 'Master DevOps automation, CI/CD pipelines, and infrastructure monitoring.',
    icon: 'Settings', order: 11,
    heroTitle: 'What Will You Learn in DevOps?',
    heroSubtitle: 'Master DevOps automation and CI/CD pipelines.',
    whyChooseTitle: 'Why Choose Aiinfox for **DevOps**?',
    whyChooseDescription: '', whyChooseBadge: 'DevOps',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **DevOps** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **DevOps**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **DevOps** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **DevOps** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'QA Automation', slug: 'qa-automation',
    shortDescription: 'Master automated testing with Selenium, TestNG, and Cucumber frameworks.',
    icon: 'TestTube', order: 12,
    heroTitle: 'What Will You Learn in QA Automation?',
    heroSubtitle: 'Master automated testing frameworks and best practices.',
    whyChooseTitle: 'Why Choose Aiinfox for **QA Automation**?',
    whyChooseDescription: '', whyChooseBadge: 'QA Automation',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **QA Automation** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **QA Automation**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **QA Automation** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **QA Automation** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'GCP Fundamentals', slug: 'gcp-fundamentals',
    shortDescription: 'Deploy workloads and services on Google Cloud Platform.',
    icon: 'Layers', order: 13,
    heroTitle: 'What Will You Learn in GCP Fundamentals?',
    heroSubtitle: 'Master Google Cloud Platform services.',
    whyChooseTitle: 'Why Choose Aiinfox for **GCP**?',
    whyChooseDescription: '', whyChooseBadge: 'GCP',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **GCP** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **GCP**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **GCP** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **GCP** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Data Science with Python', slug: 'data-science-with-python',
    shortDescription: 'Statistics, visualization, and predictive modeling.',
    icon: 'FlaskConical', order: 14,
    heroTitle: 'What Will You Learn in Data Science?',
    heroSubtitle: 'Master data science with Python.',
    whyChooseTitle: 'Why Choose Aiinfox for **Data Science**?',
    whyChooseDescription: '', whyChooseBadge: 'Data Science',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Data Science** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Data Science**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Data Science** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Data Science** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'UI/UX Designing', slug: 'ui-ux-designing',
    shortDescription: 'Design systems, prototyping, and usability testing.',
    icon: 'PencilRuler', order: 15,
    heroTitle: 'What Will You Learn in UI/UX Designing?',
    heroSubtitle: 'Master design thinking and user experience.',
    whyChooseTitle: 'Why Choose Aiinfox for **UI/UX**?',
    whyChooseDescription: '', whyChooseBadge: 'UI/UX',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **UI/UX** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **UI/UX**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **UI/UX** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **UI/UX** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'MERN Full Stack', slug: 'mern-full-stack',
    shortDescription: 'End-to-end apps with MongoDB, Express, React, Node.',
    icon: 'Rocket', order: 16,
    heroTitle: 'What Will You Learn in MERN Full Stack?',
    heroSubtitle: 'Master full-stack development with MERN.',
    whyChooseTitle: 'Why Choose Aiinfox for **MERN**?',
    whyChooseDescription: '', whyChooseBadge: 'MERN Stack',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **MERN** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **MERN Full Stack**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **MERN** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **MERN** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'MEAN Stack Development', slug: 'mean-stack-development',
    shortDescription: 'Build full-stack apps with MongoDB, Express, Angular, Node.',
    icon: 'Code', order: 17,
    heroTitle: 'What Will You Learn in MEAN Stack?',
    heroSubtitle: 'Master MEAN stack development.',
    whyChooseTitle: 'Why Choose Aiinfox for **MEAN**?',
    whyChooseDescription: '', whyChooseBadge: 'MEAN Stack',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **MEAN** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **MEAN Stack**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **MEAN Stack** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **MEAN** Journey Today!',
    ctaButtonText: 'Join Now',
  },
  {
    site: 'lv', title: 'Digital Marketing & SEO', slug: 'digital-marketing-seo',
    shortDescription: 'SEO, SEM, analytics, and growth strategies.',
    icon: 'Globe', order: 18,
    heroTitle: 'What Will You Learn in Digital Marketing & SEO?',
    heroSubtitle: 'Master digital marketing strategies and SEO techniques.',
    whyChooseTitle: 'Why Choose Aiinfox for **Digital Marketing**?',
    whyChooseDescription: '', whyChooseBadge: 'Digital Marketing',
    leftFeatures: [], rightFeatures: [], benefitCards: [],
    benefitBadge: 'Develop new Skills', benefitTitle: 'Learn From Our **Digital Marketing** Training Institute',
    learnBadge: 'Beyond Technical Skills', learnTitle: 'What Will You Learn in **Digital Marketing**?',
    learnDescription: '', learnPoints: [],
    offerTitle: 'What Do We Offer in **Digital Marketing** Course?',
    offerDescription: '', offerDetailText: '',
    ctaBannerTitle: 'Start Your **Digital Marketing** Journey Today!',
    ctaButtonText: 'Join Now',
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  {
    site: 'lv', order: 1,
    name: 'Priyanka Kapoor',
    role: 'Full\u2011Stack Developer',
    quote: 'Before joining the MERN stack course, I had zero experience with full\u2011stack development. But thanks to Aiinfox, I now feel confident building real\u2011world web applications using MongoDB, Express.js, React, and Node.js.',
  },
  {
    site: 'lv', order: 2,
    name: 'Rahul Sharma',
    role: 'Data Analyst',
    quote: 'The data analytics program was incredibly practical. The mentors focused on projects and interview prep which helped me land my current role.',
  },
];

/* ------------------------------------------------------------------ */
/*  Site Settings (collection — one entry per site)                     */
/* ------------------------------------------------------------------ */

const SITE_SETTING = {
  site: 'lv',
  siteName: 'Aiinfox Tech',
  contactEmail: 'sales@aiinfox.com',
  contactPhone: '+91-7888513249',
  address: 'D-234, Phase 8B, Industrial Area, Sector 74, SAS Nagar, Punjab 160055',
  copyrightText: 'Copyright \u00a9 2025 Aiinfox. All Rights Reserved.',
  footerDescription: 'Aiinfox is a dedicated team of AI coders, designers, digital marketers and AI developers in Mohali, working to leave a mark in the field of Artificial Intelligence.',
};

/* ------------------------------------------------------------------ */
/*  Homepage (collection — one entry per site)                         */
/* ------------------------------------------------------------------ */

const HOMEPAGE = {
  site: 'lv',
  heroBadge: '100% Satisfaction Guarantee',
  heroTitle: 'Unlock Your Potential with Aiinfox Tech.',
  heroDescription: 'AIinfox Tech delivers expert-led courses in Web Development, Artificial Intelligence, Data Science, Cloud Computing, and more. Learn by doing with hands-on labs and real-world projects.',
  heroStats: [
    { label: 'In-Demand Courses', value: '20+' },
    { label: 'Certified Mentors & Trainers', value: '50+' },
  ],
  heroPrimaryCTA: { text: 'EXPLORE COURSES', link: '/programs' },
  heroSecondaryCTA: { text: '+91-7888513249', link: 'tel:+917888513249' },
  instructorsBadge: 'Instructors',
  instructorsTitle: 'Discover Top Instructors At Aiinfox',
  instructorsDescription: 'AIinfox Tech is a new-age training institute that transforms learners into industry-ready AI professionals.',
  instructorsStats: [
    { icon: 'BookOpen', title: '500+', subtitle: 'Hours Training' },
    { icon: 'Trophy', title: '50+', subtitle: 'Lessons' },
    { icon: 'GraduationCap', title: '100%', subtitle: 'Project Experience' },
    { icon: 'Users', title: '100%', subtitle: 'Learning Community' },
  ],
  coursesSectionBadge: 'Explore Our Courses',
  coursesSectionTitle: 'Learn In-Demand Skills. Build Real Projects. Launch Your Career.',
  coursesSectionDescription: 'Our industry-focused programs are crafted by experts to build practical, job-ready skills.',
  opportunitiesBadge: 'Why Choose Aiinfox For IT Industrial Training?',
  opportunitiesTitle: 'Explore Your Opportunities',
  opportunitiesDescription: 'Explore your opportunities with an institute built for outcomes\u2014not just lectures.',
  opportunityItems: [
    { icon: 'Award', title: 'Industry IT Skills', text: 'Learn professional industrial skills that help you grow and adapt yourself in the IT industry.' },
    { icon: 'Users', title: 'Experienced Tutors', text: 'Mentors with real-world experience eager to simplify concepts with practical insight.' },
    { icon: 'Cpu', title: 'Latest Technology', text: 'Train with the latest tools and stacks adopted by top tech companies.' },
    { icon: 'ShieldCheck', title: 'Flexibility & Scalability', text: 'Learn online or in-person at your own pace with flexible schedules.' },
    { icon: 'Rocket', title: 'Future Career Support', text: 'Personalized career guidance and placement assistance with a strong network.' },
    { icon: 'GraduationCap', title: 'Hands\u2011on Training', text: 'Work on mentor-led projects and strengthen your portfolio with real outcomes.' },
  ],
  browseBadge: 'Unique online courses',
  browseTitle: 'Browse By Courses',
  browseDescription: 'Join our artificial intelligence courses to gain hands\u2011on skills, work on real\u2011world projects, and receive job placement support.',
  browseFeaturedSlugs: [
    'ai-agents-automation',
    'mobile-app-development',
    'python-django-web',
    'data-analytics-with-python',
    'generative-ai-training',
  ],
  callbackTitle: 'Request a Call Back',
  callbackDescription: 'Need assistance or have questions?',
  universitiesSectionTitle: 'Students From Universities',
  universitiesSectionDescription: 'At Aiinfox Tech Institute, students join us from various universities to get the best industrial training.',
  testimonialsSectionTitle: 'What Our Students Say About Us',
};

/* ------------------------------------------------------------------ */
/*  Navigation (collection — one entry per site)                       */
/* ------------------------------------------------------------------ */

const NAVIGATION = {
  site: 'lv',
  mainMenu: [
    { label: 'Home', path: '/' },
    { label: 'About-Us', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Contact Us', path: '/contact' },
  ],
  footerResources: [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ],
  footerFeaturedCourses: [
    'machine-learning-with-python',
    'ai-agents-automation',
    'mobile-app-development',
    'generative-ai-training',
  ],
};

/* ------------------------------------------------------------------ */
/*  Main seed function                                                 */
/* ------------------------------------------------------------------ */

async function seed() {
  console.log(`\nSeeding Strapi at ${STRAPI_URL}...\n`);

  // 1. Courses
  console.log('--- Courses ---');
  for (const course of COURSES) {
    await createEntry('/courses', course);
  }

  // 2. Testimonials
  console.log('\n--- Testimonials ---');
  for (const t of TESTIMONIALS) {
    await createEntry('/testimonials', t);
  }

  // 3. Site Settings (collection type — one entry per site)
  console.log('\n--- Site Setting ---');
  await createEntry('/site-settings', SITE_SETTING);

  // 4. Homepage (collection type — one entry per site)
  console.log('\n--- Homepage ---');
  await createEntry('/homepages', HOMEPAGE);

  // 5. Navigation (collection type — one entry per site)
  console.log('\n--- Navigation ---');
  await createEntry('/navigations', NAVIGATION);

  console.log('\nSeed complete!\n');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
