"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const objectSwitch_1 = require("./objectSwitch");
const Li = react_pose_1.default.li({
    pressable: true,
    enter: {
        y: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 0,
                1: 15,
                2: 30,
            });
        },
        x: 0,
        opacity: 1,
    },
    press: {
        y: 0,
        scale: 1,
        opacity: 0.001,
        transition: { duration: 700 }
    },
    exit: {
        y: 100,
        x: 0,
        opacity: 0.01,
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
  z-index: ${({ order, pose }) => order === 0 && pose === "afterclick" ? -100 : 1};
`;
const Button = styled_components_1.default.button `
  margin-top: 20rem
`;
class TinderLikeCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: [0, 1, 2],
        };
        this.click = () => {
            const array = this.state.items;
            array.pop();
            this.setState({
                items: array,
            });
            setTimeout(() => {
                if (array.length < 3) {
                    if (array[0] === 2) {
                        array.unshift(1);
                    }
                    if (array[0] === 1) {
                        array.unshift(0);
                    }
                    else {
                        array.unshift(2);
                    }
                }
            }, 100);
        };
    }
    render() {
        const array = this.state.items;
        console.log(array);
        const colors = ["#4286f4", "#e2f442", "#86f441"].reverse();
        return (React.createElement(StyledUl, null,
            React.createElement(react_pose_1.PoseGroup, null, array.map((i) => (React.createElement(StyledLi, { onClick: this.click, order: i, key: i, color: colors[i] }))))));
    }
}
exports.TinderLikeCard = TinderLikeCard;
exports.default = TinderLikeCard;
//# sourceMappingURL=TinderLikeCard.js.map