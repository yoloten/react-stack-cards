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
    pressable: true,
    init: {
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 0,
                1: 25,
                2: 50,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 0.9,
                1: 0.95,
                2: 1,
            })
        },
    },
    1: {
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 25,
                1: 50,
                2: -1,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 0.95,
                1: 1,
                2: 0.9,
            })
        },
    },
    2: {
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 50,
                1: -1,
                2: 25,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 1,
                1: 0.9,
                2: 0.95,
            })
        },
    },
    3: {
        y: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: -1,
                1: 25,
                2: 50,
            })
        },
        scale: ({ order }: TinderLike.Props) => {
            return objectSwitch(order, {
                0: 0.9,
                1: 0.95,
                2: 1,
            })
        },
    },
    press: {
        transition: { duration: 500 },
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
  background: ${({ color }: TinderLike.Props): string => color};
`
const Button = styled.button`
  margin-top: 20rem
`

export class TinderLikeCard extends React.Component<{}, {}> {

    public state = {
        items: [0, 1, 2],
        clickTimes: 0,
    }

    public click = () => {
        const array = this.state.items
        array.pop()
        this.setState({ items: array })
        this.setState({
            clickTimes: this.state.clickTimes < 3
                ? this.state.clickTimes += 1
                : this.state.clickTimes - 2,
        })

        if (array.length < 3) {
            if (array[0] === 2) {
                array.unshift(1)
            } else if (array[0] === 1) {
                array.unshift(0)
            } else {
                array.unshift(2)
            }
        }

    }

    public render() {
        const array = this.state.items
        //console.log(array)
        const pose = this.state.clickTimes
        //console.log(pose)
        const colors: string[] = ["#4286f4", "#e2f442", "#86f441"].reverse()
        return (
            <StyledUl>
                {array.map((i) => (
                    <StyledLi pose={pose} onClick={this.click} order={i} key={i} color={colors[i]} />
                ))
                }
            </StyledUl>
        )
    }
}

export default TinderLikeCard
