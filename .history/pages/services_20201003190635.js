import Layout from "../components/layout";

export default function Services() {
  return (
    <Layout title="Services">
      <div id="services" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>SERVICES</h2>
              <p className="p-heading p-large">
                We're focused on setting new industry standards with high
                quality business services. Find more details below
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="element clearfix">
                <div className="image-wrapper">
                  <img src="/static/images/services-1.jpg" alt="alternative" />
                </div>
                <h4>Market Analysis</h4>
                <p className="text">
                  The best place to start is in your market. Analyse your
                  customer profile, current positioning and your main
                  competitors
                </p>
              </div>
              <div className="element clearfix">
                <div className="image-wrapper">
                  <img src="/static/images/services-2.jpg" alt="alternative" />
                </div>
                <h4>Design & Planning</h4>
                <p className="text">
                  After a thorough market analysis the first step is to design a
                  plan based on the findings of our research. No more than 2
                  pages
                </p>
              </div>
              <div className="element clearfix">
                <div className="image-wrapper">
                  <img src="/static/images/services-3.jpg" alt="alternative" />
                </div>
                <h4>Requirements Study</h4>
                <p className="text">
                  Having good knowledge about the resources you need to carry
                  out your plan is very important. We can help you establish
                  them
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="element clearfix">
                <div className="image-wrapper">
                  <img src="/static/images/services-4.jpg" alt="alternative" />
                </div>
                <h4>Taking Action</h4>
                <p className="text">
                  At this stage our team will help you take action and make sure
                  you meet your goals for both revenue growth and market
                  expansion
                </p>
              </div>
              <div className="element clearfix">
                <div className="image-wrapper">
                  <img src="/static/images/services-5.jpg" alt="alternative" />
                </div>
                <h4>Strategy Adjustment</h4>
                <p className="text">
                  Not everything can be predicted from the start so we'll help
                  you be prepared fo the the unknown and adjust the strategy
                  accordingly
                </p>
              </div>
              <div className="element clearfix">
                <div className="image-wrapper">
                  <img src="/static/images/services-6.jpg" alt="alternative" />
                </div>
                <h4>Evaluation & Control</h4>
                <p className="text">
                  At the end of the consultancy period we'll draw the line
                  together with you and investigate if the objectives were met
                  or not
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
