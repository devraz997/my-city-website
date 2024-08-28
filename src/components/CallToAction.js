import React from 'react';
import './CallToAction.css';

const CallToAction = ({ user }) => {
    return (
        <section className="cta">
            <p>Join our community and stay updated with the latest news and events!</p>
            <div className="cta-buttons">
                {!user ? (
                    <>
                        <button className="cta-signup">Sign Up</button>
                        <button className="cta-login">Log In</button>
                    </>
                ) : (
                    <button className="cta-create-poll">Create Poll</button>  /* Example for authenticated users */
                )}
            </div>
        </section>
    );
};

export default CallToAction;
