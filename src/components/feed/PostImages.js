'use client';
import Image from "next/image"
import  { useState } from "react"
function PostImages({ imgs }) {
   const [ show, setShow ] = useState(false)
   return (
      <>
         {
            imgs.length < 3 ? (
               <>
                  {
                     imgs.map((img, i) => (
                        img.type == "img"? (
                           <Image key={i} src={img.src} alt="post-img" className={imgs.length == 2 ? "hwidth" : ""} loading="lazy" width={500} height={500} />
                        ): (
                           <div className="videos" key={i} onClick={_=> setShow(state => !state)}>
                           {
                              show ? (
                                 <video autoPlay muted loop poster={img.src}>
                                    <source type="video/mp4" src={img.src}></source>
                                    <source type="video/webm" src={img.gif}></source>
                                 </video>
                                 ): (
                                    <>
                                       <Image src={img.gif} alt="gif" width={500} height={500}/>
                                       <ins >Gif</ins>
                                    </>
                                 )
                           }
                           </div>
                        )
                     ))
                  }
               </>
            ) : (
               <div className="multi-img">
               {
                  imgs.map((img, i) => (
                     img.type == "img"? (
                        <span key={i}>
                           <Image  src={img.src} alt="post-img" width={500} height={500} loading="lazy" />
                        </span>
                        
                     ): (
                        <div className="videos" key={i} onClick={_=> setShow(state => !state)}>
                           {
                              show ? (
                                 <video autoPlay muted loop poster={img.src}>
                                    <source type="video/mp4" src={img.src}></source>
                                    <source type="video/webm" src={img.gif}></source>
                                 </video>
                              ): (
                                 <>
                                    <Image src={img.gif} alt="gif" width={500} height={500}/>
                                    <ins >Gif</ins>
                                 </>
                              )
                           }
                        </div>
                     )
                  ))
               }
               <p className="h2">+{imgs.length - 3}</p>
               </div>
            )
         }
      </>
   )
}

export default PostImages