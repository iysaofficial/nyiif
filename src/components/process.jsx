export const Process = (props) => {
    return (
      <>
          <div id="process" className="process-section">
              <div className="section-title text-center">
                  <h2>Proses Pendaftaran</h2>
              </div>
              <div className="container">
                  <div className="process-work ">
                      {/* <div className="number">1</div> */}
                      <h2> <span className="number">1</span>Bagaimana cara mendaftar?</h2>
                      <div className="process-content text-center">
                          <div className="video">
                              <iframe src="https://www.youtube.com/embed/DCw862udnZo" width="75%" height="400" frameBorder="0" allowfullscreen></iframe>
                          </div>
                      </div>
                  </div>
                  <div className="process-work">
                      <h2> <span className="number">2</span>Setelah Terdaftar?</h2>
                      <div className="process-content text-center">
                          <div className="video">
                              <iframe src="https://www.youtube.com/embed/YBhdvQ1p5xQ" width="75%" height="400" frameBorder="0" allowfullscreen></iframe>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
  };