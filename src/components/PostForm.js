import React, { useState } from 'react';
import TagsInput from './TagsInput';
// take project input form
function PostForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files).map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      preview: ['jpg', 'jpeg', 'png', 'gif'].includes(file.name.split('.').pop().toLowerCase()),
      size: file.size > 1024 ? file.size > 1048576 ? Math.round(file.size / 1048576) + 'mb' : Math.round(file.size / 1024) + 'kb' : file.size + 'b'
    }));
    setImages(selectedImages);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSubmit = () => {
    // Implement your submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Images:', images);
  };

  return (
    <div className="bg-white shadow p-4 py-8">
      <div className="heading text-center  text-2xl m-5 text-gray-800 bg-white">New Project</div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this project here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <div className="icons flex text-gray-500 m-2">
          <label>
            <input
              hidden
              type="file"
              multiple
              onChange={handleImageChange}
            />
            <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 360 360"
      style={{ enableBackground: 'new 0 0 360 360', width: '40px', height: '40px' }}
      xmlSpace="preserve"
      className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
    >
      <g>
        <rect y="54.551" style={{ fill: '#C3C6C8' }} width="360" height="250.898" />
        <rect x="23.816" y="78.365" style={{ fill: '#0071CE' }} width="312.369" height="203.268" />
        <polygon style={{ fill: '#00BD5E' }} points="23.816,281.633 125.601,179.852 168.39,222.639 259.508,131.521 336.201,208.215 
        336.201,281.633 " />
        <circle style={{ fill: '#FFFFFF' }} cx="96.047" cy="134.932" r="31.861" />
      </g>
    </svg>
          </label>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>

        <div id="preview" className="my-4 flex">
          {images.map((image, index) => (
            <div className="relative w-32 h-32 object-cover rounded" key={index}>
              {image.preview ? (
                <img src={image.url} alt={image.name} className="w-32 h-32 object-cover rounded" />
              ) : (
                <svg className="fill-current  w-32 h-32 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                </svg>
              )}
              <button
                onClick={() => removeImage(index)}
                className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
              >
                <span className="mx-auto">×</span>
              </button>
              <div className="text-xs text-center p-2">{image.size}</div>
            </div>
          ))}
        </div>
        <br/>
        <TagsInput/>

        <div className="buttons flex justify-end">
          <div
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handleSubmit}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
