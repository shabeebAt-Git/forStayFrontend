import React from 'react'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { informOwnerBookingOwnerApi } from '../../../helpers/apis/userApis';
import { object, string,number } from 'yup';


const BookingDetailForm = ({startDate,endDate}) => {

    const {roomId,hotelId} = useParams()

    console.log(roomId,hotelId);
    

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            state: "",
            city: "",
            zipcode: "",
        },
        validationSchema:object({
            name:string().required("Required"),
            email:string().required("Required").email("Email"),
            address:string().required("Required"),
            state:string().required("Required"),
            city:string().required("Required"),
            zipcode:number().required("Required"),
        }),

        onSubmit : async (values)=>{
            const response = await informOwnerBookingOwnerApi({values,roomId,hotelId,startDate,endDate})

            console.log(response);
        }
    
    
    })
  return (
    // < !--component -- >
    //   <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto ">
              <div>
                  {/* <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
                  <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

              <div className="bg-white rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                          <div className="text-gray-600">
                              <p className="font-medium text-lg">Personal Details</p>
                              <p>Please fill out all the fields.</p>
                          </div>

                          <div className="lg:col-span-2">
                              <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5" onSubmit={formik.handleSubmit}>
                                  <div className="md:col-span-5">
                                      <label htmlFor="full_name">Full Name</label>
                                  <input type="text" name="name" id="full_name" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                  {formik.touched.name && formik.errors.name ? <p className='text-red-500' >{formik.errors.name}</p> : null}
                                  </div>

                                  <div className="md:col-span-5">
                                      <label htmlFor="email">Email Address</label>
                                  <input type="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                  {formik.touched.email && formik.errors.email ? <p className='text-red-500' >{formik.errors.email}</p> : null}
                                  </div>

                                  <div className="md:col-span-3">
                                      <label htmlFor="address">Address / Street</label>
                                  <input type="text" name="address" id="address" value={formik.values.address} onChange={formik.handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                  {formik.touched.address && formik.errors.address ? <p className='text-red-500' >{formik.errors.address}</p> : null}
                                  </div>

                                  <div className="md:col-span-2">
                                      <label htmlFor="city">City</label>
                                  <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                  {formik.touched.city && formik.errors.city ? <p className='text-red-500' >{formik.errors.city}</p> : null}

                                  </div>

                                  {/* <div className="md:col-span-2">
                                      <label htmlFor="country">Country / region</label>
                                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                          <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                                          <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                              </svg>
                                          </button>
                                          <button tabindex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                          </button>
                                      </div>
                                  </div> */}

                                  <div className="md:col-span-2">
                                      <label htmlFor="state">State / province</label>
                                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                      <input name="state" id="state" value={formik.values.state} onChange={formik.handleChange} placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                                          {/* <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                              </svg>
                                          </button> */}
                                          {/* <button tabindex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                          </button> */}
                                      </div>
                                  </div>

                                  <div className="md:col-span-1">
                                      <label htmlFor="zipcode">Zipcode</label>
                                  <input type="text" name="zipcode" value={formik.values.zipcode} onChange={formik.handleChange} id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
                                  </div>

                                  {/* <div className="md:col-span-5">
                                      <div className="inline-flex items-center">
                                          <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                          <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                                      </div>
                                  </div> */}

                                  {/* <div className="md:col-span-2">
                                      <label htmlFor="soda">How many soda pops?</label>
                                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                          <button tabindex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                              </svg>
                                          </button>
                                          <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                                          <button tabindex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                              </svg>
                                          </button>
                                      </div>
                                  </div> */}

                                  <div className="md:col-span-5 text-right">
                                      <div className="inline-flex items-end">
                                          <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                      </div>
                                  </div>

                              </form>
                          </div>
                      </div>
                  </div>
              </div>

             
          </div>
    //   </div>
  )
}

export default BookingDetailForm