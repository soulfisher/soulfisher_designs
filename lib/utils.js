import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getMedia = async (id) =>
  fetch(
    //`https://psdtowpwork.com/wp/graptor/main/wp-json/wp/v2/media/${id}`
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/media/${id}`
  ).then((res) => res.json());

export const getAuthor = async (id) =>
  fetch(
    `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/users/${id}`
  ).then((res) => res.json());

export const getCategory = async (id) =>
  fetch(
    `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/categories/${id}`
  ).then((res) => res.json());

export const getPostCategories = async (categoryIds) => {
  const categoryPromises = categoryIds.map((categoryId) =>
    getCategory(categoryId)
  );
  const categories = await Promise.all(categoryPromises);

  return categories;
};

export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const fetchRecentPosts = async () => {
  try {
    // Fetch the most recent 5 posts from the WordPress REST API
    const response = await fetch(
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/posts?per_page=5`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    const recentPosts = posts.map((post) => ({
      name: post.title.rendered,
      slug: post.slug,
    }));

    return recentPosts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    // Fetch all categories from the WordPress REST API
    const response = await fetch(
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/categories`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const categories = await response.json();

    const categoryData = categories
      .filter((category) => category.count > 0)
      .map((category) => ({
        name: category.name,
        slug: category.slug,
        numberOfPost: category.count,
      }));

    return categoryData;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchTags = async () => {
  try {
    const response = await fetch(
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/tags`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const tags = await response.json();

    const tagData = tags.map((tag) => ({
      name: tag.name,
      slug: tag.slug,
    }));

    return tagData;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/posts?slug=${slug}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    if (posts.length > 0) {
      return posts[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};

export const fetchCommentsByPostId = async (postId) => {
  try {
    const response = await fetch(
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/comments?post=${postId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error("Error fetching comments by post ID:", error);
    return [];
  }
};

export const fetchTagsById = async (postId) => {
  try {
    const response = await fetch(
      `https://blog.soulfisherdesigns.pro/wp-json/wp/v2/tags?post=${postId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch tags. Status: ${response.status}`);
    }

    const tags = await response.json();

    return tags.map((tag) => ({
      name: tag.name,
      slug: tag.slug,
    }));
  } catch (error) {
    console.error("Error fetching tags by post ID:", error);
    return [];
  }
};
