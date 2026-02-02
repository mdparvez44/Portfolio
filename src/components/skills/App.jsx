import React from "react";

const App = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Flutter Development</h3>
      <div className="skills__box">

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Flutter & Dart</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

           

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Cross-platform UI Development</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>


        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">State Management</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">API Integration</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

           

        </div>
      </div>
    </div>


  );
};

export default App;