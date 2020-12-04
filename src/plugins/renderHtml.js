import { createElement } from 'react'

const renderHtml = (tag, rawHTML) =>
  createElement(tag, { dangerouslySetInnerHTML: { __html: rawHTML } })

export default renderHtml
