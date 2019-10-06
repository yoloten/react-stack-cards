"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const React = require("react");
const react_pose_1 = require("react-pose");
const objectSwitch_1 = require("./objectSwitch");
var Style;
(function (Style) {
    Style.bgColor = ({ background, bgStatus }) => bgStatus === "colors" ? background : "";
    Style.clipPath = ({ pose, direction }) => {
        return pose[0] === "out" && direction === "swipeFallTop" || direction === "swipeFallDown"
            ? "polygon(0 0, 100% 0%, 98% 100%, 2% 100%)"
            : "";
    };
    Style.transform = ({ direction }) => direction === "swipeFallTop"
        ? "top center"
        : "bottom center";
    Style.anim = ({ pose }) => pose[0] === "out" ? fadeOut : "";
    Style.liHeight = ({ height }) => height + "px";
    Style.liWidth = ({ width }) => width + "px";
    Style.bgImage = ({ background }) => background;
})(Style || (Style = {}));
const cornersTransition = ({ duration }) => ({
    stiffness: 500,
    type: "spring",
    delay: 150,
    duration,
});
const middleTransition = ({ direction }) => {
    return objectSwitch_1.default(direction, {
        default: ({ duration }) => ({ duration }),
        swipeCornerDownRight: cornersTransition,
        swipeCornerTopRight: cornersTransition,
        swipeCornerDownLeft: cornersTransition,
        swipeCornerTopLeft: cornersTransition,
    });
};
const Li = react_pose_1.default.div({
    init: {
        transition: ({ duration }) => ({ duration }),
        scale: ({ order }) => {
            return objectSwitch_1.default(order, {
                0: 1,
                1: 0.95,
                2: 0.9,
            });
        },
        y: ({ order, height }) => {
            const parsedHeight = Number.parseInt(height) / 10;
            return objectSwitch_1.default(order, {
                0: parsedHeight * 2,
                1: parsedHeight,
                2: 0,
                3: 0,
                4: 0,
            });
        },
        opacity: 1,
        rotate: 0,
        x: 0,
    },
    out: {
        transition: ({ duration }) => ({ duration }),
        x: ({ direction }) => {
            return objectSwitch_1.default(direction, {
                swipeCornerDownLeft: -300,
                swipeCornerDownRight: 300,
                swipeCornerTopRight: 300,
                swipeCornerTopLeft: -300,
                swipeRightRotate: 200,
                swipeLeftRotate: -200,
                swipeThrowRight: 200,
                swipeThrowLeft: -200,
                swipeDownLeft: -70,
                swipeDownRight: 70,
                swipeTopLeft: -50,
                swipeTopRight: 50,
                swipeFallDown: 0,
                swipeRight: 200,
                swipeLeft: -200,
                swipeFallTop: 0,
                swipeDown: 0,
                swipeTop: 0,
            });
        },
        rotate: ({ direction }) => {
            return objectSwitch_1.default(direction, {
                swipeCornerDownLeft: -20,
                swipeCornerDownRight: 20,
                swipeCornerTopRight: 20,
                swipeCornerTopLeft: -20,
                swipeRightRotate: 15,
                swipeLeftRotate: -15,
                swipeDownRight: -15,
                swipeTopLeft: -20,
                swipeTopRight: 20,
                swipeDownLeft: 15,
                swipeFallDown: 0,
                swipeFallTop: 0,
                swipeRight: 2,
                swipeLeft: -2,
                swipeDown: 0,
                swipeTop: 0,
            });
        },
        rotateX: ({ direction }) => {
            return objectSwitch_1.default(direction, {
                swipeFallDown: 100,
                swipeFallTop: -100,
            });
        },
        scale: ({ direction }) => {
            return objectSwitch_1.default(direction, {
                swipeThrowRight: 0.001,
                swipeThrowLeft: 0.001,
                swipeThrowDown: 0.001,
                swipeThrowTop: 0.001,
            });
        },
        y: ({ direction }) => {
            return objectSwitch_1.default(direction, {
                swipeCornerDownRight: 150,
                swipeCornerTopRight: -150,
                swipeCornerTopLeft: -150,
                swipeCornerDownLeft: 150,
                swipeRightRotate: 80,
                swipeThrowRight: -50,
                swipeLeftRotate: 80,
                swipeDownRight: 300,
                swipeTopRight: -270,
                swipeThrowTop: -300,
                swipeThrowLeft: -50,
                swipeThrowDown: 300,
                swipeDownLeft: 300,
                swipeTopLeft: -270,
                swipeFallDown: 0,
                swipeFallTop: 0,
                swipeTop: -270,
                swipeDown: 200,
                swipeRight: 0,
                swipeLeft: 0,
            });
        },
        opacity: 0,
    },
    middle: {
        transition: middleTransition,
        opacity: 1,
        scale: 1,
        y: ({ height }) => {
            const parsedHeight = Number.parseInt(height) / 10;
            return parsedHeight * 2;
        },
        x: 0,
    },
    secondMiddle: {
        transition: middleTransition,
        scale: 0.95,
        opacity: 1,
        y: ({ height }) => {
            const parsedHeight = Number.parseInt(height) / 10;
            return parsedHeight;
        },
        x: 0,
    },
    in: {
        transition: cornersTransition,
        scale: 0.90,
        opacity: 1,
        y: 0,
        x: 0,
    },
});
const StyledUl = styled_components_1.default.div `
  height: ${Style.liHeight};
  width: ${Style.liWidth}; 
  position: relative;
  z-index: -1;
`;
const fadeOut = styled_components_1.keyframes `
  0% opacity: 1;
  25% opacity: 0.8;
  100% opacity: 0;
`;
const StyledLi = styled_components_1.default(Li) `
  background: ${Style.bgColor};
  background-image: url(${Style.bgImage});
  transform-origin: ${Style.transform};
  animation: 1s ${Style.anim} ease-out;
  clip-path: ${Style.clipPath};
  height: ${Style.liHeight};
  width: ${Style.liWidth};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  list-style: none;
  z-index: -1;
  left: 0;
  top: 0;
`;
class TinderLikeCard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            stateOfContent: "",
            content: [],
            current: 0,
            list: [],
        };
        this.firstMount = (props) => {
            if (this.state.list.length === 0 && props !== undefined) {
                const newList = this.state.list;
                for (let i = 0; i < 3; i++) {
                    newList.push({
                        val: props[i],
                        out: "",
                        in: "",
                        middle: "",
                    });
                }
                const newContent = props.slice(3);
                this.setState({ list: newList, content: newContent });
            }
        };
        this.swipe = () => {
            const { current, list } = this.state;
            const newList = this.state.list;
            const currentContent = this.state.content;
            newList.push({
                val: currentContent[0],
                out: "",
                in: "in",
                middle: "",
            });
            newList[current].out = "out";
            if (newList[current].out === "out") {
                newList[current].middle = "";
                newList[current + 1].middle = "middle";
                newList[current + 2].middle = "secondMiddle";
            }
            newList[list.length - 2].in = "";
            this.setState({
                list: newList,
                content: currentContent.slice(1),
                current: this.state.current += 1,
            });
        };
    }
    componentDidMount() {
        if (this.props.images === undefined) {
            this.firstMount(this.props.colors);
            this.setState({ stateOfContent: "colors" });
        }
        else {
            this.firstMount(this.props.images);
            this.setState({ stateOfContent: "images" });
        }
    }
    render() {
        const { list } = this.state;
        const props = this.props;
        const newList = !list.length ? "" : list.map((card, key) => (React.createElement(StyledLi, { pose: [card.out, card.out2, card.middle, card.in], bgStatus: this.state.stateOfContent, direction: props.direction, duration: props.duration, height: props.height, background: card.val, width: props.width, order: key, key: key }, Array.isArray(props.children) ? props.children[key] : props.children))).reverse();
        return (React.createElement(StyledUl, { className: props.className, height: this.props.height, width: this.props.width }, newList));
    }
}
exports.TinderLikeCard = TinderLikeCard;
exports.default = TinderLikeCard;
//# sourceMappingURL=TinderLikeCard.js.map