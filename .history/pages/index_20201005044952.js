import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";
import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

const initialState = { name: "", description: "" };

export default function Home() {
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

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
