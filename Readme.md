# React-Stack-Cards

Collection of stack card effects exclusively for React that's perfect for galleries and preview grids. Inspired by ideas from tympanus.net. 
See the demo [demo](https://yoloten.github.io/react-stack-cards/

Feautures: 

*Animations on hover, swipe and toggle
*Swipe animations allow you to work with big amount of images and colors
*Flexible settings like adding elements into the cards, change duration of animation and etc.
*Effects actually look awesome :blush:

Available components:
*'ToggleCard'
*'TinderLikeCard'
*'StackCard'

## Installation

You can install react-card-effects from npm

```
npm i -S react-stack-cards
```
Or use yarn

```
yarn add react-stack-cards
```

## Simple usage

```javascript
import TinderLikeCard from 'react-card-effects'

class Example extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      directionTinder: "swipeCornerDownRight"
    }
    this.Tinder = null
  }
  
  onTinderSwipe() {
    this.Tinder.swipe()
  }

  render() {
    const arr = [first, second, third, fourth]
    const numbers = [0, 1, 2, 3]
    return (
        <TinderLikeCard
            images={arr}
            width="350"
            height="250"
            direction={this.state.directionTinder}
            duration={400}
            ref={(node) => this.Tinder = node}
            className="tinder"
        >
            { numbers.map( i => <div>{i}</div> )}
        </TinderLikeCards>
    );
  }
}

```
##Props

Common props for all three components:

*'children' - allows to add children elements (React.Element)
*'className' - apply a className to the control (string)
*'direction' - select animation type (string)
*'duration' - set duration of animation (number)
*'images' - array of images to set on the background (array of strings)
*'height' - height of the card (string)
*'width' - width of the card (string)

Special props for 'TinderLikeCard':

*'colors' - array of colors to set on the background (array of strings)

Special props for 'ToggleCard':

*'colors' - array of colors to set on the background (array of strings)
*'onMouseEnter' - occurs when the mouse pointer is moved onto an element
*'onMouseLeave' - occurs when the mouse pointer is moved out of an element
*'onClick' - occurs when the user clicks on an element
*'isOpen' - allows you to animate component (boolean)

Special props for 'StackCard':
*'color' - color to set on the background (string)
*'onMouseEnter' - occurs when the mouse pointer is moved onto an element
*'onMouseLeave' - occurs when the mouse pointer is moved out of an element
*'onClick' - occurs when the user clicks on an element


## License
[MIT](https://choosealicense.com/licenses/mit/)