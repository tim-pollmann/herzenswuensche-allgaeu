// import styles from '../styles/Content.module.css';
import WithId from 'mongodb';
import connectToDb from '../libs/mongodb';

interface Props {
  posts: WithId.WithId<WithId.Document>[]
}

export async function getStaticProps() {
  const { db } = await connectToDb();

  const posts = await db
    .collection('aktuelles')
    .find({})
    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Aktuelles(props: Props) {
  const { posts } = props;

  return (
    <>
      <h1>Aktuelles</h1>
      <ol>
        {posts.map((post) => {
          const date = new Date(post.date);
          return (
            <li key={post._id.toString()}>
              <p>
                {date.getDate()}
                .
                {date.getMonth()}
                .
                {date.getFullYear()}
              </p>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          );
        })}
      </ol>

    </>
  );
}
