import React from "react";

function Blog() {
  return (
    <div>
      <div className="blogmain">
        <div className="blog1">
          <h1>Blogs</h1>
        </div>

        <div className="blog2">
          <div className="subblog1">
              <div className="backimg">
                <p>APR 10,2023</p>
                <i></i>
              <img src="/img/men.jpeg" alt="" />
              </div>
          </div>

          <div className="subblog2">
            <p className="para3">FURNITURE, TABLE</p>
            <h2 className="head2">
              The Secrets to a Living Room that Draws You In.
            </h2>
            <p className="para4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              deserunt corrupti eos laboriosam fuga id.
            </p>
            <p className="width">READ MORE</p>{" "}
          </div>

          <div className="subblog3">
            <div className="backimg subimg2">
            <p>APR 10,2023</p>
                <i></i>
              <img src="/img/men.jpeg" alt="" />
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
