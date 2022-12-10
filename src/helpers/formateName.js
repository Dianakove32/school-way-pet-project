export const formateName = (fullName, format = 'F I O') => {
  if (!fullName) return ''
  return format
    .replace(/\bF\b/, fullName.split(' ')[0] ? fullName.split(' ')[0] : '')
    .replace(/\bI\b/, fullName.split(' ')[1] ? fullName.split(' ')[1] : '')
    .replace(/\bO\b/, fullName.split(' ')[2] ? fullName.split(' ')[2] : '')
}