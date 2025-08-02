export interface NavItem {
  id: string
  label: string
  href: string
  children?: NavItem[]
}

export interface Course {
  id: string
  title: string
  category: string
  image: string
  href: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  title: string
  content: string
  avatar: string
}

export interface Brand {
  id: string
  name: string
  logo: string
}
