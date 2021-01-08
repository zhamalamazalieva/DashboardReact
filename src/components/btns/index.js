import React from "react";
import "./style.scss";

export const BtnGoBack = () => {
    return (        
        <button className="btn-goBack">
        <svg className="btn-goBack__svg" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.290001 7.71L6.29 13.71C6.47 13.89 6.72 14 7 14C7.55 14 8 13.55 8 13C8 12.72 7.89 12.47 7.71 12.29L3.41 8L17 8C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6L3.41 6L7.7 1.71C7.89 1.53 8 1.28 8 1C8 0.45 7.55 0 7 0C6.72 0 6.47 0.11 6.29 0.29L0.290001 6.29C0.110001 6.47 0 6.72 0 7C0 7.28 0.110001 7.53 0.290001 7.71Z" />
        </svg>
        <span>Go back</span>
        </button>
    )
}
export const BtnNewProduct = () => {
    return (
        <button className="btn btn-new-product">NEW PRODUCT</button>
    )
}
export const BtnFilter = () => {
    return (
        <button className="btn btn-filter">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0H1C0.45 0 0 0.449679 0 0.999286C0 1.27909 0.11 1.52891 0.29 1.70878L5 6.41542V13.0007C5 13.5503 5.45 14 6 14C6.28 14 6.53 13.8901 6.71 13.7102L8.71 11.7116C8.89 11.5318 9 11.2819 9 11.0021V6.41542L13.71 1.70878C13.89 1.52891 14 1.27909 14 0.999286C14 0.449679 13.55 0 13 0Z" />
        </svg>
        FILTER
         </button>
    )
}
export const BtnAdd = () => {
    return (
        <button  className="btn btn-add">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6H8V1C8 0.45 7.55 0 7 0C6.45 0 6 0.45 6 1V6H1C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8H6V13C6 13.55 6.45 14 7 14C7.55 14 8 13.55 8 13V8H13C13.55 8 14 7.55 14 7C14 6.45 13.55 6 13 6Z" />
        </svg>ADD USER
        </button>
    )
}
export const BtnSubmit = () => {
    return(
        <button className="btn btn-submit">add new user</button>
    )
}