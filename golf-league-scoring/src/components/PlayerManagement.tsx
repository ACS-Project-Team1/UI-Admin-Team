import React from 'react';
import  '../styles/PlayerManagement.css'
const PlayerManagement = () => {
   return (
     <div className="player-stats-container">
       {/* Filters */}
       <div className="filters">
         {/* Game Type dropdown */}
         {/* Date Played input */}
         {/* Search button */}
       </div>
        {/* Table */}
       <table className="player-stats-table">
         <thead>
           <tr>
             <th>TEAM NUMBER</th>
             <th>PLAYER 1</th>
             <th>PLAYER 2</th>
             <th>TYPE OF GAME</th>
             <th>WINNER</th>
             <th>ACTION</th>
           </tr>
         </thead>
         <tbody>
           {/* Render table rows dynamically */}
           {/* Example row: */}
           <tr>
             <td>01</td>
             <td>Ivan</td>
             <td>Shrey</td>
             <td>Tournament</td>
             <td>Shrey</td>
             <td>
               {/* Action icons (edit, delete, etc.) */}
             </td>
           </tr>
         </tbody>
       </table>
        {/* Last Team Game Score Statistics */}
       <div className="score-statistics">
         {/* Line graph */}
         {/* Date range */}
         {/* Total count */}
         <button className="download-button">Download Scores</button>
       </div>
        {/* Pagination */}
       <div className="pagination">
         {/* Page navigation */}
       </div>
     </div>
   );
 };


export default PlayerManagement;
