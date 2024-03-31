import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Feedback.css';
import Hero from '../Hero/Hero';

export default function Feedback() {
  const [state, handleSubmit] = useForm("mgegnnko");

  return (
    <>
      <Hero />
      <div className="feedsec-main-full-box">
        <div className="feedback-container">
          {state.succeeded ? (
            <p>Form submitted successfully!</p>
          ) : (
            <>
              <h3 className='feedback-container-heading'>Drop FeedBack here</h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="feedback-label"></label>
                <input
                placeholder='Your Name And Nickname'
                  id="name"
                  type="text"
                  name="name"
                  className={`feedback-input-section ${state.errors && state.errors.name ? 'error' : ''}`}
                />
                {state.errors && state.errors.name && <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="input-text-error"
                />}
                <label htmlFor="message" className="feedback-label"></label>
                <textarea
                placeholder='Your Message'
                  id="message"
                  name="message"
                  className={`feedback-textare-section ${state.errors && state.errors.message ? 'error' : ''}`}
                />
                {state.errors && state.errors.message && <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="input-text-error"
                />}
                <div className="checkbox-container">
                  <input type="checkbox" id="privateMessageCheckbox" />
                  <label htmlFor="privateMessageCheckbox">Private message</label>
                </div>
                <div className="feedback-btn-container">
                  <button type="submit" disabled={state.submitting} className="feedback-btn">
                    {state.submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
