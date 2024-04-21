import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constants/router';
import NavigationShow from '../../components/NavigationShow';
function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NavigationShow />
      <Box display="flex">
        <Box
          p={'20px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent="space-evenly"
        >
          <Text fontSize="6xl" fontWeight="extrabold">
            Welcome to Blog
          </Text>

          <Text fontSize="2xl" fontWeight="bold">
            Home Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae voluptatibus tempore ab dicta et explicabo, laudantium
            omnis, est eligendi numquam eveniet illo ipsam tenetur vitae
            deserunt. Aliquam, temporibus aperiam. Esse.
          </Text>
          <Button
            width="200px"
            colorScheme="teal"
            onClick={() => navigate(ROUTER.CREATE_ARTICLE)}
          >
            Get started
          </Button>
        </Box>
        <Image
          boxSize="120%"
          src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-5691580-4759512.png"
        />
      </Box>
    </>
  );
}

export default HomePage;
