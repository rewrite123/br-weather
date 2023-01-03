import React, { HTMLProps } from 'react';
import StylingPropsInterface from '../../interfaces/StylingPropsInterface';

export interface BRWTitlePropsInterface extends StylingPropsInterface {
  titleType?: 'full' | 'br';
}

const BRWTitle = (props: BRWTitlePropsInterface) => {
  return (
    <div
      className={`brw-title ${props.className || ''}`.trim()} // Add any provided classnames to brw-title
      style={props.style || undefined}
    >
      <div className="brw-title-br">
        <div className="brw-title-br-center">BR&deg;</div>
      </div>
      <div className="brw-title-weather">&nbsp;Weather</div>
    </div>
  );
};
BRWTitle.defaultProps = {
  titleType: 'full',
};
export default BRWTitle;
