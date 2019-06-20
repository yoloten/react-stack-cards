"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const cornersTransition = ({ duration }) => ({
    duration,
    type: "spring",
    stiffness: 500,
    delay: 150,
});
const Li = react_pose_1.default.li({
    init: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: ({ duration }) => ({ duration }),
    },
});
const StyledUl = styled_components_1.default.ul `
  position: relative;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
`;
const StyledLi = styled_components_1.default(Li) `
  z-index: -1;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  background: ${({ background, bgStatus }) => bgStatus === "colors" ? background : "#000"};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const Button = styled_components_1.default.button `
  margin-top: 20rem
`;
class ToggleCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: [],
            content: [],
            current: 0,
            stateOfContent: "",
        };
        this.click = () => {
            this.setState({ current: this.state.current += 1 });
        };
    }
    componentDidMount() {
        if (this.props.images === undefined) {
            this.setState({ stateOfContent: "colors" });
        }
        else {
            this.setState({ stateOfContent: "images" });
        }
    }
    render() {
        const props = this.props;
        const newList = props.colors.map((obj, key) => (React.createElement(StyledLi, { bgStatus: this.state.stateOfContent, background: obj, duration: props.duration, direction: props.direction, width: props.width, height: props.height, className: props.className, key: key, order: key }, Array.isArray(props.children) ? props.children[key] : props.children))).reverse();
        return (React.createElement(StyledUl, null,
            newList,
            React.createElement(Button, { onClick: this.click }, "Swipe")));
    }
}
exports.default = ToggleCard;
//# sourceMappingURL=ToggleCard.js.map