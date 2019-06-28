"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const objectSwitch_1 = require("./objectSwitch");
var Style;
(function (Style) {
    Style.Height = ({ height }) => height + "px";
    Style.Width = ({ width }) => width + "px";
    Style.bgColor = ({ order, color }) => order === 0 ? "transparent" : color;
    Style.bgImages = ({ images }) => images;
})(Style || (Style = {}));
const Box = react_pose_1.default.div({
    hoverable: true,
    init: {
        transition: ({ duration }) => ({ duration }),
        rotate: 0,
        scale: 1,
        x: 0,
        y: 0,
    },
    hover: {
        transition: ({ duration }) => ({
            stiffness: 100,
            type: "spring",
            duration,
            mass: 2,
        }),
        x: ({ direction, order }) => {
            const right = objectSwitch_1.default(order, {
                0: -5,
                1: 40,
                2: 30,
                3: 20,
                4: 10,
            });
            const left = objectSwitch_1.default(order, {
                0: -5,
                1: -40,
                2: -30,
                3: -20,
                4: -10,
            });
            return objectSwitch_1.default(direction, {
                accordeonRight: objectSwitch_1.default(order, {
                    0: 0,
                    1: 50,
                    2: 40,
                    3: 30,
                    4: 20,
                }),
                accordeonLeft: objectSwitch_1.default(order, {
                    0: 0,
                    1: -50,
                    2: -40,
                    3: -30,
                    4: -20,
                }),
                spread: objectSwitch_1.default(order, {
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
                bottomRight: bottomLeftRight,
                bottomLeft: bottomLeftRight,
                accordeonRight: 0.01,
                accordeonLeft: 0.01,
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
                accordeonRight: 1,
                accordeonLeft: 1,
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
                accordeonRight: objectSwitch_1.default(order, {
                    0: 0,
                    1: 20,
                    2: 16,
                    3: 12,
                    4: 8,
                }),
                accordeonLeft: objectSwitch_1.default(order, {
                    0: 0,
                    1: -20,
                    2: -16,
                    3: -12,
                    4: -8,
                }),
                spread: objectSwitch_1.default(order, {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 6,
                    4: -6,
                }),
                default: 0,
            });
        },
    },
});
const StyledBox = styled_components_1.default(Box) `
  height: ${Style.Height};
  width: ${Style.Width};
  position: relative;
`;
const StyledDecoBox = styled_components_1.default(Box) `
  background: ${Style.bgColor};
  background-image: url(${Style.bgImages});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute; 
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;
class StackCard extends React.Component {
    render() {
        const props = this.props;
        const images = props.images;
        const order = [1, 2, 3, 4];
        const DecoBoxes = order
            .map((elem) => (React.createElement(StyledDecoBox, { images: images && images[elem - 1] ? images[elem - 1] : "", direction: props.direction, duration: props.duration, color: props.color, order: elem, key: elem }, elem === 1 ? this.props.children : "")))
            .reverse();
        return (React.createElement(StyledBox, { onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, className: props.className, direction: props.direction, duration: props.duration, onClick: props.onClick, height: props.height, width: props.width, color: props.color, order: 0 }, DecoBoxes));
    }
}
exports.StackCard = StackCard;
exports.default = StackCard;
//# sourceMappingURL=StackCard.js.map