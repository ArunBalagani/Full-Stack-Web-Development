// read-api.js (Client-side using fetch)
async function readRecords() {
    try {
        const response = await fetch('http://localhost:3000/api/read');
        const data = await response.json();

        if (response.ok) {
            console.log('Records fetched:', data);
        } else {
            console.error('Failed to fetch records:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Fetch a specific record by ID
async function readRecordById(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/read/${id}`);
        const data = await response.json();

        if (response.ok) {
            console.log(`Record with ID ${id}:`, data);
        } else {
            console.error(`Failed to fetch record with ID ${id}:`, data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Usage
readRecords();
readRecordById('615f1f4e87c5a640d8b0a999'); // Pass a specific record ID
