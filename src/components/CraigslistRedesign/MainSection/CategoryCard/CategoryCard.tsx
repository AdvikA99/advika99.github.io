import React from 'react';
import './CategoryCard.css';

function CategoryCard(props: any) {

  const maxCharacters = 18;
  const maxPerColumn = 10;

  return (
    <div className="categoryCard">
      <div className="cardHeaderRow">
        {props.icon}
        <p className="cardHeader">{props.data.name}</p>
      </div>
      <div className="subcategoriesContainer">
        <div>
          {props.data.subCategories.slice(0, maxPerColumn).map((subCategory : string, index : number) =>
            (
              <p key={index} className="subcategory">{subCategory.slice(0, maxCharacters)}{subCategory.length > maxCharacters ? "..." : ""}</p>
            ))}
        </div>
        <div>
          {props.data.subCategories.slice(maxPerColumn, 2 * maxPerColumn - 1).map((subCategory : string, index : number) =>
            (
              <p key={maxPerColumn + index} className="subcategory">{subCategory.slice(0, maxCharacters)}{subCategory.length > maxCharacters ? "..." : ""}</p>
            ))}
          {props.data.subCategories.length >= 2 * maxPerColumn && (
            <p className="viewAllSubcategoriesLink">(+{props.data.subCategories.length - (2 * maxPerColumn - 1)} More)</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
