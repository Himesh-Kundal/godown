import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';  // Import the auth check

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    navigate('/login');  // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.logo}>Godown Management</Link>

        <ul style={styles.navLinks}>
          {/* Check if user is logged in */}
          {isAuthenticated() ? (
            <>
              <li>
                <span style={styles.link}>Welcome, User</span>
              </li>
              <li>
                <button onClick={handleLogout} style={styles.linkButton}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" style={styles.link}>Login</Link>
              </li>
              <li>
                <Link to="/register" style={styles.link}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: { backgroundColor: '#333', padding: '1rem', color: 'white' },
  navContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { textDecoration: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' },
  navLinks: { listStyleType: 'none', display: 'flex', gap: '1rem' },
  link: { textDecoration: 'none', color: 'white' },
  linkButton: { backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }
};

export default Navbar;
