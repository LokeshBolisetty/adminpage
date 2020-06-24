import React, { useState } from "react";
import Modal from "react-modal";
import Axios from "axios";
const API = "https://authorwrites-blog-api.herokuapp.com/";

Modal.setAppElement("#root");
function Editor(props) {
  const [modaIsOpen, setModalIsOpen] = useState(false);
  const [bodycontent, setbodycontent] = useState(props.data.value);
  const editfunction = () => {
    let newbody = document.activeElement.parentElement.childNodes[1].innerHTML;
    let newtitle = document.activeElement.parentElement.childNodes[0].innerHTML;
    Axios.patch(
      API + props.data._id,

      [
        {
          propName: "Body",
          value: newbody,
        },
        {
          propName: "Title",
          value: newtitle,
        },
      ],
      { headers: { Authorization: "Bearer " + props.token } }
    )
      .then((res) => {
        console.log(res);
        alert("Updated successfully. Refresh to see the changes.");
      })
      .catch((err) => {
        alert("Sorry! Was not able to edit");
        console.log(err);
      });
    setModalIsOpen(false);
  };

  return (
    <div className="Editor">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setModalIsOpen(true)}
      >
        Edit
      </button>
      <Modal isOpen={modaIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h3 contentEditable="true">{props.data.Title}</h3>
        <h5 contentEditable="true">{props.data.Body}</h5>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            editfunction();
          }}
        >
          Edit Content
        </button>
      </Modal>
    </div>
  );
}

export default Editor;
