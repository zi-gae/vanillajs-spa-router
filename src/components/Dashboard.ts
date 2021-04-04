import AbstractView from './AbstractView'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Dashboard')
  }

  async getHtml() {
    const strElement = `
    <h1>Welcome back, Dom</h1>
    <p>
        Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
    </p>
    <p>
        <a href="/posts/123" data-link>View recent posts</a>.
    </p>
`

    const htmlElement = this.stringToHTML(strElement)
    return htmlElement
  }

  render() {
    return this.getHtml()
  }
}
