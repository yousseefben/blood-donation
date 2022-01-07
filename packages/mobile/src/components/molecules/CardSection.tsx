import React, {ReactNode} from 'react';
import Text from '_atoms/Text/Text';
import Box from '_atoms/Box/Box';

type Props = {
  title: string;
  children: ReactNode;
  hasAction?: boolean;
  onAction?: any;
};
const CardSection = ({children, title, hasAction, onAction, bg}: Props) => {
  return (
    <Box p="20px" bg={bg || '#FFF'}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        mb="30px"
        alignItems="center">
        <Text fontSize="19px">{title}</Text>
        {hasAction && (
          <Text color="textSecondary" fontSize="12px" onPress={onAction}>
            view all
          </Text>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default CardSection;
