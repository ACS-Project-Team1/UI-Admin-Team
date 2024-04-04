import React, { useState } from 'react';
import '../styles/CsvDataUpload.css'; 
const CsvDataUpload= () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  // const [fileformat, setFileFormat] = useState(null);
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log ('selectedFile', selectedFile);
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a CSV file to upload.');
      return;
    }

    // Perform additional validation if needed (e.g., file type check)
    let fileFormat: string = "";
    fileFormat = (file['name'] as string).split('.')[1]; // Type assertion
    if(fileFormat.toLowerCase() !== "csv"){
      alert('Invalid file fomat,Upload a csv file');
      return;
    }

    console.log('fileformat', fileFormat);


    // Assuming you will make an API call to upload the file
    const formData = new FormData();
    formData.append('csvFile', file);

    // Make API call using fetch or Axios
    fetch('/upload-csv', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setUploadStatus('Upload successful.');
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
      <button onClick={handleUpload}>Upload CSV  </button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default CsvDataUpload;

