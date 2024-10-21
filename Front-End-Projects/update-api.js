// update-api.js (Client-side using fetch)
async function updateRecord(id, updatedData) {
    try {
        const response = await fetch(`http://localhost:3000/api/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData), // Updated data
        });

        const data = await response.json();
        if (response.ok) {
            console.log(`Record with ID ${id} updated:`, data);
        } else {
            console.error(`Failed to update record with ID ${id}:`, data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Usage
const updatedRecord = {
    name: 'Updated Record Name',
    data: 'Updated record data',
};

updateRecord('615f1f4e87c5a640d8b0a999', updatedRecord); // Pass the record ID and updated data
