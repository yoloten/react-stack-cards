import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Select from 'react-select'

import StackCard from '../../lib/StackCard'
import TinderLikeCard from '../../lib/TinderLikeCard'
import ToggleCard from '../../lib/ToggleCard'
import './index.css'

const optionsTinder = [
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

const optionsToggle = [
  { value: 'openBottomLeft', label: 'openBottomLeft' },
  { value: 'openBottomRight', label: 'openBottomRight' },
  { value: 'openTopRight', label: 'openTopRight' },
  { value: 'openTopLeft', label: 'openTopLeft' },
  { value: 'fanOut', label: 'fanOut' },
  { value: 'randmRotation', label: 'randmRotation' },
  { value: 'sideSlide', label: 'sideSlide' },
  { value: 'sideGrid', label: 'sideGrid' },
  { value: 'peekAboo', label: 'peekAboo' },
  { value: 'previewGrid', label: 'previewGrid' },
  { value: 'verticalSpread', label: 'verticalSpread' },
  { value: 'elasticSpread', label: 'elasticSpread' },
  { value: 'fan', label: 'fan' },
  { value: 'queue', label: 'queue' },
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      directionToggle: "",
      directionTinder: "",
    }
    this.Toggle = null
    this.Tinder = null
  }
  
  onSelect(elem) {
    this.setState({directionToggle: elem.value })
  }

  onSelectTinder(elem) {
    this.setState({directionTinder: elem.value })
  }
  
  onToggle() {
    this.Toggle.toggleMe()
  }

  onTinder() {
    this.Tinder.click()
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
  
        return (
            <div className="flex">
              <div  className="toggleDiv">

              <ToggleCard 
                  colors={colors.slice(0, 4)}
                  width="300"
                  height="200"
                  direction={this.state.directionToggle}
                  ref={(node) => this.Toggle = node}
                  className="toggle"
                >
                  {["This", "Is", "ToggleLike", "Animations"].map((i) => (
                    <div>{i}</div>
                  ))}
                </ToggleCard>
                
                <Select
                  value={this.state.directionToggle} 
                  onChange={this.onSelect.bind(this)}
                  options={optionsToggle}
                  placeholder={this.state.directionToggle === "" ? "selectToggle" : this.state.directionToggle}
                  className="selectToggle"
                />

                <button className="btnToggle" onClick={this.onToggle.bind(this)}>Toggle</button>
              
              </div>

              <div className='tinderLikeDiv'>

                <Select
                  value={this.state.directionTinder} 
                  onChange={this.onSelectTinder.bind(this)}
                  options={optionsTinder}
                  placeholder="Select Tinder"
                  className="selectTinder"
                />

                <TinderLikeCard
                  colors={colors}
                  width="300"
                  height="200"
                  direction={this.state.directionTinder}
                  ref={(node) => this.Tinder = node}
                >
                  {["This", "Is", "TinderLike", "Animations"].map((i) => (
                    <div>{i}</div>
                  ))}
                </TinderLikeCard>

                <button className="btnTinder" onClick={this.onTinder.bind(this)}>Press</button>
              
              </div>

              <div className="stack">
                <StackCard
                  color={"#f95c5c"}
                  width="300"
                  height="200"
                >
                  <h2>This is stack Animations</h2>
                </StackCard>
              </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"));