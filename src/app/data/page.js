// src/app/data/page.js
import styles from '@/app/page.module.css';

// Function to fetch posts from the API
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

// Main component for the Data Page
export default async function DataPage() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
            <h4 className={styles.postTitle}>{post.title}</h4>
            <p className={styles.postContent}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
