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
import Header from '../../../components/Header';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData';
import { getBlogID } from '../../../services/articles';
import Loding from '../../../components/Loading';
function ArticleDetailPage() {
  const { id } = useParams();

  const { data, loading } = useFetchData({
    requestFn: async () => await getBlogID(id),
    dependecy: [id],
  });

  return (
    <>
      <Header />
      {loading ? (
        <Loding />
      ) : (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          m={'20px'}
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '600px' }}
            src={data?.cover_url}
            alt={data?.title}
          />

          <Stack>
            <CardBody>
              <Heading size="2xl">{data?.title}</Heading>
              <Text py="2" fontSize={'md'} color={'gray'}>
                {data?.created}
              </Text>
              <Text fontSize={'xl'} py="2">
                {data?.desc}
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="teal">
                Save
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      )}
    </>
  );
}

export default ArticleDetailPage;
