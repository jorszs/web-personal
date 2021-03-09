import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { getAccessTokenApi } from "../../../../api/auth";
import { addPostApi } from "../../../../api/post";

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
  const { setIsVisibleModal, setReloadPosts, post } = props;
  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);

  const processPost = (e) => {
    e.preventDefault();

    if (!post) {
      console.log("creando");
      console.log(postData);
    } else {
      console.log("editando post");
      console.log(postData);
    }
  };

  return (
    <div className="add-edit-post-form">
      <AddEditForm
        postData={postData}
        setPostData={setPostData}
        post={post}
        processPost={processPost}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { postData, setPostData, post, processPost } = props;

  return (
    <Form
      className="add-edit-post-form"
      layout="inline"
      onSubmitCapture={processPost}
    >
      <Row gutter={24} style={{ width: "100%" }}>
        <Col span={8}>
          <Input
            prefix={<FontSizeOutlined />}
            placeholder="Titulo"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </Col>
        <Col span={8}>
          <Input
            prefix={<LinkOutlined />}
            placeholder="Url"
            value={postData.url}
            onChange={(e) =>
              setPostData({
                ...postData,
                url: transformTextToUrl(e.target.value),
              })
            }
          />
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            // value={}
            // onChange={}
            showTime={{ format: "HH:mm" }}
          />
        </Col>
      </Row>
      <Editor
        // initialValue="<p>This is the initial content of the editor</p>"
        value=""
        init={{
          height: 400,
          width: "100%",
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        //  onEditorChange={this.handleEditorChange}
      />
      <Button type="primary" htmlType="submit" className="btn-submit">
        {post ? "Actualizar post" : "Crear post"}
      </Button>
    </Form>
  );
}

function transformTextToUrl(text) {
  const url = text.replace(" ", "-");

  return url.toLowerCase();
}
