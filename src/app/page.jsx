"use client";

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/landing";
import Recipes from "./components/RecipesPage/recipes";

export default function Page() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={LandingPage} />
                <Route path="/recipes" Component={Recipes} />
            </Routes>
        </Router>
    );
}
