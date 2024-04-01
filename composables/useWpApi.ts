

import { Post } from "~~/types/post";
import { Page } from "~~/types/page";

export default () => {
  const config = useRuntimeConfig();
  const WP_URL: string = config.wpUri;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
  };

 

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPage: number = 20,
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<Post[]>(query);
  };


  const getPost = async (slug: string) => {
    return get<Post[]>(`posts?slug=${slug}&_embed=1`);
  };

  const getCatgories = async (fields: string = "name,slug,count") => {
    return get<any>(`categories`);
  };

  const getCategory = async (slug: string) => {
    return get<any>(`categories?slug=${slug}`);
  };

  const getPages = async () => {
  return get<Page[]>(`pages`);
  };
  
  const getPageBySlug = async (slug: string) => {
  return get<Page[]>(`pages?slug=${slug}`);
};

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCategory,
    getPages,
    getPageBySlug
  };
};
