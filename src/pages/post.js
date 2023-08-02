import React from "react"
import Layout from "../components/layout"
import { useParams, Navigate  } from "react-router-dom"
import Markdown from "react-markdown"

import postlist from "../posts.json"
import "./pages.css"

const Post = () => {
    const { id } = useParams()
    const validId = parseInt(id)
    if (!validId) {
        return <Navigate to="/404"/>
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Navigate to="/404"/>
    }
    return (
        <Layout>
            <div className="post">
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date}</small>
                <hr/>
                <Markdown children={fetchedPost.content}/>
            </div>
        </Layout>
    )
}

export default Post
