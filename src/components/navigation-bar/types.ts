import {ReactElement} from 'react';

export interface NavigationBarProps {
  composedTitleContent?: ReactElement | Array<ReactElement> | null;
  title?: string | undefined;
  leftContent?: ReactElement | Array<ReactElement> | null;
  rightContent?: ReactElement | Array<ReactElement> | null;
  handleLeftContentPress?: () => void;
  bottomDivider?: boolean;
  customHorizontalMargin?: number | undefined;
}
