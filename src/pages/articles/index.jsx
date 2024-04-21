import React from 'react';
import { Box, Input, SimpleGrid, Spinner } from '@chakra-ui/react';
import Header from '../../components/Header';
import BlogCard from '../../components/BlogCard';
import NavigationShow from '../../components/NavigationShow';
import { getBlogs } from '../../services/articles';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../constants/router';
import { useFetchData } from '../../hooks/useFetchData';
import Loding from '../../components/Loading';
function ArticlePage() {
  const navigate = useNavigate();

  const { data, loading, error } = useFetchData({
    requestFn: () => getBlogs(),
  });

  return (
    <>
      <Header />

      <Box p="20px">
        <NavigationShow />
        <Input placeholder="Search" />
      </Box>
      {loading ? (
        <Loding />
      ) : (
        <SimpleGrid columns={{ sm: 2 }} spacing="10" p="40px 20px">
          {data
            ?.filter((item) => item.id > 100)
            .reverse()
            ?.map((item) => (
              <BlogCard
                key={item.id}
                {...item}
                onReadMore={() => navigate(`${ROUTER.ARTICLES}/${item.id}`)}
              />
            ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticlePage;
