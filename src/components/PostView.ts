import AbstractView from './AbstractView'

export default class extends AbstractView {
  postId: string
  constructor(params) {
    super(params)
    this.postId = params.id
    this.setTitle('Viewing Post')
  }

  async getHtml() {
    const strElement = `
    <h1>Post</h1>
    <p>You are viewing post #${this.postId}.</p>
    `
    const htmlElement = this.stringToHTML(strElement)
    return htmlElement
  }
}
