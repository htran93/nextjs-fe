import { getBlogList } from "../../services/post";
import Link from "next/link";

const BlogList = (props) => {
  const { posts } = props;

  return (
    <div>
      <h1>Blogs Page</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>
              <a>
                <h3>{item.title}</h3>
              </a>
            </Link>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const postsData = await getBlogList();
  return {
    props: {
      posts: postsData,
    },
  };
};
export default BlogList;
