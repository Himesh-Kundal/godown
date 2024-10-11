import React, { useState } from 'react';
import godownsData from '../assets/test/godowns.json'; // Load godown data
import itemsData from '../assets/test/godowns.json'; // Load items data
import './Dashboard.css'; // Import the CSS file

// Tree Node component
const TreeNode = ({ node, items, onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter items that belong to this godown
  const godownItems = items.filter(item => item.godown_id === node.id);

  return (
    <li className="tree-node">
      <span className={`node-label ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '📂' : '📁'} {node.name}
      </span>
      {isOpen && (
        <ul className="nested-list">
          {godownItems.map(item => (
            <li className="item" key={item.item_id} onClick={() => onSelectItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// Tree View component
const TreeView = ({ godowns, items, onSelectItem }) => {
  const generateTree = (parentId) => {
    return godowns
      .filter(godown => godown.parent_godown === parentId)
      .map(godown => (
        <TreeNode key={godown.id} node={godown} items={items} onSelectItem={onSelectItem}>
          {generateTree(godown.id)}
        </TreeNode>
      ));
  };

  return <ul className="tree-view">{generateTree(null)}</ul>;
};

// Item Details component
const ItemDetails = ({ item }) => {
  if (!item) return <div className="item-details empty">Select an item to see details</div>;

  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <img src={item.image_url} alt={item.name} className="item-image" />
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Status:</strong> {item.status}</p>
      <p><strong>Brand:</strong> {item.brand}</p>
      <ul className="item-attributes">
        {Object.entries(item.attributes).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main App Component
const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="app-container">
      <div className="tree-container">
        <TreeView godowns={godownsData} items={itemsData} onSelectItem={setSelectedItem} />
      </div>
      <div className="details-container">
        <ItemDetails item={selectedItem} />
      </div>
    </div>
  );
};

export default Dashboard;
