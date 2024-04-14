import React, {useEffect, useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import TagsInput from './TagsInput'
import Nav from './Nav'
import PostForm from './PostForm'
function Addproject() {
    

    // creating user connecting front end and backend
  
  const [title,settitle]=useState('')
  const [description,setdescription]=useState('')
 
//    const formData = new FormData();
// formData.append('username', username);
//     formData.append('email', email);
//     formData.append('fullname', fullname);
//     formData.append('password', password);

    

//     formData.append('avatar', avatarFile);
//     formData.append('coverImage', coverImageFile);
//     console.log(formData)
//     // Perform your axios POST request with FormData
//     await axios.post('/api/v1/users/register', formData)
//       .then(function (response) {
//         console.log(response);
//         setresponse(response.data.message)
//         setError('')
//       })
//       .catch(function (error) {
//         // console.log(error.response.data.errors[0]);
//         setError(error?.response?.data?.errors[0])
//         setresponse('')
//       });
//   }

const [tags, setTags] = useState(["node"]);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			event.target.value = "";
            console.log(tags)
		}
	};


    
    
    const [showMenu, setShowMenu] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };


   
  return (
    <>
    <Nav/>
    
   
<PostForm/>

  </>
  )
}

export default Addproject