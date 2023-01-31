import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

// category, name, price (price for default style), and rating
interface CardProps {
  // id: string;
}

const ComparisonModal: FC<CardProps> = (props) => {
  return (
    <div>
      <div className='modal-title'>
        <h4>COMPARISON</h4>
      </div>
      <div className='comparison-modal-titlebox'>
        <h3>Product 1</h3>
        <h3>Product 2</h3>
      </div>
      <div className='comparison-modal-table'>
        <div className='comparison-modal-row'>
          <div>x</div>
          <div>Product Spec</div>
          <div>x</div>
        </div>
        <div className='comparison-modal-row'>
          <div>x</div>
          <div>Product Spec</div>
          <div>x</div>
        </div>
        <div className='comparison-modal-row'>
          <div>x</div>
          <div>Product Spec</div>
          <div>x</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
