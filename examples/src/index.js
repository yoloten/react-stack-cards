import React, { Component } from 'react'
import ReactDom from 'react-dom'
import StackCard from '../../lib/StackCard'
import TinderLikeCard from '../../lib/TinderLikeCard'

class App extends Component {
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
        return (
            <div>
                
                <TinderLikeCard/>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"));