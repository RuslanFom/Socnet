import ReactDOM from "react-dom"
import SocialJsApp from "./App"


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialJsApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})