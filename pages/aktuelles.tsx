import React from 'react';
import WithId, { ObjectId } from 'mongodb';
import styles from '../styles/Content.module.css';
// import connectToDb from '../libs/mongodb';

interface Props {
  posts: WithId.WithId<WithId.Document>[]
}

export async function getStaticProps() {
  // const { db } = await connectToDb();

  // const posts = await db
  //   .collection('aktuelles')
  //   .find({})
  //   .toArray();

  const posts = [
    {
      _id: new ObjectId('633b13828462f9549a7062e6'),
      content: "Lorem Ipsum has been the industry's standard dummy text ever since the",
      date: '2022-10-03T16:53:22.205Z',
      public: true,
      title: 'Test 2',
    },
  ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Aktuelles(props: Props) {
  const { posts } = props;

  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>Aktuelles</h1>
        {posts.map((post) => {
          const date = new Date(post.date);
          return (
            <article key={post._id.toString()}>
              <p>
                {date.getDate()}
                .
                {date.getMonth()}
                .
                {date.getFullYear()}
              </p>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}
