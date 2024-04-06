import React, { useState } from 'react';
import '../styles/CsvDataUpload.css'; 

// Added a props interface to include the onUpload callback
interface CsvDataUploadProps {
  onUpload?: (data: any) => void; // Optional prop to call after a successful upload
}

const CsvDataUpload = ({ onUpload }: CsvDataUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');

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
    </div>
  );
};

export default CsvDataUpload;
