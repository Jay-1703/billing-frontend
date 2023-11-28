import * as React from 'react';
import { Button } from '@mui/material';
import { GenerateBill } from '../../api/bill/data';

export default function OrderForm({ handleNext }) {
    const [formData, setFormData] = React.useState({price:0});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "qty") {
            document.getElementById("subtotal").value = formData.price * formData.qty;
            setFormData({
                ...formData,
                qty: value,
                subtotal: formData.price * formData.qty,
            });
            // document.getElementById("total").value = parseInt(document.getElementById("subtotal").value) * value / 100 + parseInt(document.getElementById("subtotal").value);

        }
        if (name === "price") {
            document.getElementById("subtotal").value = value * formData.qty;
            setFormData({
                ...formData,
                price: value,
                subtotal:value * formData.qty,
            });
            // document.getElementById("total").value = parseInt(document.getElementById("subtotal").value) * value / 100 + parseInt(document.getElementById("subtotal").value);
        }

        if (name === "gst_percentage") {
            document.getElementById("total").value = parseInt(document.getElementById("subtotal").value) * value / 100 + parseInt(document.getElementById("subtotal").value);
            setFormData({
                ...formData,
                gst_percentage: value,
                total: document.getElementById("total").value,
                subtotal:formData.price * formData.qty,
            });
        }
        else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    console.log(formData);
    const addData = async () => {
        GenerateBill(formData);
        handleNext();
    }
    return (
        <React.Fragment>
            <div className="md:flex w-full flex justify-center">
                <div className="w-full" encType="multipart/form-data">
                    <div className="text-center mb-2">
                        <h1 className="font-bold text-3xl text-gray-900">Order</h1>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Order number</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="number" name="order_no" id="order_no" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Item name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="item_name" id="item_name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Qty</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="number" name="qty" id="qty" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Price</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="number" name="price" id="price" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label className="text-xs font-semibold">SubTotal price</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input type="number" name="subtotal" id="subtotal" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label className="text-xs font-semibold">GST percentage</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="number" name="gst_percentage" id="gst_percentage" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label className="text-xs font-semibold">Total price</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input type="text" disabled name="total" id="total" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end items-center">
                            <Button onClick={addData} variant="contained">
                                Generate Bill
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
