import React, {useEffect, useRef, useState} from 'react';
import Box from '_atoms/Box/Box';
import Button from '_atoms/Button/Button';
import {Text} from '_atoms/index';

type TabsProps = {
  config: ConfigType[];
};
type ConfigType = {
  text: string;
  func?: () => void;
};
const Tabs = ({config}: TabsProps) => {
  const [tabsPosition, settabsPosition] = useState(0);

  useEffect(() => {}, []);

  const handlePress = (position: number, func: any) => () => {
    if (position !== tabsPosition) {
      settabsPosition(position);
      if (func) {
        func();
      }
    }
  };
  return (
    <Box
      height="35px"
      bg="backgroundSecondary"
      borderRadius="10px"
      flexDirection="row"
      p="3px"
      mx="18px">
      {config.map((c, i) => (
        <Box
          bg={i === tabsPosition ? 'background' : 'transparent'}
          flexBasis={`${100 / config.length}%`}
          borderRadius="8px"
          justifyContent="center">
          <Button
            fullwidth
            text={c.text}
            textProps={{fontWeight: 'bold'}}
            onPress={handlePress(i, c.func)}
            activeOpacity={i === tabsPosition ? 1 : 0.7}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Tabs;
