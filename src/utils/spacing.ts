import {spacing} from 'cons/';

interface SpacingOptions {
  top?: keyof typeof spacing;
  right?: keyof typeof spacing;
  bottom?: keyof typeof spacing;
  left?: keyof typeof spacing;
}

export const getMargins = ({top, right, bottom, left}: SpacingOptions = {}): Record<
  string,
  number
> => {
  return {
    marginTop: top ? spacing[top] : 0,
    marginRight: right ? spacing[right] : 0,
    marginBottom: bottom ? spacing[bottom] : 0,
    marginLeft: left ? spacing[left] : 0,
  };
};

export const getPaddings = ({top, right, bottom, left}: SpacingOptions = {}): Record<
  string,
  number
> => {
  return {
    paddingTop: top ? spacing[top] : 0,
    paddingRight: right ? spacing[right] : 0,
    paddingBottom: bottom ? spacing[bottom] : 0,
    paddingLeft: left ? spacing[left] : 0,
  };
};
