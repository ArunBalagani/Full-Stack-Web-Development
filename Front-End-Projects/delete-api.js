// delete-api.js (Client-side using fetch)
async function deleteRecord(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/delete/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        if (response.ok) {
            console.log(`Record with ID ${id} deleted:`, data);
        } else {
            console.error(`Failed to delete record with ID ${id}:`, data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Usage
deleteRecord('615f1f4e87c5a640d8b0a999'); // Pass the ID of the record to delete
