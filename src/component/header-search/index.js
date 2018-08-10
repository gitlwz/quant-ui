import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import Icon from '../icon';
import AutoComplete from '../auto-complete';
import classNames from 'classnames';

export default class HeaderSearch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onPressEnter: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    dataSource: PropTypes.array,
    defaultOpen: PropTypes.bool,
  };

  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => {},
    onSearch: () => {},
    className: '',
    placeholder: '',
    dataSource: [],
    defaultOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchMode: props.defaultOpen,
      value: '',
    };
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.debouncePressEnter();
    }
  };

  onChange = value => {
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) {
      onChange();
    }
  };

  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      const { searchMode } = this.state;
      if (searchMode) {
        this.input.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  };

  debouncePressEnter() {
    const { onPressEnter } = this.props;
    const { value } = this.state;
    onPressEnter(value);
  }

  
  render() {
    const { className, placeholder, ...restProps } = this.props;
    const { searchMode, value } = this.state;
    delete restProps.defaultOpen; // for rc-select not affected
    const inputClass = classNames('quant-headerSearch-input', {
      ['quant-headerSearch-show']: searchMode,
    });
    return (
      <span className={classNames(className, 'quant-headerSearch')} onClick={this.enterSearchMode}>
        <Icon type="search" key="Icon" />
        <AutoComplete
          key="AutoComplete"
          {...restProps}
          className={inputClass}
          value={value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={node => {
              this.input = node;
            }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    );
  }
}
