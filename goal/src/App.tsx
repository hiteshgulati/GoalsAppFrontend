import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login';
import Profile1 from './Components/Profile/Profile1';
import Profile2 from './Components/Profile/Profile2';
import Register from './Components/Register/Register';
import GoalDetails from './Components/goals/GoalDetails';
import EditGoal from './Components/goals/EditGoal';
import AddGoal from './Components/goals/AddGoal';
import Details from './Components/goals/Details';
import AddAssets from './Components/allocations/AddAssets';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile1 />} />
    <Route path="/profile/edit" element = {<Profile2 />} />
    <Route path="/details" element = {<GoalDetails />} />
    <Route path="/details/edit" element = {<EditGoal />} />
    <Route path="/details/add" element = {<AddGoal />} />
    <Route path="/detail" element = {<Details />} />
    <Route path="/add-assets" element = {<AddAssets />} />
    </Routes>
    </>
  );
}

export default App;
