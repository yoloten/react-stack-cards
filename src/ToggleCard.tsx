import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import styled, { keyframes } from "styled-components"
import objectSwitch from "./objectSwitch"

namespace Toggle {
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

const cornersTransition = ({ duration }: Toggle.Props) => ({
    duration,
    type: "spring",
    stiffness: 500,
    delay: 150,
})

const Li = posed.li({
    init: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: ({ duration }: Toggle.Props) => ({duration}),
    },
})

const StyledUl = styled.ul`
  position: relative;
  height: ${({ height }: Toggle.Props): string => height + "px"};
  width: ${({ width }: Toggle.Props): string => width + "px"};
`
const StyledLi = styled(Li)`
  z-index: -1;
  height: ${({ height }: Toggle.Props): string => height + "px"};
  width: ${({ width }: Toggle.Props): string => width + "px"};
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  background: ${({ background, bgStatus }: Toggle.Props) => bgStatus === "colors" ? background : "#000"};
  background-image: url(${({ background }: Toggle.Props) => background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
const Button = styled.button`
  margin-top: 20rem
`

class ToggleCard extends React.Component<Toggle.Props, Toggle.State> {

    public state: Toggle.State = {
        list: [],
        content: [],
        current: 0,
        stateOfContent: "",
    }
    
    public componentDidMount() {
        if (this.props.images === undefined) {
            this.setState({ stateOfContent: "colors" })
        } else {
            this.setState({ stateOfContent: "images" })
        }
    }

    public click = () => {
        this.setState({ current: this.state.current += 1 })
    }

    public render() {
        const props = this.props
        const newList = props.colors.map((obj, key) => (
            <StyledLi
                bgStatus={this.state.stateOfContent}
                background={obj}
                duration={props.duration}
                direction={props.direction}
                width={props.width}
                height={props.height}
                className={props.className}
                key={key}
                order={key}
            >{Array.isArray(props.children) ? props.children[key] : props.children}</StyledLi>
        )).reverse()
        return (
            <StyledUl>
                {newList}
                <Button onClick={this.click}>Swipe</Button>
            </StyledUl>
        )
    }
}

export default ToggleCard
