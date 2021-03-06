import React from "react";
import Layout from "../components/layout";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import { createTodo } from "./graphql/mutations";
import { listTodos } from "../sr/graphql/queries";
import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

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
                ????????It's never been easier to create an awesome experience for
                your online visitors. Try Juno today and enjoy all the features
                for creating landing pages????????
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
