import React from "react";
import Layout from "../components/layout";

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
                  src="images/statement-icon-1.svg"
                  alt="alternative"
                />
                <p className="title">Planning</p>
              </div>
              <!-- end of element -->
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-right"></i>
              <div className="element">
                <img
                  className="icon"
                  src="images/statement-icon-2.svg"
                  alt="alternative"
                />
                <p className="title">Design</p>
              </div>
              <!-- end of element -->
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-right"></i>
              <div className="element">
                <img
                  className="icon"
                  src="images/statement-icon-3.svg"
                  alt="alternative"
                />
                <p className="title">Execution</p>
              </div>
              <!-- end of element -->
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-right"></i>
              <div className="element">
                <img
                  className="icon"
                  src="images/statement-icon-4.svg"
                  alt="alternative"
                />
                <p className="title">Maintenance</p>
              </div>
              <!-- end of element -->
            </div>
            <!-- end of elements-wrapper -->
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
        <div className="row">
          <div className="col-lg-12">
            <p className="testimonial-text">
              â€�It's never been easier to create an awesome experience for your
              online visitors. Try Juno today and enjoy all the features for
              creating landing pagesâ€�
            </p>
            <p className="testimonial-author">Thomas Jefferson - Company CEO</p>
          </div>
          <!-- end of col -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container -->
    </div>
    </Layout>
  );
}
