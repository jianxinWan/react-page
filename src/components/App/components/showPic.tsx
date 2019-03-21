import * as React from 'react'
import './showPic.less'

export interface Props {
  imgUrl?: string
}

class ShowPic extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    const { imgUrl } = this.props
    return (
      <div className="show-pic-wrapper">
        <img src={imgUrl} />
      </div>
    )
  }
}

export default ShowPic
