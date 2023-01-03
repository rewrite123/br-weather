import React, { HTMLProps, useState } from 'react';
import StylingPropsInterface from '../../interfaces/StylingPropsInterface';

export interface SwitchPropsInterface extends StylingPropsInterface {
  switches: React.ReactNode[]; // Elements we are rendering as options on the switch
  defaultSelected?: number; // index of the selected ^
  onSelect?: (selectedIndex: number) => void;
}

const Switch = (props: SwitchPropsInterface) => {
  // Index of the selected element
  const [selected, setSelected] = useState(
    props.defaultSelected != undefined ? props.defaultSelected : -1,
  );

  return (
    <div
      className={`brw-switch ${props.className || ''}`.trim()} // Add any provided classnames to brw-switch
      style={props.style || undefined}
    >
      <div className="brw-switch-center">
        {props.switches.map((switchElement, switchIndex) => {
          return (
            <div
              key={switchIndex}
              onClick={() => {
                setSelected(switchIndex);
                if (props.onSelect != null) {
                  props.onSelect(switchIndex);
                }
              }}
              className={`brw-switch-el ${
                selected == switchIndex ? 'brw-active' : ''
              }`.trim()}
            >
              {switchElement}
            </div>
          );
        })}
      </div>
    </div>
  );
};
Switch.defaultProps = {
  defaultSelected: -1,
};
export default Switch;
