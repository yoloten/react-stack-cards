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
    enter: {
        y: ({ order }: TinderLike.Props): number => {
            return objectSwitch(order, {
                0: 0,
                1: 15,
                2: 30,
            })
        },
        x: 0,
        opacity: 1,
    },
    press: {
        y: 0,
        scale: 1,
        opacity: 0.001,
        transition: {duration: 700}
    },
    exit: {
        y: 100,
        x: 0,
        opacity: 0.01,
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
  z-index: ${({ order, pose }) => order === 0 && pose === "afterclick" ? -100 : 1};
`  
const Button = styled.button`
  margin-top: 20rem
`

export class TinderLikeCard extends React.Component <{}, {}> {

    public state = {
        items: [0, 1, 2],
    }
    
    click = () => {
        const array = this.state.items
        array.pop()
        this.setState({
            items: array,
        })
        setTimeout(() => {
            if (array.length < 3) {
                if (array[0] === 2) {
                    array.unshift(1)
                }
                if (array[0] === 1) {
                    array.unshift(0)  
                } else {
                    array.unshift(2)
                }
            } 
        }, 100) 
    }

    public render() {
        const array = this.state.items
        console.log(array)
        const colors: string[] = ["#4286f4", "#e2f442", "#86f441"].reverse()
        return (
            <StyledUl>
                <PoseGroup>
                    {array.map((i) => (
                        <StyledLi onClick={this.click} order={i} key={i} color={colors[i]} />
                    ))
                    }
                </PoseGroup>
            </StyledUl>
        )
    }
}

export default TinderLikeCard
