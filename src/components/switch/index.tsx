import * as React from 'react';
import {Switch as SwitchPaper} from 'react-native-paper';

const Switch = props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SwitchPaper {...props} value={isSwitchOn} onValueChange={onToggleSwitch} />
  );
};

export default Switch;
