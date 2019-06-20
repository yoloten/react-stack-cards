import * as React from "react"
import posed from "react-pose"
import styled from "styled-components"
import objectSwitch from "./objectSwitch"

namespace Stack {
    export interface Props {
        duration: number
        direction: string
        color: string
        onClick: () => void
        width: number
        height: number
        className: string
        children: React.ReactNode
        [propName: string]: any
    }
}

const Box = posed.div({
    hoverable: true,
    init: {
        transition: ({ duration }: Stack.Props) => ({ duration }),
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
    },
    hover: {
        transition: ({ duration }: Stack.Props) => ({
            duration,
            type: "spring",
            stiffness: 100,
            mass: 2,
        }),
        x: ({ direction, order }: Stack.Props): number => {
            const left = objectSwitch(order, {
                0: -5,
                1: -40,
                2: -30,
                3: -20,
                4: -10,
            })
            const right = objectSwitch(order, {
                0: -5,
                1: 40,
                2: 30,
                3: 20,
                4: 10,
            })
            return objectSwitch(direction, {
                topLeft: left,
                bottomLeft: left,
                topRight: right,
                bottomRight: right,
                spread: objectSwitch(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 10,
                    4: -10,
                }),
                accordeonLeft: objectSwitch(order, {
                    0: 0,
                    1: -50,
                    2: -40,
                    3: -30,
                    4: -20,
                }),
                accordeonRight: objectSwitch(order, {
                    0: 0,
                    1: 50,
                    2: 40,
                    3: 30,
                    4: 20,
                }),
                default: 0,
            })
        },
        y: ({ order, direction }: Stack.Props): number => {
            const bottomLeftRight = objectSwitch(order, {
                0: 5,
                1: 30,
                2: 20,
                3: 10,
                4: 0,
            })
            return objectSwitch(direction, {
                default: objectSwitch(order, {
                    0: -5,
                    1: -30,
                    2: -20,
                    3: -10,
                    4: 0,
                }),
                accordeonLeft: 0.01,
                accordeonRight: 0.01,
                bottomLeft: bottomLeftRight,
                bottomRight: bottomLeftRight,
            })
        },
        scale: ({ order, direction }: Stack.Props): number => {
            return objectSwitch(direction, {
                default: objectSwitch(order, {
                    1: 1.1,
                    2: 1.07,
                    3: 1.05,
                    4: 1.02,
                }),
                spread: objectSwitch(order, {
                    1: 1,
                    2: 0.8,
                    3: 1,
                    4: 1,
                }),
                accordeonLeft: 1,
                accordeonRight: 1,
            })
        },
        opacity: ({ order, direction }: Stack.Props): number => {
            return objectSwitch(order, {
                1: 1,
                2: 0.6,
                3: 0.5,
                4: 0.4,
            })
        },
        rotate: ({ order, direction }: Stack.Props): number => {
            return objectSwitch(direction, {
                default: 0,
                spread: objectSwitch(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 6,
                    4: -6,
                }),
                accordeonLeft: objectSwitch(order, {
                    0: 0,
                    1: -20,
                    2: -16,
                    3: -12,
                    4: -8,
                }),
                accordeonRight: objectSwitch(order, {
                    0: 0,
                    1: 20,
                    2: 16,
                    3: 12,
                    4: 8,
                }),
            })
        },
    },
})

const StyledBox = styled(Box)`
  position: relative;
  height: ${({ height }: Stack.Props): string => height + "px"};
  width: ${({ width }: Stack.Props): string => width + "px"};
`
const StyledDecoBox = styled(Box)`
  background: ${({ order, color }: Stack.Props): string => order === 0 ? "transparent" : color};
  background-image: url(${({ images}: Stack.Props) => images});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export class StackCard extends React.Component <Stack.Props, {}> {
    public render() {
        const props = this.props
        const images: string[] = props.images
        const order = [1, 2, 3, 4]
        const DecoBoxes = order

    .map((elem: number) => (
      <StyledDecoBox
        duration={props.duration}
        color={props.color}
        direction={props.direction}
        order={elem}
        key={elem}
        images={images && images[elem - 1] ? images[elem - 1] : ""}
      >
        {elem === 1 ? this.props.children : ""}
      </StyledDecoBox>
    ))
    .reverse()

        return (
        <StyledBox
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            duration={props.duration}
            color={props.color}
            direction={props.direction}
            order={0}
            className={props.className}
        >
        {DecoBoxes}
        </StyledBox>
)
    }
}

export default StackCard
