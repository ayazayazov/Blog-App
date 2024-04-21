import React from 'react';
import { Box, Text } from '@chakra-ui/react';
function NotFoundPage() {
  return (
    <>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        404
      </Text>
    </>
  );
}

export default NotFoundPage;
