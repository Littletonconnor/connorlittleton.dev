function clamp(n: number, a: number, b: number) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(n, min), max)
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function setProperty(property: any, value: any) {
  document.documentElement.style.setProperty(property, value)
}

function removeProperty(property: any) {
  document.documentElement.style.removeProperty(property)
}

const environment = {
  isDev() {
    return process.env.NODE_ENV !== 'production'
  },
  isProd() {
    return process.env.NODE_ENV === 'production'
  },
  isTest() {
    return process.env.NODE_ENV === 'test'
  },
}

export { clamp, formatDate, setProperty, removeProperty, environment }
