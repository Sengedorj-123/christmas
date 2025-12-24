import React from 'react';
import styles from './MinimalistTree.module.css';

export const MinimalistTree = () => {
  return (
    <div className={styles.minimalistTreeContainer}>
      <svg 
        viewBox="0 0 400 600" 
        className={styles.minimalistTreeSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Christmas Tree - organic wavy outline with tiered branches */}
        <path
          className={styles.treeOutline}
          d="M 200 20
             Q 190 50, 175 100
             Q 170 150, 160 200
             Q 155 250, 145 300
             Q 140 350, 130 400
             Q 125 450, 115 500
             Q 110 550, 105 580
             Q 102 588, 110 592
             Q 125 593, 145 593
             Q 165 593, 200 593
             Q 235 593, 255 593
             Q 275 593, 290 592
             Q 298 588, 295 580
             Q 290 550, 285 500
             Q 275 450, 270 400
             Q 260 350, 255 300
             Q 245 250, 240 200
             Q 230 150, 225 100
             Q 210 50, 200 20 Z"
          fill="none"
          stroke="#D4A574"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Five-pointed Star at the top */}
        <g className={styles.starGroup}>
          <polygon
            className={styles.starFill}
            points="200,10 205,25 220,25 210,35 215,50 200,42 185,50 190,35 180,25 195,25"
            fill="#D4A574"
          />
          <polygon
            className={styles.starOutline}
            points="200,10 205,25 220,25 210,35 215,50 200,42 185,50 190,35 180,25 195,25"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Curved base line */}
        <path
          className={styles.treeBase}
          d="M 130 575 Q 200 580, 270 575"
          fill="none"
          stroke="#D4A574"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Trunk/Stand - inverted U shape */}
        <path
          className={styles.treeTrunk}
          d="M 195 575 Q 200 590, 205 575"
          fill="none"
          stroke="#D4A574"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
