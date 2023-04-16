'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
function FooterPost({ data }) {
   const users = []
   for (let i = 0; i < 5; i++) {
      if(data.likes?.users.length > 0){
         users.push({...data.likes?.users[i]})
      }
   }
   return (
      <div className="footer">
         <div className="likes">
            <div className="heart">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
               <span>{data?.likes?.total}</span>
            </div>
            {
               users?.length > 0 && (
                  <>
                     <div className="users-like-img">
                        {
                           users?.map((user, i) => (
                              <span key={i} >
                                 <Image alt="like" src={user.img} width={30} height={30} />
                              </span>
                           ))
                        }
                        </div>
                        <div className="user-like-name">
                           <p>{users[0].name}, {users[1].name} <span>and</span></p>
                           <p>{users.total} more likes this</p>
                        </div>
                  </>
               )
            }
         </div>
         <div className="share">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
               <p>{data.comments?.total}</p>
            </div>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
               <p>{data?.share}</p>
            </div>
         </div>
      </div>
   )
}

export default FooterPost