import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"
import objectSwitch from "./objectSwitch"
import List from "./List"

namespace TinderLike {
    export interface Props {
        // duration: number
        // direction: string
        content: string[]
        // onClick: () => void
        // width: number
        // height: number
        // className: string
        // children: React.ReactNode
        [propName: string]: any
    }
    export interface State {
        list: any[]
        content: string[]
    }
}

const Li = posed.li({
    init: {
        transition: { duration: 100 },
        y: 0
        scale: 1
    },
    out: {
        x: 100
    },
    middle: {
        y: 100
    }
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

class TinderLikeCard extends React.Component<TinderLike.Props, TinderLike.State> {

    public state: TinderLike.State = {
        list: [],
        content: [],
    }

    public componentDidMount() {
        if (this.state.list.length === 0) {
        const newList = this.state.list
        for (let i = 0; i < 3; i++) {
            newList.push({
                val: this.props.content[i],
                out: "",
                in: "",
            })
        }
        const newContent = this.props.content.slice(3)
        this.setState({ list: newList })
        this.setState({ content: newContent })
        }
    }

    public click = () => {
        const newList = this.state.list
        const currentContent = this.state.content
        if (newList.length <= 4) {
            newList.push({
                val: currentContent[0],
                out: "",
                in: "in",
            })
        }
        if (newList.length >= 5) {
            newList.shift()
        }
        this.setState({ 
            list: newList,
        })
        this.setState({ content: currentContent.slice(1) })
        this.state.list[0].out = "out"
        this.state.list[2].in = ""
    }

    public render() {
        const { list } = this.state
        const newList = list.length !== 0 ? list.map((obj, key) => (
            <StyledLi
                color={obj.val}
                key={key}
                pose={obj.out}
            />
        )).reverse() : ""
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
