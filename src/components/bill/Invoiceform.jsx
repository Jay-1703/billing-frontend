import * as React from 'react';
import { GenerateBill } from '../../api/bill/data';
import { Button } from '@mui/material';

export default function InvoiceForm({ handleNext }) {
    const [formData, setFormData] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const addData = async () => {
        GenerateBill(formData);
        handleNext();
    }
    return (
        <React.Fragment>
            <div className="md:flex w-full flex justify-center">
                <div className="w-full" encType="multipart/form-data">
                    <div className="text-center mb-2">
                        <h1 className="font-bold text-3xl text-gray-900">Invoice</h1>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Bill From</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="billFrom" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Bill To</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="billTo" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Bill No</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="billNo" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Date</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="date" name="billDate" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Address 1</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="address_1" id="address_1" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">Address 2</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="address_2" id="address_2" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">City</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <input onChange={handleChange} type="text" name="city" id="city" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label className="text-xs font-semibold">State</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                    <select onChange={handleChange} id="state" name='state' class="w-full h-10 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                                        <option className='text-md' selected>Choose a State</option>
                                        <option className="text-md" value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option className="text-md" value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option className="text-md" value="Assam">Assam</option>
                                        <option className="text-md" value="Bihar">Bihar</option>
                                        <option className="text-md" value="Chhattisgarh">Chhattisgarh</option>
                                        <option className="text-md" value="Goa">Goa</option>
                                        <option className="text-md" value="Gujarat">Gujarat</option>
                                        <option className="text-md" value="Haryana">Haryana</option>
                                        <option className="text-md" value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option className="text-md" value="Jharkhand">Jharkhand</option>
                                        <option className="text-md" value="Karnataka">Karnataka</option>
                                        <option className="text-md" value="Kerala">Kerala</option>
                                        <option className="text-md" value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option className="text-md" value="Maharashtra">Maharashtra</option>
                                        <option className="text-md" value="Manipur">Manipur</option>
                                        <option className="text-md" value="Meghalaya">Meghalaya</option>
                                        <option className="text-md" value="Mizoram">Mizoram</option>
                                        <option className="text-md" value="Nagaland">Nagaland</option>
                                        <option className="text-md" value="Odisha">Odisha</option>
                                        <option className="text-md" value="Punjab">Punjab</option>
                                        <option className="text-md" value="Rajasthan">Rajasthan</option>
                                        <option className="text-md" value="Sikkim">Sikkim</option>
                                        <option className="text-md" value="Tamil Nadu">Tamil Nadu</option>
                                        <option className="text-md" value="Telangana">Telangana</option>
                                        <option className="text-md" value="Tripura">Tripura</option>
                                        <option className="text-md" value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option className="text-md" value="Uttarakhand">Uttarakhand</option>
                                        <option className="text-md" value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                            <div className='flex -mx-3'>
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold">Pincode No</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input onChange={handleChange} type="text" id='pincode_no' name="pincode_no" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold">GST No</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input onChange={handleChange} type="text" id='gst_no' name="gst_no" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                            </div>
                        <div className="flex justify-end items-center">
                            <Button onClick={addData} variant="contained">
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}