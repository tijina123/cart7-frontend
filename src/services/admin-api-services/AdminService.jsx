import React from 'react'

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AdminService = () => {

    const axiosPrivate = useAxiosPrivate()

    //get all home data
    // const getHomePageData = async () => {
    //     const response = await axiosPrivate.get("/home");
    //     return response.data;
    // };

    // const postRegister = async (data) => {

    //     const response = await axiosPrivate.post("/signup",data);
    //     return response;
    // };


    const addToProduct = async (data) => {

        const response = await axiosPrivate.post("/product/admin",data);
        return response.data;
    };
    
    const AddCategory = async (data) => {

        const response = await axiosPrivate.post("category/admin",data);
        return response.data;
    };
    const EditCategory = async (categoryId, data) => {

        const response = await axiosPrivate.put(`category/admin/${categoryId}`, data)
        return response?.data
    };

    const EditProduct = async (editProductId, data) => {

        const response = await axiosPrivate.put(`product/admin/${editProductId}`, data)
        return response?.data
    };

    const handleToggleProduct = async (ProductId) => {

        const response = await axiosPrivate.put(`product/admin/toggle-status/${ProductId}`)
        return response?.data
    };
    const handleToggleCategory = async (ProductId) => {

        const response = await axiosPrivate.put(`category/admin/toggle-status/${ProductId}`)
        return response?.data
    };

    const handleToggleOffer = async (ProductId) => {

        const response = await axiosPrivate.put(`offer/admin/toggle-status/${ProductId}`)
        return response?.data
    };

    const handleToggleUser= async (ProductId) => {

        const response = await axiosPrivate.put(`/admin/toggle-status/${ProductId}`)
        return response?.data
    };

     //get all home data
     const getUserData = async () => {
        const response = await axiosPrivate.get("/");
        return response.data;
    };

    //get all home data
    const getCategoryeData = async () => {
        const response = await axiosPrivate.get("/category");
        return response.data;
     };

        //get all home data
        const getProductData = async () => {
            const response = await axiosPrivate.get("/product");
            return response.data;
        };

          
    const AddOffer = async (data) => {
        const response = await axiosPrivate.post("/offer/add",data);
        return response.data;
    };

      //get all home data
      const getOffer = async () => {
        const response = await axiosPrivate.get("/offer/");
        return response.data;
     };

       //get all home data
       const getOrder = async () => {
        const response = await axiosPrivate.get("/order/");
        return response.data;
     };

     const updateStatus = async (orderId,data) => {
        const response = await axiosPrivate.put(`/order/delivery-status/${orderId}`,data);
        return response.data;
     };

  
          //get all home data
          const getWeeklyOrder = async () => {
            const response = await axiosPrivate.get("/order/weekly-orders");
            return response;
         };
          //get all home data
          const getsalesByCategory = async () => {
            const response = await axiosPrivate.get("/order/sales-by-category");
            return response;
         };

         const returnProcess = async (orderId,data) => {
            const response = await axiosPrivate.put(`/order/return/${orderId}`,data);
            return response.data;
         };

    return {
        // getHomePageData,
        // postRegister,
        addToProduct,
        AddCategory,
        EditCategory,
        EditProduct,
        handleToggleProduct,
        handleToggleCategory,
        handleToggleUser,
        getUserData,
        getCategoryeData,
        getProductData,
        AddOffer,
        getOffer,
        getOrder,
        updateStatus,
        handleToggleOffer,
        getWeeklyOrder,
        getsalesByCategory,
        returnProcess
    };
};

export default AdminService