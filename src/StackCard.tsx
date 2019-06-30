import * as React from "react"
import posed from "react-pose"
import styled from "styled-components"
import objectSwitch from "./objectSwitch"

namespace Style {
    export const Height = ({ height }: Stack.Props): string => height + "px"
    export const Width = ({ width }: Stack.Props): string => width + "px"
    export const bgColor = ({ order, color }: Stack.Props): string => order === 0 ? "transparent" : color
    export const bgImages = ({ images}: Stack.Props) => images
}

namespace Stack {
    export interface Props {
        children: React.ReactNode
        onMouseEnter: () => void
        onMouseLeave: () => void
        [propName: string]: any
        onClick: () => void
        className: string
        direction: string
        duration: number
        images: string[] 
        height: string
        color: string
        width: string
    }
}

const Box = posed.div({
    hoverable: true,
    init: {
        transition: ({ duration }: Stack.Props) => ({ duration }),
        rotate: 0,
        scale: 1,
        x: 0,
        y: 0,
    },
    hover: {
        transition: ({ duration }: Stack.Props) => ({
            stiffness: 100,
            type: "spring",
            duration,
            mass: 2,
        }),
        x: ({ direction, order }: Stack.Props): number => {
            const right = objectSwitch(order, {
                0: -5,
                1: 40,
                2: 30,
                3: 20,
                4: 10,
            })
            const left = objectSwitch(order, {
                0: -5,
                1: -40,
                2: -30,
                3: -20,
                4: -10,
            })

            return objectSwitch(direction, {
                accordeonRight: objectSwitch(order, {
                    0: 0,
                    1: 50,
                    2: 40,
                    3: 30,
                    4: 20,
                }),
                accordeonLeft: objectSwitch(order, {
                    0: 0,
                    1: -50,
                    2: -40,
                    3: -30,
                    4: -20,
                }),
                spread: objectSwitch(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 10,
                    4: -10,
                }),
                bottomRight: right,
                bottomLeft: left,
                topRight: right,
                topLeft: left,
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
                bottomRight: bottomLeftRight,
                bottomLeft: bottomLeftRight,
                accordeonRight: 0.01,
                accordeonLeft: 0.01,
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
                accordeonRight: 1,
                accordeonLeft: 1,
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
                
                accordeonRight: objectSwitch(order, {
                    0: 0,
                    1: 20,
                    2: 16,
                    3: 12,
                    4: 8,
                }),
                accordeonLeft: objectSwitch(order, {
                    0: 0,
                    1: -20,
                    2: -16,
                    3: -12,
                    4: -8,
                }),
                spread: objectSwitch(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 6,
                    4: -6,
                }),
                default: 0,
            })
        },
    },
})

const StyledBox = styled(Box)`
  height: ${Style.Height};
  width: ${Style.Width};
  position: relative;
`
const StyledDecoBox = styled(Box)`
  background: ${Style.bgColor};
  background-image: url(${Style.bgImages});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute; 
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`
export class StackCard extends React.Component <Stack.Props, {}> {
    public render() {
        const props = this.props
        const images = props.images
        const order = [1, 2, 3, 4]
        const DecoBoxes = order

    .map((elem: number) => (
      <StyledDecoBox
        images={images && images[elem - 1] ? images[elem - 1] : ""}
        direction={props.direction}
        duration={props.duration}
        color={props.color}
        order={elem}
        key={elem}
      >
        {elem === 1 ? this.props.children : ""}
      </StyledDecoBox>
    ))
    .reverse()

        return (
        <StyledBox
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={props.className}
            direction={props.direction}
            duration={props.duration}
            onClick={props.onClick}
            height={props.height}
            width={props.width}
            color={props.color}
            order={0}
        >
        {DecoBoxes}
        </StyledBox> 
)
    }
}

export default StackCard
