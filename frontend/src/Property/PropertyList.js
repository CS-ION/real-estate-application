import React from "react";
import "./Property.css";
import ViewingForm from "./ViewingForm";

const STATUS = [
  { name: "For Sale", color: "#3b82f6" },
  { name: "To Lease", color: "#16a34a" },
];

const TYPE = [
  { name: "Condo", color: "#ef4444" },
  { name: "Apartment", color: "#eab308" },
  { name: "House", color: "#db2777" },
];

const PropertyList = ({
  properties,
  setShowForm,
  setPropertyToBeUpdated,
  showViewForm,
  setShowViewForm,
}) => {
  if (properties.length === 0) {
    return <p>No Properties to Display!!</p>;
  }
  return (
    <div className="property-list-container">
      {showViewForm ? <ViewingForm setViewForm={setShowViewForm} /> : null}
      <ul className="property-list">
        {properties.map((property) => (
          <Property
            key={property.id}
            id={property.id}
            unitNumber={property.unitNumber}
            streetNumber={property.streetNumber}
            streetName={property.streetName}
            city={property.city}
            province={property.province}
            postalCode={property.postalCode}
            description={property.description}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            area={property.area}
            price={property.price}
            type={property.type}
            status={property.status}
            setShowForm={setShowForm}
            setShowViewForm={setShowViewForm}
            setPropertyToBeUpdated={setPropertyToBeUpdated}
          />
        ))}
      </ul>
    </div>
  );
};

function Property({
  id,
  unitNumber,
  streetNumber,
  streetName,
  city,
  province,
  postalCode,
  description,
  bathrooms,
  bedrooms,
  area,
  price,
  type,
  status,
  setShowForm,
  setShowViewForm,
  setPropertyToBeUpdated,
}) {
  const handleDelete = () => {
    alert("Deleted Property with ID " + id);
    /* WILL IMPLEMENT WHEN INTEGRATED WITH BACKEND
    // Send a delete request to the backend
    fetch(`/api/properties/${propertyId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Property successfully deleted, update the UI
          // You can remove the property from the local state or re-fetch the updated property list.
        } else {
          // Handle errors, e.g., show an error message to the user
        }
      })
      .catch((error) => {
        // Handle network or other errors
      });*/
  };
  const handleUpdate = () => {
    setPropertyToBeUpdated({
      id: id,
      status: status,
      type: type,
      unitNumber: unitNumber,
      streetNumber: streetNumber,
      streetName: streetName,
      city: city,
      province: province,
      postalCode: postalCode,
      description: description,
      area: area,
      price: price,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
    });
    setShowViewForm(false);
    setShowForm(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleRequestViewing = () => {
    setShowForm(false);
    setShowViewForm(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <li className="property">
      <div className="prop-deets">
        <div className="location-amenities">
          <div className="li-location">
            <div className="li-city">
              {city}, {province} {postalCode}
            </div>
            <div className="li-address">
              {unitNumber && `#${unitNumber}, `}
              {streetNumber} {streetName}
            </div>
          </div>
          <div className="amenities">
            <div className="li-bathrooms">
              <p>Bathrooms</p>
              {bathrooms}
            </div>
            <div className="li-bedrooms">
              <p>Bedrooms</p>
              {bedrooms}
            </div>
            <div className="li-area">
              <p>Area(SqFt)</p>
              {area}
            </div>
            <div className="li-price">
              <p>Price(CAD)</p>$ {price}
            </div>
          </div>
        </div>
        <div className="li-description">{description}</div>
      </div>
      <div className="prop-buttons">
        <button className="update" onClick={handleUpdate}>
          Update
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="request-viewing" onClick={handleRequestViewing}>
          Request Viewing
        </button>
        <span
          className="status"
          style={{
            backgroundColor: STATUS.find(
              (statusObj) => statusObj.name === status
            ).color,
          }}
        >
          {status}
        </span>
        <span
          className="type"
          style={{
            backgroundColor: TYPE.find((typeObj) => typeObj.name === type)
              .color,
          }}
        >
          {type}
        </span>
      </div>
    </li>
  );
}

export default PropertyList;
