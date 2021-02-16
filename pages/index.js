import { Spacer, Padding, Row, Col } from '@barelyreaper/rlayouts';
import PostCard from 'components/post-card';
import getPosts from 'lib/get-posts';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

function Index({ posts }) {
  return (
    <>
      <Spacer y={2}></Spacer>
      <Row justify="space-between" align="center">
        <img src="/logo.svg" height="48" width="48" alt="" />
        <Row align="center" justify="center">
          <a href="/work">Work</a>
          <Spacer x={2} inline></Spacer>
          <a href="/collections">Collections</a>
          <Spacer x={2} inline></Spacer>
          <a href="/contact">Contact</a>
        </Row>
      </Row>
      <Col align="center" justify="center">
        <Spacer y={2}></Spacer>
        <h2 align="center">Reaper</h2>
        <Spacer y={1}></Spacer>
        <p>Minimalist . Designer . Developer</p>
      </Col>
      <Spacer y={4}></Spacer>
      <Col>
        <ul>
          {posts.map(({ meta }, index) => (
            <PostCard key={`post-${index}-${meta.slug}`} title={meta.title} date={meta.date} slug={meta.slug} />
          ))}
        </ul>
      </Col>
    </>
  );
}

export default Index;
