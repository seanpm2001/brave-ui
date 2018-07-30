"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../components/layout/gridList/index");
class DisabledContent extends React.PureComponent {
    render() {
        const { id, image, theme, children } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(index_1.Grid, { columns: 3, theme: { gridGap: '32px', alignItems: 'center' } },
                React.createElement(index_1.Column, { size: 1, theme: { justifyContent: 'flex-end' } },
                    React.createElement(style_1.StyledImage, { src: image })),
                React.createElement(index_1.Column, { size: 2 },
                    React.createElement(style_1.StyledContent, { theme: theme }, children)))));
    }
}
exports.default = DisabledContent;
//# sourceMappingURL=index.js.map