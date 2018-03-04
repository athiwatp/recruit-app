const API      = 'http://recruitappdev.herokuapp.com';
const setUrl   = (endpoint) => API + endpoint;

const sessions = setUrl('/sessions');

const users          = setUrl('/users');
const employers      = setUrl('/employers');

export const userSessions = () => `${users}/sessions`;
export const employerSessions = () => `${employers}/sessions`;
export const retrieveSessions = (user) => {
  return user === 'user' ? userSessions() : employerSessions();
};

export const employerUsers = () => `${employers}/users`;
export const employerInterviewRequests = () => `${employers}/interview_requests`;
export const employerRejectInterviewRequests = (id) => `${employerInterviewRequests()}/${id}/reject`;
export const userJobs = () => `${users}/jobs?reject_applied=1`;
export const userJobsApplied = () => `${users}/jobs?select_applied=1`;
export const userInterviewRequests = () => `${users}/interview_requests`;
export const userRejectInterviewRequests = (id) => `${userInterviewRequests()}/${id}/withdraw`;
