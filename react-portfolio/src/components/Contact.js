import React from 'react';

function Contact () {
  return (
    <div>
      <div id="contactPage" className="container my-5 py-5">
        <div className="row gx-0 justify-content-center">
          <h3 className="text-center pb-4">message me</h3>

          <div className="col-8 contact-me p-5">
            <form name="portfolio-contact-form" method="POST" data-netlify="true" className="flex-column d-flex">
              <input type="hidden" name="form-name" value="portfolio-contact-form" />
              <input type="text" name="name" placeholder="your name" className="my-3" />
              <input type="email" name="email" placeholder="your email" className="my-3" />
              <textarea name="message" placeholder="your message" className="my-3"></textarea>
              <button type="submit">send!</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;