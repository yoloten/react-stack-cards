"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const React = require("react");
const react_pose_1 = require("react-pose");
const objectSwitch_1 = require("./objectSwitch");
var Style;
(function (Style) {
    Style.bgColor = ({ background, bgStatus }) => bgStatus === "colors" ? background : "#000";
    Style.liHeight = ({ height }) => height + "px";
    Style.liWidth = ({ width }) => width + "px";
    Style.bgImage = ({ background }) => background;
})(Style || (Style = {}));
const Li = react_pose_1.default.div({
    in: {
        transition: ({ duration }) => ({ duration }),
        opacity: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                sideSlide: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.001,
                    2: 0.001,
                }),
                default: 1,
            });
        },
        scale: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                sideSlide: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.6,
                    2: 0.6,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.001,
                    2: 0.001,
                    3: 0.001,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.2,
                    2: 0.2,
                    3: 0.2,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.001,
                    2: 0.001,
                    3: 0.001,
                }),
                default: 1,
            });
        },
        rotate: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                default: 0.001,
                peekAboo: objectSwitch_1.default(order, {
                    0: 0,
                    1: 40,
                    2: 0,
                    3: -40,
                }),
            });
        },
        x: ({ order, direction, width }) => {
            const newWidth = Number.parseInt(width);
            const previewX = newWidth * 0.247;
            return objectSwitch_1.default(direction, {
                sideGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: 70,
                    2: -70,
                    3: 70,
                }),
                sideSlide: objectSwitch_1.default(order, {
                    0: 0,
                    1: 170,
                    2: -170,
                    3: 0,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: previewX,
                    2: 0,
                    3: -previewX,
                }),
                default: 0.001,
            });
        },
        y: ({ order, direction, height }) => {
            const newHeight = Number.parseInt(height);
            const previewY1 = newHeight * 0.385;
            return objectSwitch_1.default(direction, {
                previewGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: previewY1,
                    2: previewY1,
                    3: previewY1,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: -60,
                    2: 60,
                    3: 60,
                }),
                default: 0.001,
            });
        },
    },
    toggled: {
        opacity: 1,
        x: ({ order, direction, width, height }) => {
            const newWidth = Number.parseInt(width);
            const newHeight = Number.parseInt(height);
            const countFanX = newHeight * 0.131;
            const countFanX1 = newHeight * 0.07;
            const countFanX2 = newHeight * 0.03;
            const previewX = newWidth * 0.247;
            const countX = newWidth * 0.275;
            return objectSwitch_1.default(direction, {
                openBottomRight: objectSwitch_1.default(order, {
                    0: 15,
                    1: 0,
                    2: -15,
                }),
                openBottomLeft: objectSwitch_1.default(order, {
                    0: -15,
                    1: 0,
                    2: 15,
                }),
                randmRotation: objectSwitch_1.default(order, {
                    0: 10,
                }),
                openTopRight: objectSwitch_1.default(order, {
                    0: 15,
                    1: 0,
                    2: -15,
                }),
                openTopLeft: objectSwitch_1.default(order, {
                    0: -15,
                    1: 0,
                    2: 15,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: previewX,
                    2: 0.001,
                    3: -previewX,
                }),
                sideSlide: objectSwitch_1.default(order, {
                    0: 0,
                    1: 100,
                    2: -100,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: -countX,
                    1: countX,
                    2: -countX,
                    3: countX,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 0,
                    1: -30,
                    2: 0,
                    3: 30,
                }),
                fanOut: objectSwitch_1.default(order, {
                    0: 0,
                    1: -70,
                    2: 70,
                }),
                fan: objectSwitch_1.default(order, {
                    0: -countFanX,
                    1: -countFanX1,
                    2: -countFanX2,
                    3: 0,
                }),
            });
        },
        y: ({ order, direction, width, height }) => {
            const newHeight = Number.parseInt(height);
            const previewY = newHeight * (0.73 * 0.19);
            const newWidth = Number.parseInt(width);
            const countFanY1 = newWidth * 0.067;
            const countFanY2 = newWidth * 0.035;
            const previewY1 = newHeight * 0.385;
            const countFanY = newWidth * 0.101;
            const countY = newHeight * 0.275;
            const verticalSpreadElastic = objectSwitch_1.default(order, {
                0: 75,
                1: 50,
                2: 25,
                3: 0,
            });
            const openBottom = objectSwitch_1.default(order, {
                0: 15,
                1: 0,
                2: -15,
            });
            const openTop = objectSwitch_1.default(order, {
                0: -15,
                1: 0,
                2: 15,
            });
            return objectSwitch_1.default(direction, {
                verticalSpread: verticalSpreadElastic,
                elasticSpread: verticalSpreadElastic,
                randmRotation: objectSwitch_1.default(order, {
                    0: 10,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: -previewY,
                    1: previewY1,
                    2: previewY1,
                    3: previewY1,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: -countY,
                    1: -countY,
                    2: countY,
                    3: countY,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 20,
                    1: -30,
                    2: -30,
                    3: -30,
                }),
                fanOut: objectSwitch_1.default(order, {
                    0: 0,
                    1: 10,
                    2: 10,
                }),
                queue: objectSwitch_1.default(order, {
                    0: 10,
                    1: -20,
                    2: -50,
                    3: -80,
                }),
                openBottomRight: openBottom,
                openBottomLeft: openBottom,
                fan: objectSwitch_1.default(order, {
                    0: countFanY,
                    1: countFanY1,
                    2: countFanY2,
                    3: 0,
                }),
                openTopRight: openTop,
                openTopLeft: openTop,
            });
        },
        scale: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                previewGrid: objectSwitch_1.default(order, {
                    0: 0.725,
                    1: 0.23,
                    2: 0.23,
                    3: 0.23,
                }),
                sideSlide: objectSwitch_1.default(order, {
                    0: 0.95,
                    1: 0.85,
                    2: 0.85,
                    3: 0.9,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: 0.45,
                    1: 0.45,
                    2: 0.45,
                    3: 0.45,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 0.9,
                    1: 0.7,
                    2: 0.7,
                    3: 0.7,
                }),
                fanOut: objectSwitch_1.default(order, {
                    0: 0.94,
                    1: 0.9,
                    2: 0.9,
                    3: 0.92,
                }),
                queue: objectSwitch_1.default(order, {
                    0: 0.9,
                    1: 0.8,
                    2: 0.7,
                    3: 0.6,
                }),
            });
        },
        rotate: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                randmRotation: objectSwitch_1.default(order, {
                    0: 0,
                    1: -15,
                    2: 13,
                    3: 40,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 0,
                    1: -20,
                    2: 0,
                    3: 20,
                }),
                fanOut: objectSwitch_1.default(order, {
                    0: 0,
                    1: -8,
                    2: 8,
                }),
                fan: objectSwitch_1.default(order, {
                    0: 13,
                    1: 8,
                    2: 4,
                    3: 0,
                }),
            });
        },
        transition: ({ duration, order, direction }) => {
            return objectSwitch_1.default(direction, {
                verticalSpread: objectSwitch_1.default(order, {
                    0: { duration },
                    1: { duration, delay: 100 },
                    2: { duration, delay: 200 },
                }),
                elasticSpread: {
                    stiffness: 500,
                    type: "spring",
                    duration,
                },
                default: { duration },
            });
        },
    },
});
const StyledLi = styled_components_1.default(Li) `
  background: ${Style.bgColor};
  background-image: url(${Style.bgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: ${Style.liHeight};
  width: ${Style.liWidth};
  position: absolute;
  list-style: none;
  z-index: -1;
  left: 0;
  top: 0;
`;
const StyledUl = styled_components_1.default.div `
  height: ${Style.liHeight};
  width: ${Style.liWidth};
  position: relative;
`;
class ToggleCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            stateOfContent: "",
            list: [],
        };
    }
    componentDidMount() {
        if (this.props.images === undefined) {
            this.setState({ stateOfContent: "colors", list: this.props.colors });
        }
        else {
            this.setState({ stateOfContent: "images", list: this.props.images });
        }
    }
    render() {
        const props = this.props;
        const { list } = this.state;
        const newList = list.map((obj, key) => (React.createElement(StyledLi, { pose: this.props.isOpen ? "toggled" : "in", bgStatus: this.state.stateOfContent, direction: props.direction, duration: props.duration, height: props.height, width: props.width, background: obj, order: key, key: key }, Array.isArray(props.children) ? props.children[key] : props.children))).reverse();
        return (React.createElement(StyledUl, { onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, className: props.className, onClick: props.onClick, height: props.height, width: props.width }, newList));
    }
}
exports.ToggleCard = ToggleCard;
exports.default = ToggleCard;
//# sourceMappingURL=ToggleCard.js.map