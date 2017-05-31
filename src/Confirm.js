'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

// var _require = require('react-bootstrap');

// var Button = _require.Button;
// var Modal = _require.Modal;

var Modal = require('react-bootstrap-modal')

var Confirm = function (_React$Component) {
    _inherits(Confirm, _React$Component);

    function Confirm(props) {
        _classCallCheck(this, Confirm);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Confirm).call(this, props));

        _this.state = {
            isOpened: props.visible
        };
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        _this.onConfim = _this.onConfim.bind(_this);
        return _this;
    }

    _createClass(Confirm, [{
        key: 'onButtonClick',
        value: function onButtonClick() {
            this.setState({
                isOpened: true
            });
        }
    }, {
        key: 'onClose',
        value: function onClose() {
            this.setState({
                isOpened: false
            });
        }
    }, {
        key: 'onConfim',
        value: function onConfim() {
            this.setState({
                isOpened: false
            });
            this.props.onConfirm();
        }
    }, {
        key: 'render',
        value: function render() {
            // var cancelButton = this.props.showCancelButton ? React.createElement(
            //     Button,
            //     { bsStyle: 'default', onClick: this.onClose },
            //     this.props.cancelText
            // ) : null;
            // var closeButton = this.props.showCancelButton ? React.createElement(
            //     Button,
            //     { bsStyle: 'default', onClick: this.onClose },
            //     '×'
            // ) : null;

            // var cancelButton = <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>

            var icon = this.props.icon ? React.createElement(
                'img',
                {src: this.props.icon, alt: ""}
            ) : null;
 
            var modal = React.createElement(
                Modal,
                { show: this.state.isOpened, onHide: this.onClose, id: 'confirmation_dialog' },
                React.createElement(
                    Modal.Header,
                    null,
                    // closeButton,
                    React.createElement(
                      Modal.Dismiss,
                      {className: 'close'},
                      '×'  
                    ),
                    React.createElement(
                        'h3',
                        {className: 'modal-title'},
                        this.props.title
                    )
                ),
                React.createElement(
                    Modal.Body,
                    null,
                    icon,
                    React.createElement(
                        'div',
                        null,
                        this.props.body
                    )
                ),
                React.createElement(
                    Modal.Footer,
                    null,
                    React.createElement(
                        Modal.Dismiss,
                        {className: 'btn btn-default'},
                        'Cancel'
                    ),
                    // cancelButton,
                    React.createElement(
                        'button',
                        { onClick: this.onConfim, className: `btn btn-${this.props.confirmBSStyle}` },
                        this.props.confirmText
                    )
                )
            );
            var content;
            if (this.props.children) {
                var btn = React.Children.only(this.props.children);
                content = React.cloneElement(btn, {
                    onClick: this.onButtonClick,
                    style: this.props.style
                }, btn.props.children, modal);
            } else {
                content = React.createElement(
                    Button,
                    { onClick: this.onButtonClick, style: this.props.style },
                    this.props.buttonText,
                    modal
                );
            }
            return content;
        }
    }]);

    return Confirm;
}(React.Component);

Confirm.propTypes = {
    body: PropTypes.node.isRequired,
    buttonText: PropTypes.node,
    cancelText: PropTypes.node,
    confirmBSStyle: PropTypes.string,
    confirmText: PropTypes.node,
    onConfirm: PropTypes.func.isRequired,
    showCancelButton: PropTypes.bool.isRequired,
    title: PropTypes.node.isRequired,
    visible: PropTypes.bool
};

Confirm.defaultProps = {
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    confirmBSStyle: 'danger',
    showCancelButton: true
};

module.exports = Confirm;