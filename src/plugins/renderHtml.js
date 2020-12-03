import { createElement } from 'react'

export default (tag, rawHTML) =>
  createElement(tag, { dangerouslySetInnerHTML: { __html: rawHTML } })
