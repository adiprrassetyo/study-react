import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getPost = async () => {
      const posts = await axios.get(
        "https://reactjsdataexercise.eternityinvitation.com/public/api/posts"
      );
      setPosts(posts.data.data.data);
      setLoading(false);
    };

    setTimeout(() => {
      getPost();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1 className="mb-5 text-xl font-bold">POSTS</h1>
      {loading ? (
        <p className="text-center">Sabar ya lagi loading ...</p>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                no
              </th>
              <th scope="col" className="py-3 px-6">
                title
              </th>
              <th scope="col" className="py-3 px-6">
                content
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={post.id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {post.id}
                  </th>
                  <td className="py-4 px-6">{post.title}</td>
                  <td className="py-4 px-6">
                    Ini merupakan bagian dari {post.content}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
