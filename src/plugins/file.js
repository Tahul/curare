export const toDataURL = (url) =>
  new Promise((resolve) => {
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
      let reader = new FileReader()
      reader.onloadend = function () {
        resolve(reader.result)
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  })

export const base64MimeType = (encoded) => {
  let result = null

  if (typeof encoded !== 'string') {
    return result
  }

  let mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)

  if (mime && mime.length) {
    result = mime[1]
  }

  return result
}
