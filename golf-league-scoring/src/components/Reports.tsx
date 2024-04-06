import React, { useState, useEffect } from 'react';
import CsvDataUpload from './CsvDataUpload.tsx'; 

const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
  const [reportData, setReportData] = useState<any[]>([]); // Adjusted for clarity
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const dummyMetrics = ['Metric 1', 'Metric 2', 'Metric 3'];
    setSelectedMetrics(dummyMetrics);
  }, []);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleMetricsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedMetrics(selected);
  };

  const generateReport = () => {
    setIsLoading(true);
    setError('');

    /* Uncomment the following block when the backend is ready
    fetch('/generate-report', {
      method: 'POST',
      body: JSON.stringify({ startDate, endDate, selectedMetrics }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setReportData(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error generating report:', error);
      setError('Failed to generate report. Please try again.');
      setIsLoading(false);
    });
    */

    // Placeholder: Simulate report generation with dummy data
    setTimeout(() => {
      setReportData([{ Metric: 'Example', Value: 'Data' }]); // Dummy data structure
      setIsLoading(false);
    }, 1000); // Simulate fetch delay
  };

  const convertToCSV = (data: any[]): string => {
    let csv = '';
    if (data.length > 0) {
      const headers = Object.keys(data[0]);
      csv += headers.join(',') + '\n';
      data.forEach(row => {
        csv += headers.map(header => row[header]).join(',') + '\n';
      });
    }
    return csv;
  };

  const downloadReport = () => {
    const csvData = convertToCSV(reportData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const renderReportTable = () => {
    if (reportData.length === 0) {
      return <p>No data available.</p>;
    }
    const headers = Object.keys(reportData[0]);
    return (
      <table>
        <thead>
          <tr>{headers.map(header => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {reportData.map((row, index) => (
            <tr key={index}>
              {headers.map(header => <td key={`${index}-${header}`}>{row[header]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Generate Reports</h2>
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange} 
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange} 
        />
      </div>
      <div>
        <label htmlFor="metrics">Select Metrics:</label>
        <select
          multiple
          id="metrics"
          value={selectedMetrics}
          onChange={handleMetricsChange} 
        >
          {selectedMetrics.map(metric => (
            <option key={metric} value={metric}>{metric}</option>
          ))}
        </select>
      </div>
      <button onClick={generateReport} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Report'}
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && renderReportTable()}
      {reportData.length > 0 && (
        <button onClick={downloadReport}>Download Report</button> // Connect this handler
      )}
      <CsvDataUpload onUpload={(csvData) => console.log(csvData)} />
    </div>
  );
  
};

export default Reports;
