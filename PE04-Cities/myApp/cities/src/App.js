import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './cities.css';

//Main cities compnent manages cities list and routing 
const CitiesApp = () => {
    const [cities, setCities] = useState([]);

    const addCity = (city) => {
        setCities([...cities, city]);
    };

    return (
        <Router>
            <div className="app-container">
                <nav className="nav">
                    <h1>Cities Application</h1>
                    <div>
                        <Link to="/">Cities List</Link>
                        <Link to="/add">Add City</Link>
                    </div>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/" element={<CitiesList cities={cities} />} />
                        <Route path="/add" element={<AddCityForm addCity={addCity} />} />
                        <Route path="/city/:cityName" element={<CityDetails cities={cities} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

// Component to display the list of cities
const CitiesList = ({ cities }) => {
    return (
        <div className="cities-list">
            <h2>Cities List</h2>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        <Link to={`/city/${city.name}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Component for the Add City form
const AddCityForm = ({ addCity }) => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [population, setPopulation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addCity({ name, country, population });
        navigate('/');
    };

    return (
        <div className="add-city-form">
            <h2>Add City</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Country:</label>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />

                <label>Population:</label>
                <input type="text" value={population} onChange={(e) => setPopulation(e.target.value)} />

                <button type="submit">Add City</button>
            </form>
        </div>
    );
};

const CityDetails = ({ cities }) => {
    const { cityName } = useParams();
    const city = cities.find(c => c.name === cityName);

    if (!city) {
        return <p>City not found.</p>;
    }

    return (
        <div className="city-details">
            <h2>{city.name} Details</h2>
            <p><strong>Country:</strong> {city.country}</p>
            <p><strong>Population:</strong> {city.population}</p>
        </div>
    );
};

export default CitiesApp;
