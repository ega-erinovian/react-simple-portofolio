import React from "react";
import SkillComp from "./SkillComp";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="row">
          <div className="profile-img col-lg-4">
            <img src="https://images.unsplash.com/photo-1509018252277-12f3a8992c25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" />
          </div>
          <div className="col-lg-8">
            <h2>Pietra Schwarzler</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula arcu, bibendum sed dapibus et, posuere a felis. Fusce pretium erat venenatis velit consectetur rhoncus. Pellentesque euismod suscipit tortor a egestas.
              Aenean nec magna semper libero fermentum sollicitudin eget at nisi. Curabitur tortor purus, volutpat efficitur nunc eu, sodales hendrerit magna. Integer ac fringilla lacus, vel ultricies risus. Vestibulum sed tincidunt metus.
              Etiam placerat justo at metus varius, a semper lectus molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer massa odio, laoreet vel ultricies non, auctor sit amet sem.
            </p>
            <div class="skill-container row">
              <div class="col-lg-12">
                <div className="container-fluid">
                  <SkillComp title="Adobe Photoshop" percent="95" />
                  <SkillComp title="Adobe Illustrator" percent="85" />
                  <SkillComp title="Photography" percent="90" />
                  <SkillComp title="Social Media Marketing" percent="80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
