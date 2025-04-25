import React from 'react'
import Statusprofile from './Statusprofile';
const Post = (props) => {
    props=props.details;
  return (
    <div className="max-w-xl mx-auto my-4" loading="lazy">
            {/* Post Header */}
            <div className="flex justify-between items-center">
            <Statusprofile name={props.username} imgURL={props.user.profileImage} isprofile={true} />
            <i className="fa-solid fa-ellipsis mx-4"></i>
            </div>

            {/* Post Image */}
            <img src={props.imageUrl} alt="Post" className="w-full" />

            {/* Post Actions */}
            <div className="p-4">
                <div className="flex justify-between items-center">

                <div className="flex gap-4 mb-3">
                    <i className={`fa-${props.isLikedByCurrentUser ? 'solid' : 'regular'} fa-heart text-xl cursor-pointer`}></i>
                    <i className="fa-regular fa-comment text-xl cursor-pointer"></i>
                    <i className="fa-regular fa-paper-plane text-xl cursor-pointer"></i>
                </div>
                <i className="fa-regular fa-bookmark"></i>
                </div>

                {/* Likes */}
                <div className="text-lg mb-2">{props.likes} likes</div>

                {/* Caption */}
                <div className="mb-2">
                    <span className="font-semibold mr-2">{props.user.username}</span>
                    {props.caption}
                </div>

                {/* Comments */}
                {props.comments.map((comment) => (
                    <div key={comment.id} className="mb-2">
                        <span className="font-semibold mr-2">{comment.username}</span>
                        {comment.comment}
                    </div>
                ))}

                {/* Timestamp */}
                <div className="text-gray-400 text-xs uppercase mt-2">{props.postedAt}</div>

                {/* Add Comment Section */}
                <div className="border-b mt-4 pt-4">
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Add a comment..." 
                            className="flex-1 outline-none"
                        />
                        <button className="text-blue-500 font-semibold ml-2">Post </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Post;
