import React from 'react';
import { ColorPicker } from 'antd';

export default () => {
  const [color, setColor] = React.useState<any>('#1677ff');

  return (
    <ColorPicker
      value={color}
      allowClear
      onChange={(c) => {
        setColor(c.toHexString());
      }}
    />
  );
};
