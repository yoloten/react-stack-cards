import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Select from 'react-select'

import StackCard from '../../lib/StackCard'
import TinderLikeCard from '../../lib/TinderLikeCard'
import ToggleCard from '../../lib/ToggleCard'

const options = [
  { value: 'swipeRight', label: 'swipeRight' },
  { value: 'swipeLeft', label: 'swipeLeft' },
  { value: 'swipeRightRotate', label: 'swipeRightRotate' },
  { value: 'swipeLeftRotate', label: 'swipeLeftRotate' },
  { value: 'swipeDown', label: 'swipeDown' },
  { value: 'swipeDownLeft', label: 'swipeDownLeft' },
  { value: 'swipeDownRight', label: 'swipeDownRight' },
  { value: 'swipeTop', label: 'swipeTop' },
  { value: 'swipeTopLeft', label: 'swipeTopLeft' },
  { value: 'swipeTopRight', label: 'swipeTopRight' },
  { value: 'swipeFallDown', label: 'swipeFallDown' },
  { value: 'swipeFallTop', label: 'swipeFallTop' },
  { value: 'swipeThrowRight', label: 'swipeThrowRight' },
  { value: 'swipeThrowLeft', label: 'swipeThrowLeft' },
  { value: 'swipeThrowTop', label: 'swipeThrowTop' },
  { value: 'swipeThrowDown', label: 'swipeThrowDown' },
  { value: 'swipeCornerTopRight', label: 'swipeCornerTopRight' },
  { value: 'swipeCornerTopLeft', label: 'swipeCornerTopLeft' },
  { value: 'swipeCornerDownLeft', label: 'swipeCornerDownLeft' },
  { value: 'swipeCornerDownRight', label: 'swipeCornerDownRight' },
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      direction: ""
    }
  }
  
  onSelect(elem){
    this.setState({direction: elem.value })
  }
  
    render() {
        const first =
        "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=backlit-clouds-friends-853168.jpg&fm=jpg";
      const second =
        "https://images.pexels.com/photos/842339/pexels-photo-842339.jpeg?cs=srgb&dl=black-and-white-city-crosswalk-842339.jpg&fm=jpg";
      const third =
        "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?cs=srgb&dl=backlit-bright-dawn-697243.jpg&fm=jpg";
      const fourth =
        "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?cs=srgb&dl=backlit-bright-dawn-697243.jpg&fm=jpg";
      const arr = [first, second, third, fourth];
      const colors =  [
        "#c9c4bf",
        "#252526",
        "#2b0eed",
        "#f95c5c",
        "#5cf9e4",
        "#4286f4",
        "#ee42f4",
        "#e2f442",
        "#86f441",
      ]
      // directions: openBottomLeft, openBottomRight, openTopRight, openTopLeft
      // fanOut, randmRotation, sideSlide, sideGrid(?), peekAboo, previewGrid(?)
      // verticalSpread, elasticSpread, fan, queue
        return (
            <div>
                <ToggleCard 
                  colors={colors.slice(0, 4)}
                  width="350"
                  height="300"
                  direction="queue"
                />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"));