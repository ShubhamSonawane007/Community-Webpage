import React, { useState } from 'react';
import SharePopup from './Share';
import { AiOutlineComment } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';

const ProjectPopup = ({ project, onClose }) => {
  const [showComments, setShowComments] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false); //For like
  const [commentCount, setCommentCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    setComments([...comments, { text: newComment, showReplyBox: false, replies: [] }]);
    setNewComment('');
    setCommentCount(commentCount + 1);
  };

  const handleReplySubmit = (commentIndex, replyText) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.push(replyText);
    setComments(updatedComments);
    setCommentCount(commentCount + 1)
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the popup only if clicked on the overlay itself (not its children)
    }
  };

  const toggleReplyBox = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].showReplyBox = !updatedComments[commentIndex].showReplyBox;
    setComments(updatedComments);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-white p-8 rounded-lg shadow-md overflow-y-auto max-h-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <img src={project.thumbnail} alt={project.title} className="w-full max-h-64 object-contain" />
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between mb-4">
          <button className={`likeBtn ${liked ? "liked bg-red-500 border-white-500 text-white flex items-center gap-2 rounded-full cursor-pointer font-bold h-8 px-2 float-left" : "border-2 border-gray-400 flex items-center gap-2 rounded-full cursor-pointer font-bold h-8 px-2 text-gray-600 bg-white float-left"}`}
            onClick={handleLike}>
            <BsHeart />
            {liked ? "Liked" : "Like"}
          </button>
          <button className="border-2 border-gray-400 flex items-center gap-2 rounded-full cursor-pointer font-bold h-8 px-2 text-gray-600 bg-white float-left" onClick={toggleComments}>
            <AiOutlineComment />
            Comment ({commentCount})
          </button>
          <button className="border-2 border-gray-400 flex items-center gap-2 rounded-full cursor-pointer font-bold h-8 px-2 text-gray-600 bg-white float-left" onClick={toggleSharePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            Share
          </button>
        </div>
        {showComments && (
          <div>
            <form onSubmit={handleCommentSubmit} className="mb-4">
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Write a comment..."
                className="border border-gray-300 rounded px-3 py-1 w-full"
              />
              <button type="submit" className="bg-blue-500 text-white rounded px-4 py-1 ml-2 hover:bg-blue-600">
                Comment
              </button>
            </form>
            <div className="max-h-32 overflow-y-auto">
              {comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="mb-2">
                  <div className="bg-gray-100 rounded p-2">
                    <p className="text-gray-800">{comment.text}</p>
                    <button
                      onClick={() => toggleReplyBox(commentIndex)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Reply
                    </button>
                    {comment.showReplyBox && (
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        const replyText = e.target.elements.replyText.value;
                        if (replyText.trim() === '') return;
                        handleReplySubmit(commentIndex, replyText);
                        e.target.elements.replyText.value = '';
                        toggleReplyBox(commentIndex); // Hide the reply box after submission
                      }} className="mt-2">
                        <input type="text" name="replyText" placeholder="Write a reply..." className="border border-gray-300 rounded px-3 py-1 w-full" />
                        <button type="submit" className="border-1 border-radius-20px bg-blue-500 text-white rounded px-4 py-1 ml-2 hover:bg-blue-600">Reply</button>
                      </form>
                    )}
                  </div>
                  <div className="ml-8 mt-2">
                    {comment.replies.map((reply, index) => (
                      <div key={index} className="bg-gray-200 rounded p-2">
                        <p className="text-gray-800">{reply}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {showSharePopup && <SharePopup onClose={toggleSharePopup} />}
      </div>
    </div>
  );
};

export default ProjectPopup;
