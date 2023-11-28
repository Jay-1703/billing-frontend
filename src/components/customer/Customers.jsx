import * as React from 'react';
import { baseUrl } from '../../api/Url';
import axios from 'axios';
import Billreview from './Billreview';
import { Loader } from '../Loader'

export default function Customers() {
  const [loader, setLoader] = React.useState(false);

  const [customersdata, setCustomersData] = React.useState([]);
  const [search, setSearch] = React.useState(null);

  const [openReview, setOpenReview] = React.useState(false);
  const [openReviewData, setOpenReviewData] = React.useState(null);
  
  const expr = new RegExp(search, 'i');
  const searchdata = customersdata.filter(customersdata => expr.test(customersdata.bill_to));

  const getCustomer = async () => {
    try {
      setLoader(true);
      const res = await axios.get(`${baseUrl}customersdata`);
      setCustomersData(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };  

  const handleClickOpen = async (e) => {
    try {
      const res = await axios.get(`${baseUrl}customersdata/billreview/${e.target.dataset.id}`);
      setOpenReviewData(res.data);
      setOpenReview(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpenReview(false);
  };

  React.useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg width={18} height={18} className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-sm lg:text-base text-gray-500 font-thin" placeholder="Search" />
            </div>
          </div>
        </div>
        {
          loader ? <Loader/> :null
        }
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-6 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Bill ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Customer name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Item name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Qty
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300" />
            </tr>
          </thead>
          <tbody className="bg-white">
            {
              searchdata.length > 0 ? searchdata.map((data) => {
                return (
                  <tr className='cursor-pointer hover:bg-gray-50' key={data.bill_id}>
                    <td className="px-6 py-0 border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm text-gray-800">{data.bill_id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-0 border-b border-gray-500">
                      <div className="text-sm text-blue-900">
                        {data.bill_to}
                      </div>
                    </td>
                    <td className="px-6 py-0 border-b text-blue-900 border-gray-500 text-sm">
                      {data.item_name}
                    </td>
                    <td className="px-6 py-0 border-b text-blue-900 border-gray-500 text-sm">
                      {data.qty}
                    </td>
                    <td className="px-6 py-0 border-b text-blue-900 border-gray-500 text-sm">
                      {data.price}
                    </td>
                    <td className="px-6 py-0 border-b border-gray-500 text-blue-900 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                        <span className="relative text-xs">{data.total_price}</span>
                      </span>
                    </td>
                    <td className=" py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm">
                      <button onClick={handleClickOpen} data-id={data.bill_no} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                        View Details
                      </button>
                    </td>
                  </tr>
                )
              }) :
                customersdata.map((data) => {
                  return (
                    <tr className='cursor-pointer hover:bg-gray-50' key={data.bill_id}>
                      <td className="px-6 py-0 border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm text-gray-800">{data.bill_id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-0 border-b border-gray-500">
                        <div className="text-sm text-blue-900">
                          {data.bill_to}
                        </div>
                      </td>
                      <td className="px-6 py-0 border-b text-blue-900 border-gray-500 text-sm">
                        {data.item_name}
                      </td>
                      <td className="px-6 py-0 border-b text-blue-900 border-gray-500 text-sm">
                        {data.qty}
                      </td>
                      <td className="px-6 py-0 border-b text-blue-900 border-gray-500 text-sm">
                        {data.price}
                      </td>
                      <td className="px-6 py-0 border-b border-gray-500 text-blue-900 text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                          <span className="relative text-xs">{data.total_price}</span>
                        </span>
                      </td>
                      <td className=" py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm">
                        <button onClick={handleClickOpen} data-id={data.bill_no} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                          View Details
                        </button>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
      <Billreview openReview={openReview} handleClickOpen={handleClickOpen} handleClose={handleClose} openReviewData={openReviewData} />
    </div>
  )
}