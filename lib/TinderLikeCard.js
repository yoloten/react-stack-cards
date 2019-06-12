"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const objectSwitch_1 = require("./objectSwitch");
const Li = react_pose_1.default.li({
    init: {
        transition: { duration: 400 },
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 50,
                1: 25,
                2: 0,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            });
        },
    },
    1: {
        transition: { duration: 400 },
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 50,
                1: 25,
                2: 0,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            });
        },
        opacity: 1,
        x: 0,
    },
    2: {
        transition: { duration: 400 },
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 50,
                1: 25,
                2: 0,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            });
        },
        opacity: 1,
        x: 0,
    },
    3: {
        transition: { duration: 400 },
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 50,
                1: 25,
                2: 0,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            });
        },
        opacity: 1,
        x: 0,
    },
    Yes: {
        transition: { duration: 400 },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1.2,
                1: 1,
                2: 1,
            });
        },
        opacity: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0.01,
                1: 1,
                2: 1,
            });
        },
        x: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0,
                1: 0,
                2: 0,
            });
        },
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
        };
        this.click = () => {
            this.setState({
                clickTimes: this.state.clickTimes < 3
                    ? this.state.clickTimes += 1
                    : this.state.clickTimes - 2,
            });
            const array = this.state.colors;
            const first = array.slice(0, 3);
            const second = array.slice(3);
            first.shift();
            if (first.length < 3) {
                first.push(second[0]);
                second.shift();
                this.setState({ colors: first.concat(second) });
            }
            this.setState({ clicked: "Yes" });
            setTimeout(() => {
                this.setState({ clicked: "init" });
            }, 100);
        };
    }
    render() {
        const pose = this.state.clickTimes;
        const poseBtn = this.state.clicked;
        const list = this.state.colors.slice(0, 3).map((i, order) => (React.createElement(StyledLi, { pose: [pose, poseBtn], order: order, key: order, color: i }))).reverse();
        return (React.createElement(StyledUl, null,
            list,
            React.createElement(Button, { onClick: this.click }, "Swap")));
    }
}
exports.TinderLikeCard = TinderLikeCard;
exports.default = TinderLikeCard;
//# sourceMappingURL=TinderLikeCard.js.map