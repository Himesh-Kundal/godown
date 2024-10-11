import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const bcknd = import.meta.env.VITE_BACKEND_URL; // Access backend URL from environment variables

function Dashboard() {

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
