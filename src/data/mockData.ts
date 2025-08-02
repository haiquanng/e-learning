import type { NavItem, Course, Testimonial, Brand } from '@/types'

const navigation: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'courses',
    label: 'Courses',
    href: '/courses',
    children: [
      { id: 'technology', label: 'Technology', href: '/courses/technology' },
      { id: 'design', label: 'Design', href: '/courses/design' },
      {
        id: 'intelligence',
        label: 'Intelligence',
        href: '/courses/intelligence',
      },
      { id: 'it', label: 'Information Tech', href: '/courses/it' },
      {
        id: 'machine-learning',
        label: 'Machine Learning',
        href: '/courses/machine-learning',
      },
    ],
  },
  {
    id: 'pages',
    label: 'Pages',
    href: '/pages',
  },
  {
    id: 'app',
    label: 'App',
    href: '/app',
  },
]

const features = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-id-card-icon lucide-id-card"><path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>',
    title: 'Administrator App',
    description: 'Manage the entire site, the students, the instructors and the store.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clapperboard-icon lucide-clapperboard"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
    title: 'Instructor App',
    description: 'Create courses, manage students, import questions and get reports',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-icon lucide-laptop"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"/><path d="M20.054 15.987H3.946"/></svg>',
    title: 'Student App',
    description: 'Easy access to enrolled courses. Pursue courses, join meetings in TV.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-columns3-cog-icon lucide-columns-3-cog"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="m14.3 19.6 1-.4"/><path d="M15 3v7.5"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m16.8 15.3-.4-1"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m20.7 16.8 1-.4"/><path d="m21.7 19.4-.9-.3"/><path d="M9 3v18"/><circle cx="18" cy="18" r="3"/></svg>',
    title: 'Custom Features',
    description: 'All Wplms modules in the App. Conferencing, Calendars.',
  },
]

const courses: Course[] = [
  {
    id: 'software-training',
    title: 'Software training reloaded',
    category: 'Information Tech / Machine Learning / Technology',
    image: '/course1.png',
    href: '/course/software-training-reloaded',
  },
  {
    id: 'data-mining',
    title: 'Data mining',
    category: 'Data',
    image: '/course2.png',
    href: '/course/data-mining',
  },
  {
    id: 'design-dynamics',
    title: 'Design Dynamics',
    category: 'Design / Information Tech',
    image: '/course3.png',
    href: '/course/design-dynamics',
  },
  {
    id: 'color-psychology',
    title: 'Understanding Color Psychology',
    category: 'Design',
    image: '/course4.png',
    href: '/course/understanding-color-psychology',
  },
  {
    id: 'minimalist-design',
    title: 'Impact of a Minimalist Design',
    category: 'Design',
    image: '/course6.png',
    href: '/course/minimalist-design',
  },
  {
    id: 'machine-learning-tools',
    title: 'Machine Learning Tools',
    category: 'Intelligence / Technology',
    image: '/course7.png',
    href: '/course/machine-learning-tools',
  },
]

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'JP Mcgraw',
    company: 'ABC Inc.',
    title: 'A must for trainers',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered...',
    avatar: '/instructor1.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Martha Penn',
    company: 'ABC Inc.',
    title: 'Great platform for low cost courses',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered...',
    avatar: '/instructor2.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Mikhail',
    company: 'CEO, FinTech',
    title: 'Quality hands on training tool',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered...',
    avatar: '/instructor3.jpg',
  },
]

const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Brand 1',
    logo: '/brand-1.png',
  },
  {
    id: 'brand-2',
    name: 'Brand 2',
    logo: '/brand-2.png',
  },
  {
    id: 'brand-3',
    name: 'Brand 3',
    logo: '/brand-3.png',
  },
  {
    id: 'brand-4',
    name: 'Brand 4',
    logo: '/brand-4.png',
  },
]

const siteData = {
  features: [
    {
      id: 'feature-1',
      icon: '🚀',
      title: 'Easy to Use',
      description: 'Simple interface and intuitive navigation.',
    },
    {
      id: 'feature-2',
      icon: '💡',
      title: 'Innovative',
      description: 'Cutting-edge technology for modern learning.',
    },
    {
      id: 'feature-3',
      icon: '🔒',
      title: 'Secure',
      description: 'Ensuring data privacy and security.',
    },
    {
      id: 'feature-4',
      icon: '🌐',
      title: 'Accessible',
      description: 'Available on all devices, anywhere, anytime.',
    },
  ],
  courses: [
    {
      id: 'course-1',
      title: 'Web Development Fundamentals',
      category: 'Technology',
      image: '/placeholder.svg?height=460&width=768&text=Web+Dev',
      href: '/course/web-dev',
      instructor: 'John Doe',
      rating: 4.5,
      students: 1200,
      price: 49,
    },
    {
      id: 'course-2',
      title: 'Graphic Design Basics',
      category: 'Design',
      image: '/placeholder.svg?height=460&width=768&text=Graphic+Design',
      href: '/course/graphic-design',
      instructor: 'Jane Smith',
      rating: 4.8,
      students: 850,
      price: 39,
    },
    {
      id: 'course-3',
      title: 'Data Science Essentials',
      category: 'Intelligence',
      image: '/placeholder.svg?height=460&width=768&text=Data+Science',
      href: '/course/data-science',
      instructor: 'David Lee',
      rating: 4.2,
      students: 600,
      price: 59,
    },
  ],
}

const footerSections = [
  {
    title: 'About Company',
    links: [
      { label: 'Register', href: '/register' },
      { label: 'Activate', href: '/activate' },
      { label: 'All Courses', href: '/all-courses' },
      { label: 'Groups Directory', href: '/groups-directory' },
      { label: 'Members Directory', href: '/members-directory' },
    ],
  },
  {
    title: 'Top Courses',
    links: [
      { label: 'Design Dynamics', href: '/course/design-dynamics' },
      { label: 'Internet of Things Security', href: '/course/iot-security' },
      { label: 'Deep Virtual Reality', href: '/course/deep-virtual-reality' },
      { label: 'Artificial Intelligence', href: '/course/artificial-intelligence' },
      { label: 'Machine Learning Tools', href: '/course/machine-learning-tools' },
    ],
  },
]
export { navigation, features, courses, testimonials, brands, siteData, footerSections }
