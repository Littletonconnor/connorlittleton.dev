import wealthfrontLogo from '../images/logos/wealthfront.svg'
import cienaLogo from '../images/logos/ciena.svg'

const RESUME = [
  {
    company: 'Wealthfront',
    title: 'Software Engineer III',
    logo: wealthfrontLogo,
    className: 'h-6 w-6',
    start: '2021',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Ciena',
    className: 'h-7 w-7',
    title: 'Software Engineer II',
    logo: cienaLogo,
    start: '2019',
    end: '2021',
  },
]

const PROJECTS = [
  {
    name: 'Shortly',
    description: 'An easy to use link shortener that uses Next.js middleware',
    link: {
      href: 'https://github.com/Littletonconnor/shortly',
      label: 'github.com',
    },
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },
  {
    name: 'Web Optimizer',
    description: 'A CLI with sensible defaults for optimizing images and svgs',
    link: {
      href: 'https://github.com/Littletonconnor/web-optimizer',
      label: 'github.com',
    },
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    name: 'Weather App',
    description: 'TODO: A fun Weather App using a design I found off dribble.',
    link: {
      href: 'https://github.com/Littletonconnor/weather-app',
      label: 'github.com',
    },
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
]

export { RESUME, PROJECTS }
