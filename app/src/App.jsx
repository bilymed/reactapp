import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./UserContext";
import ProductDetails from "./products/ProductDetails";
import Navbar from "./Navbar";
import CategoryList from "./categories/CategoryList";
import Counter from "./Counter";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});

const App = () => {
    const user = useState("Omar");
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <UserContext.Provider value={user}>
                    <Navbar />
                    <div className="container">
                        <Counter />
                        <Routes>
                            <Route path="/" element={<CategoryList />} />
                            <Route path="/:id" element={<ProductDetails />} />
                        </Routes>
                    </div>
                </UserContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

createRoot(document.getElementById('root')).render(<App />);
