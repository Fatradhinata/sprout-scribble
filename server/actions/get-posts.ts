"use server"

import { db } from "@/server"
import { posts } from "../schema"

export default async function getPosts(){
  const posts = await db.query.posts.findMany();
  let errorBol = true;

  if (!errorBol) {
    return {error: "No posts found"}
  }
  return { success: posts }
}