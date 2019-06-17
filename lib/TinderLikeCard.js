"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const Li = react_pose_1.default.li({
    init: {
        opacity: 1,
        x: 0,
        y: 1,
        rotate: 0,
        transition: { duration: 250 },
    },
    out: {
        opacity: 0,
        x: -25,
        y: 800,
        rotate: -225,
        transition: { duration: 500 },
    },
});
const StyledUl = styled_components_1.default.ul `
  position: relative;
  height: 200px;
  width: 250px;
`;
const StyledLi = styled_components_1.default(Li) `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  background: ${({ color }) => color};
`;
const Button = styled_components_1.default.button `
  margin-top: 20rem
`;
class TinderLikeCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: [],
            content: [],
            current: 0,
        };
        this.click = () => {
            const newList = this.state.list;
            const currentContent = this.state.content;
            newList.push({
                val: currentContent[0],
                out: "",
                in: "in",
            });
            this.setState({ list: newList });
            this.setState({ content: currentContent.slice(1) });
            this.state.list[this.state.current].out = "out";
            this.state.list[this.state.list.length - 2].in = "";
            this.setState({ current: this.state.current += 1 });
        };
    }
    componentDidMount() {
        if (this.state.list.length === 0) {
            const newList = this.state.list;
            for (let i = 0; i < 3; i++) {
                newList.push({
                    val: this.props.content[i],
                    out: "",
                    in: "",
                });
            }
            const newContent = this.props.content.slice(3);
            this.setState({ list: newList });
            this.setState({ content: newContent });
        }
    }
    render() {
        const { list } = this.state;
        const newList = list.length !== 0 ? list.map((obj, key) => (React.createElement(StyledLi, { color: obj.val, key: key, pose: obj.out }))).reverse() : "";
        return (React.createElement(StyledUl, null,
            newList,
            React.createElement(Button, { onClick: this.click }, "Swipe")));
    }
}
exports.default = TinderLikeCard;
//# sourceMappingURL=TinderLikeCard.js.map