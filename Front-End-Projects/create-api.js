// create-api.js (Client-side using fetch)
async function createRecord(record) {
    try {
        const response = await fetch('http://localhost:3000/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record), // Data to be sent in the request
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Record created:', data);
        } else {
            console.error('Failed to create record:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Usage
const newRecord = {
    name: 'Sample Record',
    data: 'This is some data',
};

createRecord(newRecord);
