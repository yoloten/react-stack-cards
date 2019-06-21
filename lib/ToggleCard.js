"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_pose_1 = require("react-pose");
const styled_components_1 = require("styled-components");
const objectSwitch_1 = require("./objectSwitch");
const Li = react_pose_1.default.li({
    init: {
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
        x: ({ order, direction }) => {
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
                default: 0.001,
            });
        },
        y: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                sideGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: -60,
                    2: 60,
                    3: 60,
                }),
                default: 0.001,
            });
        },
        scale: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                sideSlide: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.8,
                    2: 0.8,
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
        transition: ({ duration }) => ({ duration }),
    },
    toggled: {
        opacity: 1,
        x: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                openBottomLeft: objectSwitch_1.default(order, {
                    0: -15,
                    1: 0,
                    2: 15,
                }),
                openBottomRight: objectSwitch_1.default(order, {
                    0: 15,
                    1: 0,
                    2: -15,
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
                fanOut: objectSwitch_1.default(order, {
                    0: 0,
                    1: -70,
                    2: 70,
                }),
                randmRotation: objectSwitch_1.default(order, {
                    0: 10,
                }),
                sideSlide: objectSwitch_1.default(order, {
                    0: 0,
                    1: 100,
                    2: -100,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: -70,
                    1: 70,
                    2: -70,
                    3: 70,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 0,
                    1: -30,
                    2: 0,
                    3: 30,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: 0,
                    1: -55,
                    2: 0.3,
                    3: 57,
                }),
                fan: objectSwitch_1.default(order, {
                    0: -45,
                    1: -20,
                    2: -6,
                    3: 0,
                }),
            });
        },
        y: ({ order, direction }) => {
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
            const verticalSpreadElastic = objectSwitch_1.default(order, {
                0: 75,
                1: 50,
                2: 25,
                3: 0,
            });
            return objectSwitch_1.default(direction, {
                openBottomLeft: openBottom,
                openBottomRight: openBottom,
                openTopRight: openTop,
                openTopLeft: openTop,
                fanOut: objectSwitch_1.default(order, {
                    0: 0,
                    1: 10,
                    2: 10,
                }),
                randmRotation: objectSwitch_1.default(order, {
                    0: 10,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: -60,
                    1: -60,
                    2: 60,
                    3: 60,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 20,
                    1: -30,
                    2: -30,
                    3: -30,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: -29,
                    1: 73,
                    2: 73,
                    3: 73,
                }),
                verticalSpread: verticalSpreadElastic,
                elasticSpread: verticalSpreadElastic,
                fan: objectSwitch_1.default(order, {
                    0: 40,
                    1: 23,
                    2: 6,
                    3: 0,
                }),
                queue: objectSwitch_1.default(order, {
                    0: 10,
                    1: -20,
                    2: -50,
                    3: -80,
                }),
            });
        },
        scale: ({ order, direction }) => {
            return objectSwitch_1.default(direction, {
                fanOut: objectSwitch_1.default(order, {
                    0: 0.94,
                    1: 0.9,
                    2: 0.9,
                    3: 0.92,
                }),
                sideSlide: objectSwitch_1.default(order, {
                    0: 1,
                    1: 0.9,
                    2: 0.9,
                    3: 0.95,
                }),
                sideGrid: objectSwitch_1.default(order, {
                    0: 0.52,
                    1: 0.52,
                    2: 0.52,
                    3: 0.52,
                }),
                peekAboo: objectSwitch_1.default(order, {
                    0: 0.9,
                    1: 0.7,
                    2: 0.7,
                    3: 0.7,
                }),
                previewGrid: objectSwitch_1.default(order, {
                    0: 0.7,
                    1: 0.25,
                    2: 0.25,
                    3: 0.25,
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
                fanOut: objectSwitch_1.default(order, {
                    0: 0,
                    1: -8,
                    2: 8,
                }),
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
                fan: objectSwitch_1.default(order, {
                    0: 15,
                    1: 8,
                    2: 2,
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
const StyledUl = styled_components_1.default.ul `
  position: relative;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  margin: 100px;
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
            toggle: "init",
            stateOfContent: "",
        };
        this.click = () => {
            this.state.toggle === "init"
                ? this.setState({ toggle: "toggled" })
                : this.setState({ toggle: "init" });
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
        const newList = list.map((obj, key) => (React.createElement(StyledLi, { bgStatus: this.state.stateOfContent, background: obj, duration: props.duration, direction: props.direction, width: props.width, height: props.height, className: props.className, key: key, order: key, pose: this.state.toggle }, Array.isArray(props.children) ? props.children[key] : props.children))).reverse();
        return (React.createElement(StyledUl, null,
            newList,
            React.createElement(Button, { onClick: this.click }, "Swipe")));
    }
}
exports.default = ToggleCard;
//# sourceMappingURL=ToggleCard.js.map