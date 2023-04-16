'use client'

import Post from "./Post";

function Posts({ data }) {
  return (
    <div className="posts">
        {
            data.length > 0 ? (
               <>
                {
                    data.map((post, i) =>(
                        <div key={i} className="post">
                            <Post post={post} />
                        </div>
                    ))
                }
               </>
            ):
            (
                <div className="not-posts">
                    <p>Not Found Posts ...</p>
                </div>
            )
        }
    </div>
  )
}

export default Posts