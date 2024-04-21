import React from 'react';
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';

function BlogCard({ title, desc, cover_url, created, id, onReadMore }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="filled"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={cover_url}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">{desc}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="teal" onClick={onReadMore}>
            Read more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default BlogCard;
