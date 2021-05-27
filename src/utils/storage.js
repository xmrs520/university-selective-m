/**
 * 本地存储封装模块
 */
export const getItem = (name) => {
  const data = window.sessionStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

export const setItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(name, value)
}

export const removeItem = (name) => {
  window.sessionStorage.removeItem(name)
}
