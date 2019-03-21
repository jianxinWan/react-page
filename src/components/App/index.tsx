import * as React from 'react'
import * as html2canvas from 'html2canvas'

import ShowPic from './components/showPic'

import './index.less'

interface Props {}

interface html2canvas {
  allowTaint?: boolean
  async?: boolean
}

interface State {
  shotImgUrl: string
  showPicComponent?: boolean
  backgroundColor?: String
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      shotImgUrl: '',
      showPicComponent: false,
      backgroundColor: 'red',
    }
  }

  takeScreenshot = () => {
    const config: html2canvas = {
      allowTaint: true,
    }
    html2canvas(document.body, config).then((canvas: HTMLCanvasElement) => {
      // Export the canvas to its data URI representation
      console.log(canvas)
      const base64image = canvas.toDataURL('image/png')
      this.setState(
        {
          shotImgUrl: base64image,
          showPicComponent: true,
        },
        () => {
          console.log(Object.prototype.toString.call(base64image))
        },
      )
    })
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({
        showPicComponent: false,
      })
    })
  }

  render() {
    const { shotImgUrl, showPicComponent }: any = this.state
    return (
      <div className="root">
        <div className="view">{/* <input type="button" value="截图" onClick={this.takeScreenshot}/> */}</div>
        <p>哈哈哈哈哈哈</p>
        <div className="shot">
          <i className="iconfont icon-xiangji" onClick={this.takeScreenshot} />
        </div>
        {showPicComponent && <ShowPic imgUrl={shotImgUrl} />}
      </div>
    )
  }
}

export default App
