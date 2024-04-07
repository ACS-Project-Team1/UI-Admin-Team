import React, { useState } from 'react';
import '../styles/CsvDataUpload.css'; 

// Added a props interface to include the onUpload callback
interface CsvDataUploadProps {
  onUpload?: (data: any) => void; // Optional prop to call after a successful upload
}

const CsvDataUpload = ({ onUpload }: CsvDataUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [csvData, setCsvData] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      console.log('selectedFile', selectedFile);
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a CSV file to upload.');
      return;
    }
  
    let fileFormat = file.name.split('.').pop(); // Simplified file extension extraction
    if (fileFormat?.toLowerCase() !== "csv") {
      alert('Invalid file format, please upload a CSV file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('csvFile', file);
  
    fetch('/upload-csv', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setUploadStatus('Upload successful.');
          onUpload?.(true); // For example, indicating success
          // Fetch the uploaded CSV data for display
          fetch('/get-uploaded-csv-data')
            .then(response => response.json())
            .then(data => {
              // Process uploaded data as needed
              // Send data to backend for storage and processing
              fetch('/process-and-store-csv-data', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then(response => {
                  if (response.ok) {
                    console.log('Uploaded data processed and stored successfully.');
                  } else {
                    console.error('Error processing and storing uploaded data.');
                  }
                })
                .catch(error => console.error('Error processing and storing uploaded data:', error));
            })
            .catch(error => console.error('Error fetching uploaded CSV data:', error));
        } else {
          setUploadStatus('Upload failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error uploading CSV file:', error);
        setUploadStatus('An error occurred during upload. Please try again later.');
      });
  };
  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
      {uploadStatus && <p>{uploadStatus}</p>}
      {csvData.length > 0 && (
        <div>
          <h2>Uploaded CSV Data</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{String(value)}</td> 
                  ))}     
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add editing functionality here */}
        </div>
      )}
    </div>
  );
}
export default CsvDataUpload;
