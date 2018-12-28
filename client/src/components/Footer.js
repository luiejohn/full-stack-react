import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer" style={{backgroundColor:'#37474f'}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Web App Information</h5>
                <p className="grey-text text-lighten-4">This site was built as a sample project only using Materializecss, React.js+Redux, Node.js+Express and MongoDB+Moongose.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Relevant Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Pinterest</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Luie Lumanta
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );

}

export default Footer;