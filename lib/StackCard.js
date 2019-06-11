"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const objectSwitch_1 = require("./objectSwitch");
const Box = react_pose_1.default.div({
    hoverable: true,
    init: {
        transition: ({ duration }) => ({ duration }),
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
    },
    hover: {
        transition: ({ duration }) => ({
            duration,
            type: "spring",
            stiffness: 100,
            mass: 2,
        }),
        x: ({ direction, order }) => {
            const left = objectSwitch_1.default(order, {
                0: -5,
                1: -40,
                2: -30,
                3: -20,
                4: -10,
            });
            const right = objectSwitch_1.default(order, {
                0: -5,
                1: 40,
                2: 30,
                3: 20,
                4: 10,
            });
            return objectSwitch_1.default(direction, {
                topLeft: left,
                bottomLeft: left,
                topRight: right,
                bottomRight: right,
                spread: objectSwitch_1.default(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 10,
                    4: -10,
                }),
                accordeonLeft: objectSwitch_1.default(order, {
                    0: 0,
                    1: -50,
                    2: -40,
                    3: -30,
                    4: -20,
                }),
                accordeonRight: objectSwitch_1.default(order, {
                    0: 0,
                    1: 50,
                    2: 40,
                    3: 30,
                    4: 20,
                }),
                default: 0,
            });
        },
        y: ({ order, direction }) => {
            const bottomLeftRight = objectSwitch_1.default(order, {
                0: 5,
                1: 30,
                2: 20,
                3: 10,
                4: 0,
            });
            return objectSwitch_1.default(direction, {
                default: objectSwitch_1.default(order, {
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
            });
        },
        scale: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                default: objectSwitch_1.default(order, {
                    1: 1.1,
                    2: 1.07,
                    3: 1.05,
                    4: 1.02,
                }),
                spread: objectSwitch_1.default(order, {
                    1: 1,
                    2: 0.8,
                    3: 1,
                    4: 1,
                }),
                accordeonLeft: 1,
                accordeonRight: 1,
            });
        },
        opacity: ({ order, direction }) => {
            return objectSwitch_1.default(order, {
                1: 1,
                2: 0.6,
                3: 0.5,
                4: 0.4,
            });
        },
        rotate: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                default: 0,
                spread: objectSwitch_1.default(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 6,
                    4: -6,
                }),
                accordeonLeft: objectSwitch_1.default(order, {
                    0: 0,
                    1: -20,
                    2: -16,
                    3: -12,
                    4: -8,
                }),
                accordeonRight: objectSwitch_1.default(order, {
                    0: 0,
                    1: 20,
                    2: 16,
                    3: 12,
                    4: 8,
                }),
            });
        },
    },
});
const StyledBox = styled_components_1.default(Box) `
  position: relative;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
`;
const StyledDecoBox = styled_components_1.default(Box) `
  background: ${({ order, color }) => order === 0 ? "transparent" : color};
  background-image: url(${({ images }) => images});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
class StackCard extends React.Component {
    render() {
        const props = this.props;
        const images = props.images;
        const order = [1, 2, 3, 4];
        const DecoBoxes = order
            .map((elem) => (React.createElement(StyledDecoBox, { duration: props.duration, color: props.color, direction: props.direction, order: elem, key: elem, images: images && images[elem - 1] ? images[elem - 1] : "" }, elem === 1 ? this.props.children : "")))
            .reverse();
        return (React.createElement(StyledBox, { width: props.width, height: props.height, onClick: props.onClick, duration: props.duration, color: props.color, direction: props.direction, order: 0, className: props.className }, DecoBoxes));
    }
}
exports.StackCard = StackCard;
exports.default = StackCard;
//# sourceMappingURL=StackCard.js.map