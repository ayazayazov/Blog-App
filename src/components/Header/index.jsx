import { Box, Stack, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constants/router';

function Header() {
  const navigate = useNavigate();

  return (
    <Box
      bgColor="teal"
      color="white"
      alignItems="center"
      display={'flex'}
      justifyContent={'space-between'}
      flexDirection="row"
      p="10px 20px"
      position="sticky"
      top={'0'}
      w={'100%'}
      zIndex={1}
    >
      <Text fontSize={48} fontWeight="900">
        Blog
      </Text>
      <Stack direction="row" spacing={4} align="center">
        <Button
          colorScheme="white"
          variant="link"
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          colorScheme="white"
          variant="link"
          onClick={() => navigate(ROUTER.ABOUT)}
        >
          About
        </Button>
        <Button
          colorScheme="white"
          variant="link"
          onClick={() => navigate(ROUTER.ARTICLES)}
        >
          Articles
        </Button>
        <Button
          colorScheme="white"
          variant="link"
          onClick={() => navigate(ROUTER.FAVORITE)}
        >
          Favorites
        </Button>
        <Button
          colorScheme="white"
          variant="link"
          onClick={() => navigate(ROUTER.FAQ)}
        >
          FAQ
        </Button>
        <Button variant="solid" onClick={() => navigate(ROUTER.CREATE_ARTICLE)}>
          Create your article
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
