import React from "react"

import Layout from "../components/layout"
import PostList from "../components/postlist"
import "./pages.css"

const Blog = () => {
    return (
        <Layout>
            <div>
                <PostList />
            </div>
        </Layout>
    )
}

export default Blog