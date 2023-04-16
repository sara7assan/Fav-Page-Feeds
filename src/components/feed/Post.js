"use client"
import Image from "next/image";
import PostImages from "./PostImages";
import FooterPost from "./FooterPost";
import { useState, useEffect } from "react";
import Btn from "./Btn";

function Post({ post: user }) {
  return (
    <>
      {
        user && (
          <>
            <div className="info">
              <div className="user">
                <Image alt="avetar" src={user.user.avetar} width={50} height={50}/>
                <div className="name">
                  <p>{user.user.name}</p>
                  <p>{user.user.time}</p>
                </div>
              </div>
              <div className="drop-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                <div className="menu-info">
                  <a href="#">Edit post</a>
                  <a href="#">Delete post</a>
                  <a href="#">Turn off Notifications</a>
                  <a href="#">Select as Featured</a>
                </div>
              </div>
            </div>
            <div className="title">
              <p>{user.post.title}</p>
            </div>
            {
              user.post.images.length > 0 && (
                <div className="images" >
                  <PostImages imgs={user.post.images} />
                </div>
              )
            }
            <FooterPost data={user.post.footer} />
            <Btn />
          </>
          
          )
        }
      </>
  );
}

export default Post;
