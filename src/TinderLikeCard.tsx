import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"
import objectSwitch from "./objectSwitch"

namespace TinderLike {
    export interface Props {
        // duration: number
        // direction: string
        color: string
        // onClick: () => void
        // width: number
        // height: number
        // className: string
        // children: React.ReactNode
        [propName: string]: any
    }
}

const Li = posed.li({
    
    init: {
        transition: { duration: 400 },
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 50,
                1: 25,
                2: 0,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            })
        },
    },
    1: {
        transition: { duration: 400 },
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 50,
                1: 25,
                2: 0,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            })
        },
        opacity: 1,
        x: 0,
    },
    2: {
        transition: { duration: 400 },
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 50,
                1: 25,
                2: 0,
            })
        },
        
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            })
        },
        opacity: 1,
        x: 0,
    },
    3: {
        transition: { duration: 400 },
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 50,
                1: 25,
                2: 0,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            })
        },
        opacity: 1,
        x: 0,
    },
    // pressable: true,
    Yes: {
        transition: { duration: 400 },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 1.2,
                1: 1,
                2: 1,
            })
        },
        opacity: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 0.01,
                1: 1,
                2: 1,
            })
        },
        x: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 0,
                1: 0,
                2: 0,
            })
        },
    },
})

const StyledUl = styled.ul`
  position: relative;
  height: 200px;
  width: 250px;
`

const StyledLi = styled(Li)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  background: ${({ color }: TinderLike.Props): string => color};
`
const Button = styled.button`
  margin-top: 20rem
`

export class TinderLikeCard extends React.Component<{}, {}> {

    public state = {
        clickTimes: 0,
        clicked: "init",
        colors: [
            "#c9c4bf",
            "#252526", 
            "#2b0eed", 
            "#f95c5c", 
            "#5cf9e4", 
            "#4286f4", 
            "#ee42f4", 
            "#e2f442", 
            "#86f441",
        ],
    }

    public click = () => {
        this.setState({
            clickTimes: this.state.clickTimes < 3
                ? this.state.clickTimes += 1
                : this.state.clickTimes - 2,
        })
        const array = this.state.colors
        const first = array.slice(0, 3)
        const second = array.slice(3)
         // console.log(first)
        first.shift()
        if (first.length < 3) {
            first.push(second[0])
            second.shift()
            this.setState({colors: first.concat(second)})
         }
        this.setState({clicked: "Yes"})

        setTimeout(() => {
            this.setState({clicked: "init"})
         }, 100)
         // console.log(first)
        // array.pop()
        // this.setState({ items: array })

        // if (array.length < 3) {
        //     if (array[0] === 2) {
        //         array.unshift(1)
        //     } else if (array[0] === 1) {
        //         array.unshift(0)
        //     } else {
        //         array.unshift(2)
        //     }
        // }
    }

    public render() {
        const pose = this.state.clickTimes
        const poseBtn = this.state.clicked
       // console.log(pose)
        const list = this.state.colors.slice(0, 3).map((i, order) => (
            <StyledLi 
                pose={[pose, poseBtn]} 
                order={order} 
                key={order} 
                color={i} 
            />
        )).reverse()
        return (
            <StyledUl>
                { list}
                <Button onClick={this.click}>Swap</Button>
            </StyledUl>
        )
    }
}

export default TinderLikeCard
