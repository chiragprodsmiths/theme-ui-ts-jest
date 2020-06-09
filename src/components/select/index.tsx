/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select, { components } from 'react-select';
import { Flex, Text } from 'theme-ui';
import Colors from '../../theme/theme.colors';

type ValueContainerPropTypes = {
  hasValue: boolean;
  selectProps: any;
  children: any;
  placeholder: string;
};

const ValueContainer = (props: ValueContainerPropTypes) => {
  console.log('select props', props);
  const defaultLabel =
    props.hasValue || props.selectProps.menuIsOpen ? 'selectPlaceholderHasValue' : 'selectPlaceholder';
  const errorLabel = props.hasValue ? 'selectPlaceholderHasValueError' : 'selectPlaceholderError';
  const placeholderVariant = props.selectProps.error ? errorLabel : defaultLabel;
  return (
    <Flex sx={{ flex: 1 }}>
      <Text variant={placeholderVariant}>{props.selectProps.placeholder}</Text>
      <components.ValueContainer {...props}>{props.children}</components.ValueContainer>
    </Flex>
  );
};

// Select Custom Styles
const CustomStyles = (error: boolean) => {
  return {
    container: (base: any) => ({
      ...base,
      width: '100%',
    }),
    control: (base: any, state: any) => {
      const defaultBorder = state.menuIsOpen || state.hasValue ? Colors.link : Colors.border;
      return {
        ...base,
        borderWidth: 1,
        borderColor: error ? Colors.error : defaultBorder,
        borderRadius: 4,
        background: 'white',
        boxShadow: 'none',
        minHeight: 48,
        ':hover': {
          borderColor: error ? Colors.error : Colors.link,
        },
      };
    },
    dropdownIndicator: (base: any, state: { selectProps: { menuIsOpen: any } }) => ({
      ...base,
      padding: '7px 8px',
      ...(state.selectProps.menuIsOpen
        ? {
            transition: 'all .2s ease',
            transform: 'rotate(180deg)',
          }
        : {}),
    }),
    indicatorSeparator: () => ({}),
    menu: (base: any) => ({
      ...base,
      margin: 0,
      backgroundColor: Colors.white,
      borderRadius: 0,
      width: '100%',
      right: 0,
    }),
    // singleValue: (base: any, state: { selectProps: { menuIsOpen: any } }) => ({
    singleValue: (base: any) => ({
      ...base,
      overflow: 'initial',
      color: Colors.text,
      lineHeight: 1.4,
      fontSize: 16,
    }),
    option: (base: any, state: { isSelected: any; isFocused: any }) => {
      const defaultBg = state.isFocused ? Colors.primary : Colors.white;
      const defaultColor = state.isFocused ? Colors.white : Colors.text;
      return {
        ...base,
        padding: '12px 16px',
        fontSize: 16,
        backgroundColor: state.isSelected ? Colors.white : defaultBg,
        color: state.isSelected ? Colors.primary : defaultColor,
      };
    },
    valueContainer: (base: any) => ({
      ...base,
      padding: '12px',
      overflow: 'initial',
    }),
    placeholder: (base: any, state: any) => ({
      ...base,
      color: state.hasValue ? Colors.link : Colors.textLight,
      transform: state.hasValue ? 'translate(0, -31px)' : 'translate(0, -11px)',
      fontSize: state.hasValue ? 14 : 16,
      backgroundColor: Colors.white,
      paddingLeft: 2,
      paddingRight: 2,
    }),
    // input: (base) => ({ ...base }),
  };
};

type PropTypes = {
  error?: boolean;
  placeholder?: string;
  options: Record<object, any>;
};

const SelectDropdown: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <Select
      classNamePrefix="select"
      isSearchable={false}
      components={{ ValueContainer }}
      styles={{ ...CustomStyles(props.error) }}
      {...props}
    />
  );
};

SelectDropdown.defaultProps = {
  error: false,
  placeholder: 'Select',
  options: [],
};

export default SelectDropdown;
