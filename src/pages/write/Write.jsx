import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import FileBase from "react-file-base64";

const initialState = {
  title: "",
  desc: "",

}

export default function Write() {
  const { user } = useContext(Context);
  const [file, setFile] = useState(initialState);
  const { title, desc } = file;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFile({ ...file, [name]: value })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
     ...file
    };

    try {
      const res = await axios.post("https://afternoon-citadel-20298.herokuapp.com/api/posts", newPost);
      window.location.reload(false);
     console.log(res);
    } catch (err) { }
  };
  return (
    <div className="write">
     {/* {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
     )}*/}
      <form className="writeForm" onSubmit={handleSubmit}>
       <div className="writeFormGroup">
           {/*<label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
    </label>*/}
          <FileBase type="file" id="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFile({ ...file, photo: base64 })
            }
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            name="title"
            value={title}
            onChange={handleInput}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            name="desc"
            value={desc}
            className="writeInput writeText"
            onChange={handleInput}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}