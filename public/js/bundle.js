(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var AddArtistActions = (function () {
  function AddArtistActions() {
    _classCallCheck(this, AddArtistActions);

    this.generateActions('addArtistSuccess', 'addArtistFail', 'updateName', 'updateBody', 'invalidName', 'invalidBody');
  }

  _createClass(AddArtistActions, [{
    key: 'addArtist',
    value: function addArtist(name, body) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/artists',
        data: { name: name, body: body }
      }).done(function (data) {
        _this.actions.addArtistSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addArtistFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddArtistActions;
})();

exports['default'] = _alt2['default'].createActions(AddArtistActions);
module.exports = exports['default'];

},{"../alt":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var FooterActions = (function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions('getTopArtistsSuccess', 'getTopArtistsFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopArtists',
    value: function getTopArtists() {
      var _this = this;

      $.ajax({ url: '/api/artists/top' }).done(function (data) {
        _this.actions.getTopArtistsSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTopArtistsFail(jqXhr);
      });
    }
  }]);

  return FooterActions;
})();

exports['default'] = _alt2['default'].createActions(FooterActions);
module.exports = exports['default'];

},{"../alt":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var NavbarActions = (function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getArtistCountSuccess', 'getArtistCountFail', 'findArtistSuccess', 'findArtistFail');
  }

  _createClass(NavbarActions, [{
    key: 'findArtist',
    value: function findArtist(payload) {
      var _this = this;

      $.ajax({
        url: '/api/artists/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findArtistSuccess(payload);
      }).fail(function () {
        _this.actions.findArtistFail(payload);
      });
    }
  }, {
    key: 'getArtistCount',
    value: function getArtistCount() {
      var _this2 = this;

      $.ajax({ url: '/api/artists/count' }).done(function (data) {
        _this2.actions.getArtistCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getArtistCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
})();

exports['default'] = _alt2['default'].createActions(NavbarActions);
module.exports = exports['default'];

},{"../alt":4,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesAddArtistStore = require('../stores/AddArtistStore');

var _storesAddArtistStore2 = _interopRequireDefault(_storesAddArtistStore);

var _actionsAddArtistActions = require('../actions/AddArtistActions');

var _actionsAddArtistActions2 = _interopRequireDefault(_actionsAddArtistActions);

var AddArtist = (function (_React$Component) {
  _inherits(AddArtist, _React$Component);

  function AddArtist(props) {
    _classCallCheck(this, AddArtist);

    _get(Object.getPrototypeOf(AddArtist.prototype), 'constructor', this).call(this, props);
    this.state = _storesAddArtistStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(AddArtist, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesAddArtistStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesAddArtistStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var body = this.state.body;

      if (!name) {
        _actionsAddArtistActions2['default'].invalidName();
        this.refs.nameTextField.getDOMNode().focus();
      }

      if (!body) {
        _actionsAddArtistActions2['default'].invalidBody();
      }

      if (name && body) {
        _actionsAddArtistActions2['default'].addArtist(name, body);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-8' },
            _react2['default'].createElement(
              'div',
              { className: 'panel panel-default' },
              _react2['default'].createElement(
                'div',
                { className: 'panel-heading' },
                'Add artist'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'panel-body' },
                _react2['default'].createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.nameValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Title'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                      onChange: _actionsAddArtistActions2['default'].updateName, autoFocus: true }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.bodyValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Artist Description'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'bodyTextField', value: this.state.body,
                      onChange: _actionsAddArtistActions2['default'].updateBody }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddArtist;
})(_react2['default'].Component);

exports['default'] = AddArtist;
module.exports = exports['default'];

},{"../actions/AddArtistActions":1,"../stores/AddArtistStore":12,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Navbar2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Footer":7,"./Navbar":9,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesFooterStore = require('../stores/FooterStore');

var _storesFooterStore2 = _interopRequireDefault(_storesFooterStore);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this, props);
    this.state = _storesFooterStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesFooterStore2['default'].listen(this.onChange);
      _actionsFooterActions2['default'].getTopArtists();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesFooterStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var leaderboardArtists = this.state.artists.map(function (artist) {
        return _react2['default'].createElement(
          'li',
          { key: artist.artistId },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/artists/' + artist.artistId },
            _react2['default'].createElement('img', { className: 'thumb-md', src: '/public/img/' + artist.artistId + '.png' })
          )
        );
      });

      return _react2['default'].createElement(
        'footer',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-5' },
              _react2['default'].createElement(
                'h3',
                { className: 'lead' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Copyright'
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/rfarine/nameitlater' },
                  'Source Code'
                ),
                ' on GitHub.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                '© 2015 Rae Farine'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-7 hidden-xs' },
              _react2['default'].createElement(
                'h3',
                { className: 'lead' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Leaderboard'
                ),
                ' Top 5 Artists'
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'list-inline' },
                leaderboardArtists
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

},{"../actions/FooterActions":2,"../stores/FooterStore":13,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from Home Component'
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesNavbarStore = require('../stores/NavbarStore');

var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
    this.state = _storesNavbarStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesNavbarStore2['default'].listen(this.onChange);
      _actionsNavbarActions2['default'].getArtistCount();

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _actionsNavbarActions2['default'].updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _actionsNavbarActions2['default'].updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _actionsNavbarActions2['default'].updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesNavbarStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _actionsNavbarActions2['default'].findArtist({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm.getDOMNode(),
          router: this.context.router
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2['default'].createElement(
          'div',
          { className: 'navbar-header' },
          _react2['default'].createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2['default'].createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2['default'].createElement('span', { className: 'icon-bar' }),
            _react2['default'].createElement('span', { className: 'icon-bar' }),
            _react2['default'].createElement('span', { className: 'icon-bar' })
          ),
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2['default'].createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri' }),
              _react2['default'].createElement('div', { className: 'tri invert' }),
              _react2['default'].createElement('div', { className: 'tri' }),
              _react2['default'].createElement('div', { className: 'tri invert' })
            ),
            'NEF',
            _react2['default'].createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2['default'].createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2['default'].createElement(
              'div',
              { className: 'input-group' },
              _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalArtists + ' Artists', value: this.state.searchQuery, onChange: _actionsNavbarActions2['default'].updateSearchQuery }),
              _react2['default'].createElement(
                'span',
                { className: 'input-group-btn' },
                _react2['default'].createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2['default'].createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/stats' },
                'Stats'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'dropdown' },
              _react2['default'].createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Top 100 ',
                _react2['default'].createElement('span', { className: 'caret' })
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top' },
                    'Top Overall'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top/baking' },
                    'Baking'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/baking/apple-pie' },
                        'Apple Pie'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/baking/chocolate-cake' },
                        'Chocolate Cake'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/baking/blueberry-crumble' },
                        'Blueberry Crumble'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/top/dinner' },
                    'Dinner'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/dinner/roasted-asparagus' },
                        'Roasted Asparagus'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/dinner/stirfry' },
                        'Stirfry'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/top/dinner/lasagna' },
                        'Lasagna'
                      )
                    )
                  )
                ),
                _react2['default'].createElement('li', { className: 'divider' }),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/shame' },
                    'Hall of Shame'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/add' },
                'Add'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
})(_react2['default'].Component);

Navbar.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Navbar;
module.exports = exports['default'];

},{"../actions/NavbarActions":3,"../stores/NavbarStore":14,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":11,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsAddArtist = require('./components/AddArtist');

var _componentsAddArtist2 = _interopRequireDefault(_componentsAddArtist);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/add', handler: _componentsAddArtist2['default'] })
);
module.exports = exports['default'];

},{"./components/AddArtist":5,"./components/App":6,"./components/Home":8,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAddArtistActions = require('../actions/AddArtistActions');

var _actionsAddArtistActions2 = _interopRequireDefault(_actionsAddArtistActions);

var AddArtistStore = (function () {
  function AddArtistStore() {
    _classCallCheck(this, AddArtistStore);

    this.bindActions(_actionsAddArtistActions2['default']);
    this.name = '';
    this.body = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.bodyValidationState = '';
  }

  _createClass(AddArtistStore, [{
    key: 'onAddArtistSuccess',
    value: function onAddArtistSuccess(successMessage) {
      this.nameValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddArtistFail',
    value: function onAddArtistFail(errorMessage) {
      this.nameValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateBody',
    value: function onUpdateBody(event) {
      this.body = event.target.value;
      this.bodyValidationState = '';
    }
  }, {
    key: 'onInvalidName',
    value: function onInvalidName() {
      this.nameValidationState = 'has-error';
      this.helpBlock = 'Please enter a artist name.';
    }
  }, {
    key: 'onInvalidBody',
    value: function onInvalidBody() {
      this.bodyValidationState = 'has-error';
    }
  }]);

  return AddArtistStore;
})();

exports['default'] = _alt2['default'].createStore(AddArtistStore);
module.exports = exports['default'];

},{"../actions/AddArtistActions":1,"../alt":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var FooterStore = (function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_actionsFooterActions2['default']);
    this.artists = [];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopArtistsSuccess',
    value: function onGetTopArtistsSuccess(data) {
      this.artists = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopArtistsFail',
    value: function onGetTopArtistsFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
})();

exports['default'] = _alt2['default'].createStore(FooterStore);
module.exports = exports['default'];

},{"../actions/FooterActions":2,"../alt":4}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var NavbarStore = (function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_actionsNavbarActions2['default']);
    this.totalArtists = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindArtistSuccess',
    value: function onFindArtistSuccess(payload) {
      payload.router.transitionTo('/artists/' + payload.artistId);
    }
  }, {
    key: 'onFindArtistFail',
    value: function onFindArtistFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetArtistCountSuccess',
    value: function onGetArtistCountSuccess(data) {
      this.totalArtists = data.count;
    }
  }, {
    key: 'onGetArtistCountFail',
    value: function onGetArtistCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
})();

exports['default'] = _alt2['default'].createStore(NavbarStore);
module.exports = exports['default'];

},{"../actions/NavbarActions":3,"../alt":4}]},{},[10]);
