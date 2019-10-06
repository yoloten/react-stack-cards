import styled, { keyframes } from "styled-components"
import * as React from "react"
import posed from "react-pose"

import objectSwitch from "./objectSwitch"

namespace Style {
    
    export const bgColor = ({ background, bgStatus }: TinderLike.Props) => bgStatus === "colors" ? background : ""
    export const clipPath = ({ pose, direction }: TinderLike.Props) => {
        return pose[0] === "out" && direction === "swipeFallTop" || direction === "swipeFallDown"
            ? "polygon(0 0, 100% 0%, 98% 100%, 2% 100%)" 
            : ""
    }
    export const transform = ({ direction }: TinderLike.Props) => direction === "swipeFallTop" 
        ? "top center" 
        : "bottom center"
    export const anim = ({ pose }: TinderLike.Props) => pose[0] === "out" ? fadeOut : ""
    export const liHeight = ({ height }: TinderLike.Props): string => height + "px"
    export const liWidth = ({ width }: TinderLike.Props): string => width + "px"
    export const bgImage = ({ background }: TinderLike.Props) => background
}

namespace TinderLike {  

    export interface Props {
        children: React.ReactNode
        [propName: string]: any
        className: string
        direction: string
        duration: number
        colors: string[]
        images: string[]
        height: string
        width: string
    }
    export interface State {
        stateOfContent: string
        content: string[]
        current: number
        list: any[]
    }
}

const cornersTransition = ({ duration }: TinderLike.Props) => ({
    stiffness: 500,
    type: "spring",
    delay: 150,
    duration,
})

const middleTransition = ({ direction }: TinderLike.Props): number => {

    return objectSwitch(direction, {
        default: ({ duration }: TinderLike.Props) => ({duration}),
        swipeCornerDownRight: cornersTransition,
        swipeCornerTopRight: cornersTransition,
        swipeCornerDownLeft: cornersTransition,
        swipeCornerTopLeft: cornersTransition,
    })
}

const Li = posed.div({
    init: {
        transition: ({ duration }: TinderLike.Props) => ({duration}),
        scale: ({ order }: TinderLike.Props): number => {
            return objectSwitch(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            })
        },
        y: ({ order, height }: TinderLike.Props): number => {
            const parsedHeight = Number.parseInt(height) / 10
            
            return objectSwitch(order, {
                0: parsedHeight * 2,
                1: parsedHeight,
                2: 0,
                3: 0,
                4: 0,
            })
        },
        opacity: 1,
        rotate: 0, 
        x: 0,
    },
    out: {
        transition: ({ duration }: TinderLike.Props) => ({ duration }),
        x: ({ direction }: TinderLike.Props): number => {

            return objectSwitch(direction, {
                swipeCornerDownLeft: -300,
                swipeCornerDownRight: 300,
                swipeCornerTopRight: 300,
                swipeCornerTopLeft: -300,
                swipeRightRotate: 200,
                swipeLeftRotate: -200,
                swipeThrowRight: 200,
                swipeThrowLeft: -200,
                swipeDownLeft: -70,
                swipeDownRight: 70,
                swipeTopLeft: -50,
                swipeTopRight: 50,
                swipeFallDown: 0,
                swipeRight: 200,
                swipeLeft: -200,
                swipeFallTop: 0,
                swipeDown: 0,
                swipeTop: 0,
            })
        },
        rotate: ({ direction }: TinderLike.Props): number => {

            return objectSwitch(direction, {

                swipeCornerDownLeft: -20,

                swipeCornerDownRight: 20,

                swipeCornerTopRight: 20,
                
                swipeCornerTopLeft: -20,

                swipeRightRotate: 15,

                swipeLeftRotate: -15,

                swipeDownRight: -15,

                swipeTopLeft: -20,

                swipeTopRight: 20,

                swipeDownLeft: 15,

                swipeFallDown: 0,

                swipeFallTop: 0,

                swipeRight: 2,

                swipeLeft: -2,

                swipeDown: 0,

                swipeTop: 0,
            })
        },
        rotateX: ({ direction }: TinderLike.Props): number => {

            return objectSwitch(direction, {

                swipeFallDown: 100,

                swipeFallTop: -100,
            })
        },
        scale: ({ direction }: TinderLike.Props): number => {

            return objectSwitch(direction, {

                swipeThrowRight: 0.001,

                swipeThrowLeft: 0.001,

                swipeThrowDown: 0.001,

                swipeThrowTop: 0.001,
            })
        },
        y: ({ direction }: TinderLike.Props): number => {

            return objectSwitch(direction, {

                swipeCornerDownRight: 150,

                swipeCornerTopRight: -150,

                swipeCornerTopLeft: -150,

                swipeCornerDownLeft: 150,

                swipeRightRotate: 80,

                swipeThrowRight: -50,

                swipeLeftRotate: 80,

                swipeDownRight: 300,

                swipeTopRight: -270,

                swipeThrowTop: -300,

                swipeThrowLeft: -50,

                swipeThrowDown: 300,

                swipeDownLeft: 300,

                swipeTopLeft: -270,

                swipeFallDown: 0,

                swipeFallTop: 0,

                swipeTop: -270,

                swipeDown: 200,

                swipeRight: 0,
                
                swipeLeft: 0,
            })
        },
        opacity: 0,
    },
    middle: {
        transition: middleTransition,
        opacity: 1,
        scale: 1,
        y: ({ height }: TinderLike.Props): number => {
            const parsedHeight = Number.parseInt(height) / 10
            return parsedHeight * 2
        },
        x: 0,
    },
    secondMiddle: {
        transition: middleTransition,
        scale: 0.95,
        opacity: 1,
        y: ({ height }: TinderLike.Props): number => {
            const parsedHeight = Number.parseInt(height) / 10
            return parsedHeight 
        },
        x: 0,
    },
    in: {
        transition: cornersTransition,
        scale: 0.90,
        opacity: 1,
        y: 0,
        x: 0,
    },
})

const StyledUl = styled.div`
  height: ${Style.liHeight};
  width: ${Style.liWidth}; 
  position: relative;
  z-index: -1;
`
const fadeOut = keyframes`
  0% opacity: 1;
  25% opacity: 0.8;
  100% opacity: 0;
`

const StyledLi = styled(Li)`
  background: ${Style.bgColor};
  background-image: url(${Style.bgImage});
  transform-origin: ${Style.transform};
  animation: 1s ${Style.anim} ease-out;
  clip-path: ${Style.clipPath};
  height: ${Style.liHeight};
  width: ${Style.liWidth};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  list-style: none;
  z-index: -1;
  left: 0;
  top: 0;
`
 
export class TinderLikeCard extends React.Component<TinderLike.Props, TinderLike.State> {

    public state: TinderLike.State = {
        stateOfContent: "",
        content: [],
        current: 0,
        list: [],
    }

    public componentDidMount() {
        if (this.props.images === undefined) {
           this.firstMount(this.props.colors)
           this.setState({ stateOfContent: "colors" })
        } else {
            this.firstMount(this.props.images)
            this.setState({ stateOfContent: "images" })
        }
    }

    public firstMount = (props: string[]) => {
        if (this.state.list.length === 0 && props !== undefined) {
            const newList = this.state.list
            for (let i = 0; i < 3; i++) {
                newList.push({
                    val: props[i],
                    out: "",
                    in: "",
                    middle: "",
                })
            }

            const newContent = props.slice(3)
            this.setState({ list: newList, content: newContent })
        }
    }

    public swipe = () => {

        const { current, list } = this.state 
        const newList = this.state.list
        const currentContent = this.state.content

        newList.push({
            val: currentContent[0],
            out: "",
            in: "in",
            middle: "",
        })

        newList[current].out = "out"

        if (newList[current].out === "out") {
            newList[current].middle = ""
            newList[current + 1].middle = "middle"
            newList[current + 2].middle = "secondMiddle"
        }

        newList[list.length - 2].in = ""

        this.setState({ 
            list: newList, 
            content: currentContent.slice(1),
            current: this.state.current += 1,  
        })
    }

    public render() {

        const { list } = this.state
        const props = this.props

        const newList = !list.length ? "" : list.map((card, key) => (
            <StyledLi
                pose={[card.out, card.out2, card.middle, card.in]}
                bgStatus={this.state.stateOfContent}
                direction={props.direction}
                duration={props.duration}
                height={props.height}
                background={card.val}
                width={props.width}
                order={key}
                key={key}
            >
            {Array.isArray(props.children) ? props.children[key] : props.children}
            </StyledLi>
        )).reverse()

        return (
            <StyledUl 
                className={props.className} 
                height={this.props.height}
                width={this.props.width} 
            >
                {newList}
            </StyledUl>
        )
    }
}

export default TinderLikeCard
