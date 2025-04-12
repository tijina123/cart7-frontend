import React, { useEffect, useState } from "react";
import UserService from "../../services/user-api-services/UserService";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { postAddress, getAddress, getUserData, putSelectAddress, getOrder,updateStatus } =
    UserService();
  const { auth } = useAuth();

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [allAddress, setAllAddress] = useState([]);
  const [userDetails, setUserDetails] = useState(auth);
  const [allOrders, setAllOrders] = useState([]);

  console.log(userDetails, "====userDetails");

  const [showReturnModal, setShowReturnModal] = useState(false);
  const [returnOrderId, setReturnOrderId] = useState(null);
  const [returnDetails, setReturnDetails] = useState({
    orderId: "",
    reason: "",
  });

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    isDefault: false,
  });

  useEffect(() => {
    fetchAddress();
    fetchOrder();
  }, []);

  const fetchAddress = async () => {
    try {
      const response = await getAddress();
      setAllAddress(response?.address);
    } catch (error) {}
  };

  const fetchOrder = async () => {
    try {
      console.log("fetchOrder");

      const response = await getOrder();

      setAllOrders(response?.orders);
    } catch (error) {}
  };

  const handleSelectAddress = async (addressId) => {
    console.log("fetchAddress");

    try {
      const response = await putSelectAddress(addressId);
      window.location.reload();
      // setAllAddress(response?.address);
    } catch (error) {}
  };

  const handleSubmitAddress = async () => {
    // e.preventDefault();
    try {
      const response = await postAddress(address);

      // if (response.success) {
      // }
    } catch (error) {
      console.error("Error adding address:", error);
      // alert("Failed to add address.");
    }
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress({
      ...address,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  console.log(allAddress, "===========allAddress");

  const handleCancelOrder =async (orderId) => {
    console.log(`Cancel order: ${orderId}`);
    // You can call your cancel API here

          const data = {newStatus:"Cancelled"}
          const response = await updateStatus(selectedOrder?._id,data);

          window.location.reload();
  };

  const handleReturnOrder = (orderId) => {
    setReturnOrderId(orderId);
    setShowReturnModal(true);
  };

  const submitReturnOrder = async (e) => {
    e.preventDefault();
    // const reason = e.target.reason.value;
    // const description = e.target.description.value;

    // console.log("Return submitted for Order ID:", returnOrderId);
    // console.log("Return submitted for Order ID:", selectedOrder?._id);
    // console.log("Reason:", reason);
    // console.log("Description:", description);

          

          // const data = {newStatus:"Returned", reason}
          const data = {newStatus:"Returned"}

          const response = await updateStatus(selectedOrder?._id,data);
          window.location.reload();

    // TODO: Call your backend return order API here

    // setShowReturnModal(false);
  };

  console.log(selectedOrder, "selectedOrder");

  return (
    <div>
      <div className="page-wrapper">
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage: 'url("assets/images/page-header-bg.jpg")',
            }}
          >
            <div className="container">
              <h1 className="page-title">
                My Account<span>Shop</span>
              </h1>
            </div>
          </div>

          <div className="page-content">
            <div className="dashboard">
              <div className="container">
                <div className="row">
                  <aside className="col-md-4 col-lg-2">
                    <ul
                      className="nav nav-dashboard flex-column mb-3 mt-1 mb-md-0"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab-account"
                        >
                          Account Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab-orders"
                        >
                          Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab-address"
                        >
                          Addresses
                        </a>
                      </li>
                    </ul>
                  </aside>

                  <div className="col-md-8 col-lg-10">
                    <div className="tab-content">
                      {/* Orders Section */}

                      {/* 
                      <div className="tab-pane fade" id="tab-orders">
                        {allOrders.length > 0 ? (
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th className="text-center">Product Name</th>
                                  <th className="text-center">Product Image</th>
                                  <th className="text-center">Status</th>
                                  <th className="text-center">Total</th>
                                  <th className="text-center">Items</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allOrders.map((order) => (
                                  <tr key={order.id}>
                                    <td className="text-center">
                                      {order?.orderItems?.product?.name}
                                    </td>
                                    <td
                                      style={{ width: "150px", height: "50px" }}
                                    >
                                      <img
                                        src={order?.orderItems?.product?.images}
                                        alt={order?.orderItems?.product?.name}
                                        style={{
                                          width: "100%",
                                          height: "auto",
                                          objectFit: "contain",
                                        }}
                                      />
                                    </td>
                                    <td className="text-center">
                                      {order?.deliveryStatus}
                                    </td>
                                    <td className="text-center">
                                      {order?.totalPrice}
                                    </td>
                                    <td className="text-center">
                                      {order?.orderItems?.quantity} 
                                    </td>
                                    <td className="text-center">
                                      <button
                                        className="btn btn-primary btn-sm"
                                        data-toggle="modal"
                                        data-target="#orderDetailsModal"
                                        onClick={() => handleViewDetails(order)}
                                      >
                                        View Details
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <p>No orders have been made yet.</p>
                        )}
                      </div> */}

                      <div className="tab-pane fade" id="tab-orders">
                        {allOrders.length > 0 ? (
                          <div className="table-responsive">
                            <table
                              style={{ overflowX: "auto", minWidth: "600px" }}
                              className="table table-bordered shadow-sm rounded"
                            >
                              <thead className="thead-light">
                                <tr>
                                  <th className="text-center">Product Name</th>
                                  <th className="text-center">Product Image</th>
                                  <th className="text-center">Status</th>
                                  <th className="text-center">Total</th>
                                  <th className="text-center">Items</th>
                                  <th className="text-center">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allOrders.map((order) => (
                                  <tr key={order.id}>
                                    <td className="text-center align-middle">
                                      {order?.orderItems?.product?.name}
                                    </td>
                                    <td
                                      className="text-center align-middle"
                                      style={{ width: "150px" }}
                                    >
                                      <img
                                        src={order?.orderItems?.product?.images}
                                        alt={order?.orderItems?.product?.name}
                                        className="img-fluid rounded"
                                        style={{
                                          width: "100px",
                                          height: "50px",
                                          objectFit: "contain",
                                          borderRadius: "6px",
                                        }}
                                      />
                                    </td>
                                    <td className="text-center align-middle">
                                      <span
                                        className={`badge ${
                                          order?.deliveryStatus === "Delivered"
                                            ? "badge-success"
                                            : order?.deliveryStatus ===
                                              "Pending"
                                            ? "badge-warning"
                                            : "badge-secondary"
                                        }`}
                                      >
                                        {order?.deliveryStatus}
                                      </span>
                                    </td>
                                    <td className="text-center align-middle">
                                      ₹{order?.totalPrice?.toFixed(2)}
                                    </td>
                                    <td className="text-center align-middle">
                                      {order?.orderItems?.quantity}
                                    </td>
                                    <td className="text-center align-middle">
                                      <button
                                        className="btn btn-primary btn-sm"
                                        data-toggle="modal"
                                        data-target="#orderDetailsModal"
                                        onClick={() => handleViewDetails(order)}
                                      >
                                        View Details
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="text-center py-4">
                            <p className="text-muted">
                              No orders have been made yet.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Address Section */}
                      <div className="tab-pane fade" id="tab-address">
                        <p>
                          The following addresses will be used on the checkout
                          page by default.
                        </p>
                        <div className="row">
                          {/* <div className="col-lg-6">
                            <div className="card card-dashboard">
                              <div className="card-body">
                                <h3 className="card-title">Shipping Address</h3>
                                <p>You have not set up this type of address yet.<br />
                                  <a href="#">Edit <i className="icon-edit" /></a>
                                </p>
                              </div>
                            </div>
                          </div> */}

                          {allAddress?.map((address, index) => (
                            <div className="col-lg-6" key={index}>
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">
                                    Billing Address
                                  </h3>
                                  <p>
                                    {address.fullName}
                                    <br />
                                    {address.city}
                                    <br />
                                    {address.street}
                                    <br />
                                    {address.country}
                                    <br />
                                    {address.phone}
                                    <br />
                                    <a href="#">
                                      Edit <i className="icon-edit" />
                                    </a>
                                  </p>
                                  {/* Select button */}
                                  {address.isDefault ? (
                                    <button
                                      className="btn btn-success mt-2"
                                      // onClick={() => handleSelectAddress(address._id)}
                                    >
                                      Selected Address
                                    </button>
                                  ) : (
                                    <button
                                      className="btn btn-primary mt-2"
                                      onClick={() =>
                                        handleSelectAddress(address._id)
                                      }
                                    >
                                      Select
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* ****************** */}
                        <div className="col-lg-12">
                          <h2 className="checkout-title">
                            Add New Billing Details
                          </h2>
                          {/* End .checkout-title */}
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Full Name *</label>
                              <input
                                type="text"
                                name="fullName"
                                onChange={handleChange}
                                className="form-control"
                                required
                              />
                            </div>
                            {/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <label>Phone *</label>
                              <input
                                type="tel"
                                name="phone"
                                onChange={handleChange}
                                className="form-control"
                                required
                              />
                            </div>
                            {/* End .col-sm-6 */}
                          </div>
                          {/* End .row */}
                          <label>Country *</label>
                          <input
                            type="text"
                            name="country"
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                          <label>Street address *</label>
                          <input
                            type="text"
                            name="street"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="House number and Street name"
                            required
                          />
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Town / City *</label>
                              <input
                                type="text"
                                name="city"
                                onChange={handleChange}
                                className="form-control"
                                required
                              />
                            </div>
                            {/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <label>State *</label>
                              <input
                                type="text"
                                name="state"
                                onChange={handleChange}
                                className="form-control"
                                required
                              />
                            </div>
                            {/* End .col-sm-6 */}
                          </div>
                          {/* End .row */}
                          <div className="row">
                            <div className="col-sm-6">
                              <label>Postcode / ZIP *</label>
                              <input
                                type="text"
                                name="zip"
                                onChange={handleChange}
                                className="form-control"
                                required
                              />
                            </div>
                            {/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <label>Email address *</label>
                              <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                className="form-control"
                                required
                              />
                            </div>
                            {/* End .col-sm-6 */}
                          </div>
                          {/* End .row */}

                          <div className="container-fluid bg-light py-2">
                            <div className="d-flex justify-content-center ">
                              <div
                                className="text-white  text-center"
                                style={{ width: "150px" }}
                              >
                                <button
                                  type="button"
                                  onClick={handleSubmitAddress}
                                  className="btn btn-outline-primary-2 btn-order btn-block"
                                >
                                  SAVE ADDRESS
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End .col-lg-9 */}
                        {/* ****************** */}
                      </div>

                      {/* Account Details Section (Default Open) */}
                      <div
                        className="tab-pane fade show active"
                        id="tab-account"
                      >
                        <form>
                          <label>Name *</label>
                          <input
                            type="text"
                            value={userDetails?.name}
                            className="form-control"
                            required
                          />
                          <label>Mobile number *</label>
                          <input
                            type="text"
                            value={userDetails?.phone}
                            className="form-control"
                            required
                          />
                          <label>Email Address *</label>
                          <input
                            type="email"
                            value={userDetails?.email}
                            className="form-control"
                            required
                          />
                          {/* <button type="submit" className="btn btn-outline-primary-2">Save Changes</button> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Order Details Modal */}
      <div className="modal fade" id="orderDetailsModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {selectedOrder && (
                <>
                  {/* Order Details Modal */}
                  <div
                    className="modal fade show"
                    id="orderDetailsModal"
                    tabIndex="-1"
                    style={{
                      display: "block",
                      backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                    aria-modal="true"
                    role="dialog"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content shadow border-0 rounded-4">
                        <div className="modal-header border-bottom-0">
                          <h5 className="modal-title fw-bold">
                            🧾 Order Details
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setSelectedOrder(null)}
                          ></button>
                        </div>

                        <div className="modal-body px-4 pt-0 pb-4">
                          <div className="row">
                            {/* Product Image */}
                            <div className="col-4 d-flex align-items-center">
                              <img
                                src={selectedOrder.orderItems.product.images[0]}
                                alt={selectedOrder.orderItems.product.name}
                                className="img-fluid rounded-3 border"
                              />
                            </div>

                            {/* Product Details */}
                            <div className="col-8">
                              <h6 className="fw-bold mb-1">
                                {selectedOrder.orderItems.product.name}
                              </h6>
                              <p className="mb-1">
                                <strong>Status:</strong>{" "}
                                {selectedOrder.deliveryStatus}
                              </p>
                              <p className="mb-3">
                                <strong>Quantity:</strong>{" "}
                                {selectedOrder.orderItems.quantity}
                              </p>
                              <p className="mb-3">
                                <strong>Total:</strong> ₹
                                {selectedOrder.totalPrice}
                              </p>

                              {/* <h6 className="fw-bold">Items Ordered:</h6>
                              <ul className="list-unstyled">
                                {selectedOrder.details?.map((item, index) => (
                                  <li key={index}>
                                    {item.name} – {item.qty} x ₹{item.price}
                                  </li>
                                ))}
                              </ul> */}

                              {/* Action Buttons */}
                              {/* {selectedOrder.status === "Processing" && ( */}
                              {selectedOrder?.deliveryStatus &&
                                ["processing", "shipped"].includes(
                                  selectedOrder.deliveryStatus.toLowerCase()
                                ) && (
                                  <button
                                    className="btn btn-danger mt-3 w-100"
                                    onClick={() =>
                                      handleCancelOrder(selectedOrder.id)
                                    }
                                  >
                                    Cancel Order
                                  </button>
                                )}

                              {/* {selectedOrder.status === "Completed" && ( */}
                              {selectedOrder?.deliveryStatus == "Delivered" && (
                                <button
                                  className="btn btn-warning mt-3 w-100"
                                  onClick={() =>
                                    handleReturnOrder(selectedOrder.id)
                                  }
                                >
                                  Return Order
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer border-top-0">
                          <button
                            type="button"
                            className="btn btn-secondary w-100"
                            data-dismiss="modal"
                            onClick={() => setSelectedOrder(null)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backdrop */}
                  <div className="modal-backdrop fade show"></div>

                  {/* Return Modal */}
                  {showReturnModal && (
                    <>
                      <div
                        className="modal fade show"
                        style={{
                          display: "block",
                          backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                        tabIndex="-1"
                        aria-modal="true"
                        role="dialog"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content shadow border-0 rounded-4">
                            <div className="modal-header border-bottom-0">
                              <h5 className="modal-title fw-bold">
                                🛍️ Return Product
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={() => setShowReturnModal(false)}
                              ></button>
                            </div>

                            <div className="modal-body px-4 pt-0 pb-4">
                              <form onSubmit={submitReturnOrder}>
                                <div className="mb-4">
                                  <label
                                    htmlFor="reason"
                                    className="form-label fw-semibold"
                                  >
                                    Reason for Return{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <select
                                    name="reason"
                                    id="reason"
                                    className="form-select rounded-3"
                                    required
                                  >
                                    <option value="">Select a reason</option>
                                    <option value="Damaged Product">
                                      Damaged Product
                                    </option>
                                    <option value="Wrong Item">
                                      Wrong Item
                                    </option>
                                    <option value="Late Delivery">
                                      Late Delivery
                                    </option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>

                                <div className="mb-4">
                                  <label
                                    htmlFor="description"
                                    className="form-label fw-semibold"
                                  >
                                    Additional Details
                                  </label>
                                  <textarea
                                    name="description"
                                    id="description"
                                    className="form-control rounded-3"
                                    rows="4"
                                    placeholder="Write anything else you'd like to mention..."
                                  ></textarea>
                                </div>

                                <div className="d-flex justify-content-end gap-2">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowReturnModal(false)}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary px-4"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-backdrop fade show"></div>
                    </>
                  )}
                </>
              )}

              {showReturnModal && (
                <div className="modal-backdrop fade show"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
    </div>
  );
};

export default Dashboard;
