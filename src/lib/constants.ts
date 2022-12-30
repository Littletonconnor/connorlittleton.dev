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

export { RESUME }
