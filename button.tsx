import React from 'react';

// Simulating CSS Modules
const styles = {
  button: {
    fontFamily: 'Arial, sans-serif',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  primary: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#6c757d',
    color: 'white',
  },
  small: {
    fontSize: '0.8rem',
    padding: '0.25rem 0.5rem',
  },
  medium: {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
  },
  large: {
    fontSize: '1.2rem',
    padding: '0.75rem 1.5rem',
  },
};

const Button = ({ children, variant = 'primary', size = 'medium', disabled = false }) => {
  const buttonStyle = {
    ...styles.button,
    ...styles[variant],
    ...styles[size],
    ...(disabled && { opacity: 0.5, cursor: 'not-allowed' }),
  };

  return (
    <button style={buttonStyle} disabled={disabled}>
      {children}
    </button>
  );
};

const ButtonDemo = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Button Component Preview</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Primary Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Secondary Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="medium">Medium</Button>
          <Button variant="secondary" size="large">Large</Button>
        </div>
      </div>
      
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Disabled Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
