import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Select from 'react-select'

import StackCard from '../../lib/StackCard'
import TinderLikeCard from '../../lib/TinderLikeCard'
import ToggleCard from '../../lib/ToggleCard'
import './index.css'
import checked from "./checked.png"
import github from "./github-logo.png"

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
      directionTinder: "",
      isOpen: false
    }
    this.Tinder = null
  }
  
  onSelect(elem) {
    this.setState({directionToggle: elem.value })
  }

  onSelectTinder(elem) {
    this.setState({directionTinder: elem.value })
  }
  
  onToggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  onTinder() {
    this.Tinder.click()
  }

    render() {
        const first =
        "https://www.worldatlas.com/r/w728-h425-c728x425/upload/46/cb/e1/shutterstock-252338818.jpg";
      const second =
        "https://draxe.com/wp-content/uploads/2018/12/KetoFruitHeader.jpg";
      const third =
        "https://media.mnn.com/assets/images/2017/03/strawberries-basket.jpg.653x0_q80_crop-smart.jpg";
      const fourth =
        "https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg";
      const arr = [first, second, third, fourth];
      const colors =  [
        "#c9c4bf",
        "#2b0eed",
        "#f95c5c",
        "#5cf9e4",
        "#4286f4",
        "#ee42f4",
        "#e2f442",
        "#86f441",
        "#252526",
        "#ee42f4",
        "#e2f442",
        "#86f441",
        "#252526",
      ]
  
        return (
          <div className="main">

            <div className="header">
              <div className="headerIntro">
                <h1>React Stack Cards</h1>
                <h2>Collection of animated cards. Inspired by Tympanus.net</h2>
              </div>
              <div className="headerNpm">
                <p className="howToInst">How to install</p>
                <div className="install">
                  <p>npm i -S react-stack-cards</p>
                  <p className="yarn"># or yarn</p>
                  <p>yarn add react-stack-cards</p>
                </div>
              </div>
            </div>

            <div className="cards">

              <div  className="toggleDiv">
                <p className="animationName"><span>{"<"}</span>ToggleCard<span>{" />"}</span></p>
                <ToggleCard 
                  images={arr}
                  width="350"
                  height="240"
                  direction="previewGrid"
                  className="toggle"
                  isOpen={this.state.isOpen}
                  onClick={()=> alert("Hello")}
                />
                <button className="btnToggle" onClick={this.onToggle.bind(this)}><img src={checked} alt=""/></button>
              </div>

              <div className='tinderLikeDiv'>
                <p className="animationName"><span>{"<"}</span>TinderCard<span>{" />"}</span></p>
                <TinderLikeCard
                  images={arr}
                  width="350"
                  height="240"
                  direction="swipeThrowDown"
                  ref={(node) => this.Tinder = node}
                  className="tinder"
                />
                <button className="btnTinder" onClick={this.onTinder.bind(this)}><img src={checked} alt=""/></button>
              </div>

              <div className="stack">
              <p className="animationName"><span>{"<"}</span>StackCard<span>{" />"}</span></p>
                <StackCard
                  images={arr}
                  color={"#f95c5c"}
                  width="350"
                  height="240"
                  direction="bottomLeft"
                  onClick={()=> alert("Hello")}
                />
              </div>
            </div>

            <div className="footer">
              <p className="powered">Powered by <b>Rustam Sahatov</b></p>
              <div className="link">
                <img src={github} alt=""/>
                <a href="#" className="footerA">Project on Github</a>
              </div>
            </div>        

          </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"));