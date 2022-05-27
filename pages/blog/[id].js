import { getPostDetail } from '../../services/post'

const BlogDetailPage = (props) => {
  const { post } = props;

  return <div>
    <h1>Blog Detail Page</h1>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const postId = params.id;
  const postDetailData = await getPostDetail(postId);
  return {
    props: {
      post: postDetailData
    }
  }
}

export default BlogDetailPage