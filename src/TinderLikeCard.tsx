import * as React from "react"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"
import objectSwitch from "./objectSwitch"

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
        current: number
    }
}

const Li = posed.li({
    init: {
        opacity: 1,
        x: 0,
        y: 1,
        rotate: 0,
        transition: { duration: 250},
      },
      out: {
        opacity: 0,
        x: -25,
        y: 800,
        rotate: -225,
        transition: { duration: 500},
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

class TinderLikeCard extends React.Component<TinderLike.Props, TinderLike.State> {

    public state: TinderLike.State = {
        list: [],
        content: [],
        current: 0,
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
        newList.push({
                val: currentContent[0],
                out: "",
                in: "in",
            })
    
        this.setState({list: newList})
        this.setState({ content: currentContent.slice(1) })
        this.state.list[this.state.current].out = "out"
        this.state.list[this.state.list.length - 2].in = ""
        this.setState({current: this.state.current += 1 })
    }

    public render() {
        const { list } = this.state
        // const t0 = performance.now()
        const newList = list.length !== 0 ? list.map((obj, key) => (
            <StyledLi
                color={obj.val}
                key={key}
                pose={obj.out}
            />
        )).reverse() : ""
        // const t1 = performance.now()
        // console.log("Call to doSomething took " + (t1 - t0) / 1000 + " seconds. " + list.length)
       
        // console.log(list)
        return (
            <StyledUl>
                {newList}
                <Button onClick={this.click}>Swipe</Button>
            </StyledUl>
        )
    }
}

export default TinderLikeCard
