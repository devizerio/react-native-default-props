export default (Component, props) => {
  const oProps = Component.prototype.constructor.defaultProps;
  Component.prototype.constructor.defaultProps = { ...oProps, ...props };
  const oRender = Component.prototype.render;
  Component.prototype.render = function render() {
    const prevProps = this.props;
    this.props = { ...this.props, style: [props.style, this.props.style] };
    const result = oRender.apply(this, arguments);
    this.props = prevProps;
    return result;
  };
};
