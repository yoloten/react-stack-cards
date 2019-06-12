"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const objectSwitch_1 = require("./objectSwitch");
const Li = react_pose_1.default.li({
    pressable: true,
    init: {
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0,
                1: 25,
                2: 50,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0.9,
                1: 0.95,
                2: 1,
            });
        },
    },
    1: {
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 25,
                1: 50,
                2: -1,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0.95,
                1: 1,
                2: 0.9,
            });
        },
    },
    2: {
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 50,
                1: -1,
                2: 25,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1,
                1: 0.9,
                2: 0.95,
            });
        },
    },
    3: {
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: -1,
                1: 25,
                2: 50,
            });
        },
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0.9,
                1: 0.95,
                2: 1,
            });
        },
    },
    press: {
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
  background: ${({ color }) => color};
`;
const Button = styled_components_1.default.button `
  margin-top: 20rem
`;
class TinderLikeCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: [0, 1, 2],
            clickTimes: 0,
        };
        this.click = () => {
            const array = this.state.items;
            array.pop();
            this.setState({ items: array });
            this.setState({
                clickTimes: this.state.clickTimes < 3
                    ? this.state.clickTimes += 1
                    : this.state.clickTimes - 2,
            });
            if (array.length < 3) {
                if (array[0] === 2) {
                    array.unshift(1);
                }
                else if (array[0] === 1) {
                    array.unshift(0);
                }
                else {
                    array.unshift(2);
                }
            }
        };
    }
    render() {
        const array = this.state.items;
        const pose = this.state.clickTimes;
        const colors = ["#4286f4", "#e2f442", "#86f441"].reverse();
        return (React.createElement(StyledUl, null, array.map((i) => (React.createElement(StyledLi, { pose: pose, onClick: this.click, order: i, key: i, color: colors[i] })))));
    }
}
exports.TinderLikeCard = TinderLikeCard;
exports.default = TinderLikeCard;
//# sourceMappingURL=TinderLikeCard.js.map