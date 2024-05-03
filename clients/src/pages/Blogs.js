import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blogs");
      if (data?.success) {
        setBlogs(data?.blogs);
      } else {
        console.error("Failed to fetch blogs:", data?.error);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log( blogs);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} username={blog.user.username} />
      ))}
    </div>
  );
};

export default Blogs;
