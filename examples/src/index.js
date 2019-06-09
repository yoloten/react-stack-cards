import React, { Component } from 'react'
import ReactDom from 'react-dom'
import StackCard from '../../lib/StackCard'

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
                <StackCard
                    duration={500}
                    direction={'topLeft'}
                    color={"#4286f4"}
                    onClick={this.onLol}
                    width={250}
                    images={arr}
                    height={200}
                >
                    <h1>Hello</h1>
                </StackCard>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"));