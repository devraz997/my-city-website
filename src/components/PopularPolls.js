// src/components/PopularPolls.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './PopularPolls.css';

const PopularPolls = () => {
    const [polls, setPolls] = useState([
        { question: 'What’s your favorite local dish?', options: ['Biryani', 'Pulao', 'Hyderabadi Kebab'] },
        { question: 'Which place do you visit the most?', options: ['City Park', 'Local Market', 'Historical Site'] },
        { question: 'What event do you look forward to the most?', options: ['Local Fair', 'Music Concert', 'Food Festival'] },
        { question: 'What’s your preferred mode of transport?', options: ['Car', 'Bike', 'Bus', 'Walk'] },
        { question: 'Which season do you enjoy the most?', options: ['Summer', 'Winter', 'Monsoon'] },
        { question: 'What’s your favorite type of movie?', options: ['Action', 'Comedy', 'Drama', 'Horror'] }
    ]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [newPoll, setNewPoll] = useState({ question: '', options: Array(10).fill('') });
    const [showCreatePollForm, setShowCreatePollForm] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (name === 'question') {
            setNewPoll({ ...newPoll, question: value });
        } else if (name.startsWith('option')) {
            const index = parseInt(name.replace('option', ''));
            const options = [...newPoll.options];
            options[index] = value;
            setNewPoll({ ...newPoll, options });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!newPoll.question.trim() || !newPoll.options.some(opt => opt.trim())) {
            alert('Please fill in the question and at least one option.');
            return;
        }
        // Integrate with Firebase to add the poll and handle admin approval
        setPolls([...polls, newPoll]);
        setNewPoll({ question: '', options: Array(10).fill('') });
        setShowCreatePollForm(false);
    };

    const handleVote = (pollIndex, optionIndex) => {
        if (!isAuthenticated) {
            alert('You must be signed in to participate in polls.');
            return;
        }
        // Handle voting logic here
    };

    return (
        <section className="popular-polls">
            <h2>Popular Polls</h2>
            <div className="polls-carousel">
                {polls.map((poll, index) => (
                    <div key={index} className="poll-card">
                        <div className="poll-question">
                            <p>{poll.question.length > 70 ? `${poll.question.substring(0, 70)}... <span className="see-more" onClick={() => alert('Expand question')}>See More</span>` : poll.question}</p>
                        </div>
                        <ul className="poll-options">
                            {poll.options.map((option, idx) => (
                                <li key={idx} onClick={() => handleVote(index, idx)}>{option}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button className="create-poll-button" onClick={() => setShowCreatePollForm(!showCreatePollForm)}>
                {showCreatePollForm ? 'Cancel' : 'Create Poll'}
            </button>
            {showCreatePollForm && (
                <form className="create-poll-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="question"
                        value={newPoll.question}
                        onChange={handleFormChange}
                        placeholder="Poll Question (max 70 characters)"
                        maxLength="70"
                    />
                    {newPoll.options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`option${index}`}
                            value={option}
                            onChange={handleFormChange}
                            placeholder={`Option ${index + 1} (max 25 characters)`}
                            maxLength="25"
                        />
                    ))}
                    <button type="submit">Submit Poll</button>
                </form>
            )}
            {!isAuthenticated && (
                <div className="auth-prompt">
                    <p>You need to sign in to create or vote in polls.</p>
                    <button onClick={() => window.location.href = '/sign-in'}>Sign In</button>
                    <button onClick={() => window.location.href = '/sign-up'}>Sign Up</button>
                </div>
            )}
        </section>
    );
};

export default PopularPolls;
