export const Footer = (props) => {
    return (
        <>
      <footer className="bg-dark text-white pt-5 pb-4" id="footer">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold">Tentang Kami</h3>
              <p>
                By looking at the development and knowledge of children today about science, invention and innovation, especially in the field of science, it requires us to know the extent of the students insights, knowledge and abilities in applying their knowledge of science.
              </p>
              <div>
                <a
                  href="https://www.facebook.com/p/Indonesia-Young-scientist-Association-100063979907207/"
                  target="_blank"
                  className="btn btn-outline-light btn-floating m-1"
                  style={{ width: "50px" }}
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/gyiif_official/?hl=id"
                  target="_blank"
                  className="btn btn-outline-light btn-floating m-1"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/c/IYSAOfficial"
                  target="_blank"
                  className="btn btn-outline-light btn-floating m-1"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
  
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold">TAUTAN INFORMASI</h3>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="./#" className="text-white">Beranda</a>
                </li>
                <li className="my-2">
                  <a href="./#about" className="text-white">Tentang Kami</a>
                </li>
                <li className="my-2">
                  <a href="./#contact" className="text-white">Kontak</a>
                </li>
              </ul>
            </div>
          </div>
  
          <hr className="mb-4" />
  
          <div className="">
              <p className="text-center">
                &copy; 2024 Official NYIIF. Desain oleh <a href="./#" className="text-white" rel="nofollow">IYSA IT</a>
              </p>
          </div>
        </div>
      </footer>
      </>
    );
  };
  