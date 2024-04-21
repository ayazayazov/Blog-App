import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

function Loding() {
  return (
    <Box display="flex" justifyContent="center">
      <Spinner
        thickness="5px"
        speed="0.4s"
        emptyColor="gray.200"
        color="teal"
        size="xl"
      />
    </Box>
  );
}

export default Loding;
