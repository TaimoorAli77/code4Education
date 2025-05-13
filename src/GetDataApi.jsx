import React, { useEffect, useState } from "react";
import { getPosts, postPosts, putPosts, deletePosts } from "./LocalApi";
const GetDataApi = () => {
  const [post, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  //Get Request
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const add = () => {
    postPosts(newPost)
      .then((res) => {
        console.log(res.data, "Successfully Added !!!");
        setPosts([...post, res.data]);
        setNewPost({ title: "", body: "" });
      })
      .catch((err) => {
        console.log("err creating post..", err);
      });
  };
  const update = (newPost, id) => {
    putPosts(newPost, id)
      .then((res) => {
        console.log(res.data, "Successfully updated !!!");
        const postedData = post.map((post) =>
          post.id === id ? res.data : post
        );
        setPosts(postedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletethispost = (id) => {
    deletePosts(id)
      .then((res) => {
        console.log(res.data, "Successfully deleted !!!");
        setPosts(post.filter((d) => d.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>POSTs</h1>
      <ul>
        {post.map((d, i) => {
          return (
            <li key={d.id}>
              <h2>{d.title}</h2>
              <p>{d.body}</p>
              <button
                onClick={() => {
                  add(newPost);
                }}
              >
                add
              </button>
              <button
                onClick={() => {
                  update(newPost, d.id);
                }}
              >
                update
              </button>
              <button
                onClick={() => {
                  deletethispost(d.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>

      <form>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={newPost.title}
          onChange={(e) => {
            setNewPost({ ...newPost, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="body"
          name="body"
          value={newPost.body}
          onChange={(e) => {
            setNewPost({ ...newPost, body: e.target.value });
          }}
        />
        <button onSubmit={add}>Submit</button>
      </form>
    </div>
  );
};

export default GetDataApi;
