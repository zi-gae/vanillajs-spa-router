import AbstractView from './AbstractView'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Posts')
  }

  async getHtml() {
    const strElement = `
    <h1>Posts</h1>
    <p>You are viewing the posts!</p>
`
    const htmlElement = this.stringToHTML(strElement)
    return htmlElement
  }
}
