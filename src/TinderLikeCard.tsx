import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import styled, { keyframes } from "styled-components"
import objectSwitch from "./objectSwitch"

namespace TinderLike {
    export interface Props {
        duration: number
        direction: string
        colors: string[]
        images: string[]
        // onClick: () => void
        width: string
        height: string
        className: string
        children: React.ReactNode
        [propName: string]: any
    }
    export interface State {
        list: any[]
        content: string[]
        current: number
        stateOfContent: string
    }
}

const Li = posed.li({
    init: {
        opacity: 1,
        x: 0,
        y: ({ order }: TinderLike.Props): number => {
            return objectSwitch(order, {
                0: 60,
                1: 40,
                2: 20,
                3: 20,
                4: 10,
            })
        },
        scale: ({ order }: TinderLike.Props): number => {
            return objectSwitch(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            })
        },
        rotate: 0,
        transition: ({ duration }: TinderLike.Props) => ({duration}),
    },
    out: {
        
        y: ({ direction }: TinderLike.Props): number => {
            return objectSwitch(direction, {
                swipeRightRotate: 80,
                swipeLeftRotate: 80,
                swipeDown: 200,
                swipeDownLeft: 300,
                swipeDownRight: 300,
                swipeRight: 0,
                swipeLeft: 0,
                swipeTop: -270,
                swipeTopLeft: -270,
                swipeTopRight: -270,
                swipeFallDown: 0,
                swipeFallTop: 0,
                swipeThrowTop: -300,
                swipeThrowRight: -50,
                swipeThrowLeft: -50,
                swipeThrowDown: 300,
                swipeCornerTopRight: -150,
                swipeCornerTopLeft: -150,
                swipeCornerDownLeft: 150,
                swipeCornerDownRight: 150,
            })
        },
        transition: ({ duration }: TinderLike.Props) => ({ 
            duration, 
            delay: 100,
            type: "spring",
            stiffness: 100,
        }),
        x: ({ direction }: TinderLike.Props): number => {
            return objectSwitch(direction, {
                swipeRightRotate: 200,
                swipeLeftRotate: -200,
                swipeDown: 0,
                swipeDownLeft: -70,
                swipeDownRight: 70,
                swipeRight: 200,
                swipeLeft: -200,
                swipeTop: 0,
                swipeTopLeft: -50,
                swipeTopRight: 50,
                swipeFallDown: 0,
                swipeFallTop: 0,
                swipeThrowRight: 200,
                swipeThrowLeft: -200,
                swipeCornerTopRight: 300,
                swipeCornerTopLeft: -300,
                swipeCornerDownLeft: -300,
                swipeCornerDownRight: 300,
            })
        },
        rotate: ({ direction }: TinderLike.Props): number => {
            return objectSwitch(direction, {
                swipeRightRotate: 15,
                swipeLeftRotate: -15,
                swipeDown: 0,
                swipeRight: 2,
                swipeLeft: -2,
                swipeDownLeft: 15,
                swipeDownRight: -15,
                swipeTop: 0,
                swipeTopLeft: -20,
                swipeTopRight: 20,
                swipeFallDown: 0,
                swipeFallTop: 0,
                swipeCornerTopRight: 20,
                swipeCornerTopLeft: -20,
                swipeCornerDownLeft: -20,
                swipeCornerDownRight: 20,
            })
        },
        opacity: 0,
        rotateX: ({ direction }: TinderLike.Props): number => {
            return objectSwitch(direction, {
                swipeFallDown: 100,
                swipeFallTop: -100,
            })
        },
        scale: ({ direction }: TinderLike.Props): number => {
            return objectSwitch(direction, {
                swipeThrowTop: 0.001,
                swipeThrowRight: 0.001,
                swipeThrowLeft: 0.001,
                swipeThrowDown: 0.001,
            })
        },
        
    },
    middle: {
        opacity: 1,
        x: 0,
        y: 60,
        transition: ({ direction }: TinderLike.Props): number => {
            const cornersTransition = ({ duration }: TinderLike.Props) => ({
                duration,
                type: "spring",
                stiffness: 500,
                delay: 150,
            })
            return objectSwitch(direction, {
                swipeCornerTopRight: cornersTransition,
                swipeCornerTopLeft: cornersTransition,
                swipeCornerDownLeft: cornersTransition,
                swipeCornerDownRight: cornersTransition,
                default: ({ duration }: TinderLike.Props) => ({duration}),
            })
        },
        scale: 1,
    },
    secondMiddle: {
        opacity: 1,
        x: 0,
        y: 40,
        transition: ({ direction }: TinderLike.Props): number => {
            const cornersTransition = ({ duration }: TinderLike.Props) => ({
                duration,
                type: "spring",
                stiffness: 500,
                delay: 150,
            })
            return objectSwitch(direction, {
                swipeCornerTopRight: cornersTransition,
                swipeCornerTopLeft: cornersTransition,
                swipeCornerDownLeft: cornersTransition,
                swipeCornerDownRight: cornersTransition,
                default: ({ duration }: TinderLike.Props) => ({duration}),
            })
        },
        scale: 0.95,
    },
    in: {
        opacity: 1,
        x: 0,
        y: 20,
        transition: ({ duration }: TinderLike.Props) => ({
            duration,
            type: "spring",
            stiffness: 400,
            delay: 150,
        }),
        scale: 0.90,
    },
})

const StyledUl = styled.ul`
  position: relative;
  height: ${({ height }: TinderLike.Props): string => height + "px"};
  width: ${({ width }: TinderLike.Props): string => width + "px"};
`
const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.8;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`

const StyledLi = styled(Li)`
  z-index: -1;
  height: ${({ height }: TinderLike.Props): string => height + "px"};
  width: ${({ width }: TinderLike.Props): string => width + "px"};
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  background: ${({ background, bgStatus }: TinderLike.Props) => bgStatus === "colors" ? background : ""};
  background-image: url(${({ background }: TinderLike.Props) => background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform-origin: ${({ direction }: TinderLike.Props) => direction === "swipeFallTop" 
  ? "top center" 
  : "bottom center"};
  clip-path: ${({ pose, direction }: TinderLike.Props) => {
    return pose[0] === "out" && direction === "swipeFallTop" || direction === "swipeFallDown"
    ? "polygon(0 0, 100% 0%, 98% 100%, 2% 100%)" 
    : ""
  }};
  animation: 1s ${({ pose }: TinderLike.Props) => pose[0] === "out" ? fadeOut : ""} ease-out;
`

const Button = styled.button`
  margin-top: 20rem
`

class TinderLikeCard extends React.Component<TinderLike.Props, TinderLike.State> {

    public state: TinderLike.State = {
        list: [],
        content: [],
        current: 0,
        stateOfContent: ""
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
        if (this.state.list.length === 0) {
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
            this.setState({ list: newList })
            this.setState({ content: newContent })
        }
    }

    public click = () => {
        const newList = this.state.list
        const currentContent = this.state.content
        newList.push({
            val: currentContent[0],
            out: "",
            in: "in",
            middle: "",
        })

        newList[this.state.current].out = "out"
        if (newList[this.state.current].out === "out") {
            newList[this.state.current].middle = ""
            newList[this.state.current + 1].middle = "middle"
            newList[this.state.current + 2].middle = "secondMiddle"
        }

        newList[this.state.list.length - 2].in = ""
        this.setState({ list: newList })
        this.setState({ content: currentContent.slice(1) })
        this.setState({ current: this.state.current += 1 })
    }

    public render() {
        const { list } = this.state
        const props = this.props
        // const t0 = performance.now()
        const newList = list.length !== 0 ? list.map((obj, key) => (
            <StyledLi
                bgStatus={this.state.stateOfContent}
                background={obj.val}
                duration={props.duration}
                direction={props.direction}
                width={props.width}
                height={props.height}
                className={props.className}
                key={key}
                pose={[obj.out, obj.out2, obj.middle, obj.in]}
                order={key}
            >{Array.isArray(props.children) ? props.children[key] : props.children}</StyledLi>
        )).reverse() : ""
        // const t1 = performance.now()
        // console.log("Call to doSomething took " + (t1 - t0) / 1000 + " seconds. " + list.length)
        console.log(list)
        return (
            <StyledUl>
                {newList}
                <Button onClick={this.click}>Swipe</Button>
            </StyledUl>
        )
    }
}

export default TinderLikeCard
