import React from 'react';

function Contact() {
  return (
    <div>
      <div id="contactPage" className="container my-5 py-5">
        <div className="row justify-content-center px-xl-5">
          <h3 className="text-center pb-4">message me</h3>

          <div className="col-12 col-lg-8 contact-me py-3 pb-5">
            <form name="portfolio-contact-form" method="POST" data-netlify="true" className="flex-column d-flex align-items-center">
              <input type="hidden" name="form-name" value="portfolio-contact-form" />
              <input type="text" name="name" placeholder="your name" className="my-3 ps-2" />
              <input type="email" name="email" placeholder="your email" className="my-3 ps-2" />
              <textarea name="message" placeholder="your message" className="my-3 ps-2"></textarea>
              <button className="contact-button btn fw-bold" type="submit">send!</button>
            </form>

            <div className="letter-svgs d-none d-sm-flex">
              <svg id="open-letter" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="90px"
                x="0px" y="0px" viewBox="0 0 310.115 310.115"
              >
                <g>
                  <path fill="#D07C40" d="M309.691,116.824c-1.401-4.069-3.605-7.906-6.852-11.153L175.595,9.17
                    c-16.594-12.226-25.051-12.226-41.364,0L7.537,105.671c-3.247,3.247-5.46,7.084-6.862,11.153l154.237,135.304
                    C154.913,252.129,309.691,116.824,309.691,116.824z"/>
                  <path id="page" fill="#E4E7E7" d="M39.082,29.852h231.95v193.282H39.082V29.852z" />
                  <path fill="#E8AB54" d="M16.351,297.203l138.523-107.905l138.88,107.915c5.132-2.619,9.346-6.678,12.158-11.704
                    L175.595,183.152c-16.449-12.139-25.099-12.332-41.364,0L4.116,285.345C6.919,290.428,11.152,294.555,16.351,297.203z"/>
                  <path fill="#C2C5C5" d="M77.741,78.175v19.329h154.634V78.175H77.741z M77.741,136.152h154.634v-19.32H77.741V136.152z" />
                  <path fill="#E8AB54" d="M155.058,232.799l154.634-115.975v164.298c0,16.014-12.98,28.994-28.994,28.994H29.418
                    c-16.014,0-28.994-12.98-28.994-28.994V116.824C0.424,116.824,155.058,232.799,155.058,232.799z"/>
                  <path fill="#F4B459" d="M283.79,309.796c6.263-0.667,11.926-3.286,16.343-7.306L154.874,189.288L9.953,302.49
                    c4.426,4.03,10.08,6.64,16.362,7.316L283.79,309.796z"/>
                  <path fill="#F9D7A7" d="M4.116,295.009c2.803,5.084,7.045,9.21,12.235,11.868l138.523-107.896l138.88,107.905
                    c5.132-2.619,9.346-6.678,12.158-11.704L175.595,192.798c-18.256-13.521-22.683-14.139-41.364,0
                    C134.23,192.798,4.116,295.009,4.116,295.009z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
              <svg className="pt-1" id="closed-letter" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="90px"
                x="0px" y="0px" viewBox="0 0 309.267 309.267" >
                <g>
                  <path fill="#F4B459" d="M28.994,256.112h251.279c16.014,0,28.994-12.989,28.994-28.994V82.149
                    c0-16.014-12.98-28.994-28.994-28.994H28.994C12.989,53.155,0,66.135,0,82.149v144.969C0,243.123,12.989,256.112,28.994,256.112z"
                  />
                  <g>
                    <path fill="#E8AB54" d="M9.723,248.622l120.943-93.07L9.984,60.413C3.914,65.729,0,73.441,0,82.149v144.969
                      C0,235.69,3.798,243.316,9.723,248.622z M299.486,60.578l-125.417,95.245l125.301,92.944c6.031-5.306,9.897-12.999,9.897-21.649
                      V82.149C309.267,73.538,305.44,65.893,299.486,60.578z"/>
                  </g>
                  <path fill="#FADAAC" d="M305.44,241.257L199.825,156.75l106.881-86.44c-2.378-5.267-6.253-9.665-11.105-12.69
                    L159.079,166.83L18.865,55.069c-5.644,2.117-10.486,5.866-13.83,10.776l112.892,90.548L6.495,245.181
                    c3.798,4.716,8.978,8.196,14.99,9.819l110.399-87.32l6.736,5.432c11.308,11.646,29.641,11.646,40.959,0l6.272-5.074l107.267,84.942
                    C298.327,250.39,302.589,246.312,305.44,241.257z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;