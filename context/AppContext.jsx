'use client';

import { productsDummyData, userDummyData } from "@/assets/assets";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// Create the App Context
export const AppContext = createContext(null);

// Custom hook to use context
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY;
    const router = useRouter();
    const { user } = useUser();

    const [products, setProducts] = useState([]);
    const [userData, setUserData] = useState(null);
    const [isSeller, setIsSeller] = useState(true);
    const [cartItems, setCartItems] = useState({});

    // Simulate fetching dummy product data
    const fetchProductData = async () => {
        setProducts(productsDummyData);
    };

    // Simulate fetching dummy user data
    const fetchUserData = async () => {
        setUserData(userDummyData);
    };

    // Add item to cart
    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = (cartData[itemId] || 0) + 1;
        setCartItems(cartData);
    };

    // Update cart item quantity
    const updateCartQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
    };

    // Get total count of items in cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    };

    // Calculate total cart amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            const product = products.find((p) => p._id === item);
            if (product) {
                totalAmount += product.offerPrice * cartItems[item];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    useEffect(() => {
        fetchUserData();
    }, []);

    const value = {
        user,
        currency,
        router,
        isSeller,
        setIsSeller,
        userData,
        fetchUserData,
        products,
        fetchProductData,
        cartItems,
        setCartItems,
        addToCart,
        updateCartQuantity,
        getCartCount,
        getCartAmount,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
