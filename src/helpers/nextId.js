export const nextId = (arr, type = 'id') => arr.reduce((res, current) => Math.max(res, current[type]), -1) + 1