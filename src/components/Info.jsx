import React from 'react';

const Info = ({data}) => {
    if(!data) return null;
    return (
        <div>
            <div className="submitted-data">
            <h3>Submitted Data</h3>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Contact: {data.contact}</p>
            <p>Gender: {data.gender}</p>
            <p>Subjects: {data.subjects.join(', ')}</p>
            <p>URL: {data.url}</p>
            <p>About: {data.about}</p>
            </div>  
        </div>
    );
}

export default Info;
