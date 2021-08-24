import React from "react";
import Layout from "../components/layout";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listTodos });

  return {
    props: {
      posts: response.data.listTodos.items,
    },
  };
}

async function handleCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    const { data } = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createPost,
      variables: {
        input: {
          title: form.get("title"),
          content: form.get("content"),
        },
      },
    });

    window.location.href = `/posts/${data.createPost.id}`;
  } catch ({ errors }) {
    console.error(...errors);
    throw new Error(errors[0].message);
  }
}

export default function Home() {
  return (
    <Layout>
      <div className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="elements-wrapper">
                <div className="element">
                  <img
                    className="icon"
                    src="/static/images/statement-icon-1.svg"
                    alt="alternative"
                  />
                  <p className="title">Planning</p>
                </div>
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-chevron-right"></i>
                <div className="element">
                  <img
                    className="icon"
                    src="/static/images/statement-icon-2.svg"
                    alt="alternative"
                  />
                  <p className="title">Design</p>
                </div>
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-chevron-right"></i>
                <div className="element">
                  <img
                    className="icon"
                    src="/static/images/statement-icon-3.svg"
                    alt="alternative"
                  />
                  <p className="title">Execution</p>
                </div>
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-chevron-right"></i>
                <div className="element">
                  <img
                    className="icon"
                    src="/static/images/statement-icon-4.svg"
                    alt="alternative"
                  />
                  <p className="title">Maintenance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="testimonial-text">
                â€�It's never been easier to create an awesome experience for
                your online visitors. Try Juno today and enjoy all the features
                for creating landing pagesâ€�
              </p>
              <p className="testimonial-author">
                Thomas Jefferson - Company CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
