import * as React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Billreview({ openReview, handleClickOpen, handleClose, openReviewData }) {
    const billData = openReviewData;
    const handleGeneratePDF = async () => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        // Reference to the HTML element containing the content you want to convert to PDF
        const contentElement = document.getElementById('invoice-content');
        // Use html2canvas to capture the content as an image
        const canvas = await html2canvas(contentElement);
        // Convert the captured image to a data URL
        const imageData = canvas.toDataURL('image/png');
        // Add the captured image to the PDF
        pdf.addImage(imageData, 'PNG', 10, 10, 180, 0); // Adjust the dimensions as needed
        // Save the PDF
        pdf.save(billData[0].bill_from);
    };
    return (
        <div>
            <Dialog fullScreen open={openReview} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative',background:'#9c27b0' }}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                        <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Invoice
                                </h2>
                            </div>
                            <div className="inline-flex gap-x-2">
                                <button onClick={handleGeneratePDF} className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                    Invoice PDF
                                </button>
                                <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                    </svg>
                                    Print
                                </a>
                            </div>
                        </div>
                        <div id='invoice-content'>
                            {
                                billData?.map((data) => {
                                    return (
                                        <div>
                                            <div className='flex justify-center items-center text-[2rem] font-bold text-gray-800 mb-1'>
                                                <h2>
                                                    {data.bill_from}
                                                </h2>
                                            </div>
                                            <div className='flex justify-center items-center text-[1.2rem] text-gray-800 mb-6'>
                                                <h1>
                                                    GST No: {data.gst_no}
                                                </h1>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                <div>
                                                    <div className="grid space-y-3">
                                                        <dl className="grid sm:flex gap-x-3 text-sm">
                                                            <dt className="min-w-[150px] max-w-[200px] text-black">
                                                                Billed to:
                                                            </dt>
                                                            <dd className="text-gray-800">
                                                                <a className="inline-flex items-center gap-x-1.5 text-gray-900 decoration-2 font-semibold">
                                                                    {data.bill_to}
                                                                </a>
                                                            </dd>
                                                        </dl>
                                                        <dl className="grid sm:flex gap-x-3 text-sm">
                                                            <dt className="min-w-[150px] max-w-[200px] text-black">
                                                                Billing details:
                                                            </dt>
                                                            <dd className="font-medium text-gray-800">
                                                                <span className="block font-semibold">{data.bill_to}</span>
                                                                <address className="not-italic font-normal">
                                                                    {data.address_1}
                                                                    <br />
                                                                    {data.address_2}
                                                                    <br />
                                                                    {data.city} - {data.pincode_no}
                                                                    <br />
                                                                    {data.state}
                                                                </address>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="grid space-y-3">
                                                        <dl className="grid sm:flex gap-x-3 text-sm">
                                                            <dt className="min-w-[150px] max-w-[200px] text-black">
                                                                Invoice number:
                                                            </dt>
                                                            <dd className="font-medium text-gray-800">
                                                                {data.bill_no}
                                                            </dd>
                                                        </dl>
                                                        <dl className="grid sm:flex gap-x-3 text-sm">
                                                            <dt className="min-w-[150px] max-w-[200px] text-black">
                                                                Due date:
                                                            </dt>
                                                            <dd className="font-medium text-gray-800">
                                                                {data.date}
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                                <div className="hidden sm:grid sm:grid-cols-5">
                                                    <div className="sm:col-span-2 text-sm font-bold text-black uppercase">
                                                        Item
                                                    </div>
                                                    <div className="text-left text-sm font-bold text-black uppercase">
                                                        Qty
                                                    </div>
                                                    <div className="text-left text-sm font-bold text-black uppercase">
                                                        Rate
                                                    </div>
                                                    <div className="text-right text-sm font-bold text-black uppercase">
                                                        Total
                                                    </div>
                                                </div>
                                                <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700" />
                                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                                    <div className="col-span-full sm:col-span-2">
                                                        <h5 className="sm:hidden text-xs font-medium text-black uppercase">
                                                            Item
                                                        </h5>
                                                        <p className="text-gray-800 text-md">
                                                            {data.item_name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h5 className="sm:hidden text-xs font-medium text-black uppercase">
                                                            Qty
                                                        </h5>
                                                        <p className="text-gray-800 text-md">{data.qty}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="sm:hidden text-xs font-medium text-black uppercase">
                                                            Rate
                                                        </h5>
                                                        <p className="text-gray-800 text-md">{data.price}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="sm:hidden text-xs font-medium text-black uppercase">
                                                            Amount
                                                        </h5>
                                                        <p className="sm:text-right text-gray-800 text-md">{data.subtotal_price}</p>
                                                    </div>
                                                </div>
                                                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                                            </div>
                                            <div className="mt-8 flex sm:justify-end">
                                                <div className="w-full max-w-2xl sm:text-right space-y-2">
                                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                                            <dt className="col-span-3 text-black">Subotal:</dt>
                                                            <dd className="col-span-2 font-medium text-gray-800 text-md">
                                                                {data.subtotal_price}
                                                            </dd>
                                                        </dl>
                                                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                                                            <dt className="col-span-3 text-black">GST:</dt>
                                                            <dd className="col-span-2 font-medium text-gray-800 text-md">
                                                                {data.gst_percentage}%
                                                            </dd>
                                                        </dl>
                                                        <dl className="grid sm:grid-cols-5 gap-x-3 text-sm font-bold">
                                                            <dt className="col-span-3 text-black">Total:</dt>
                                                            <dd className="col-span-2 font-medium text-gray-800 text-md ">
                                                                {data.total_price}
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </List>
            </Dialog>
        </div>
    );
}
