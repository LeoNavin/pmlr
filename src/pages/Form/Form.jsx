import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import SelectGroupThree from '../../components/Forms/SelectGroup/SelectGroupThree';
import React, { useState } from 'react';
import CheckboxFour from '../../components/Checkboxes/CheckboxFour';
import CheckboxFourCopy from '../../components/Checkboxes/CheckboxFourcopy';
import { handleChange1 } from './helper';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import { Option, Select } from '@material-tailwind/react';

const Form =() => {

  const [step, setStep] = useState(1); // State to track current step
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    villageName: '',
    talukName: '',
    district: '',
    state: '',
    pincode: '',
    candidatePhoneNumber:'',
    parentPhoneNumber:'',
    residentialArea: '',
  });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeCheck = (value) => {
    setSelectedOption(value);
  };


  const [selectedGender, setSelectedGender] = useState("");

  const handleChangeGender = (value) => {
    setSelectedGender(value);
  };

  


  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle final form submission here
    console.log(formData);
  };

  // Helper to render the stepper
  // const renderStepper = () => (
  //   <div className="flex justify-center mb-8">
  //     {steps.map((label, index) => (
  //       <div key={index} className="flex items-center">
  //         <div
  //           className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
  //             step >= index + 1 ? 'bg-blue-500' : 'bg-gray-300'
  //           }`}
  //         >
  //           {/* {index + 1} */}
  //         </div>
  //         {index !== steps.length - 1 && (
  //           <div className={`w-10 h-1 ${step > index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );


     const steps = ['Step 1', 'Step 2', 'Step 3'];

  
  
  const renderStepper = () => (
    <div className="flex pl-5 justify-center items-center mb-8">
      {steps.map((label, index) => (
        <div key={index} className="flex items-center w-full max-w-md">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step >= index + 1 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 ${
                step > index + 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );

  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <div className="container mx-auto px-2 ">
    <div className="py-2">
      <div className="mx-auto bg-white shadow-md rounded-lg p-4">
       <div className='fixed-top'>
       {/* <h2 className="text-2xl font-semibold mb-4  text-center">Registration Form</h2> */}
       </div>
            <div className="justify-center items-center">
              {renderStepper()}
            </div>
           <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    
                          {/* Step 1: Personal Information */}
                            {step === 1 && (
                              <>
                              <div className="w-full">
          {/* Centered Heading */}
                                    <h2 className="text-xl font-semibold text-center mb-6">Registration Form</h2>  
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                    {/* Column 1 */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        <label className="block text-sm font-medium text-gray-700 mt-4">Age</label>
                                        <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        
                                        <label className="block text-sm font-medium text-gray-700 mt-4">Date of Birth</label>
                                        {/* <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        /> */}
                                        <DatePickerOne  />
                                    </div>

                                    {/* Column 2 */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        <label className="block text-sm font-medium text-gray-700 mt-4">E-Mail</label>
                                        <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />


                                      <div className="mt-4">
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mt-4">Gender</label>
                                        <Select
                                          id="gender"
                                          name='gender'
                                          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          onChange={handleChangeGender}
                                          value={selectedGender}
                                        >
                                          <Option className='bg_color_option' value="Male">Male</Option>
                                          <Option className='bg_color_option' value="Female">Female</Option>
                                        </Select>
                                      </div>
                                    </div>
                                  </div>
                                </div> 
                              </>
                            )}
                
                            {/* Step 2: Contact Information */}
                            {step === 2 && (
                              <>
                                <div className="w-full">
                                    {/* Centered Heading */}
                                    <h2 className="text-xl font-semibold text-center mb-6">Contact Information</h2>  
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                        {/* Column 1 */}
                                        <div>
                                        <label className="block text-sm font-medium text-gray-700">Candidate Phone Number</label>
                                        <input
                                            type="tel"
                                            name="candidatePhoneNumber"
                                            value={formData.candidatePhoneNumber}
                                            onChange={handleChange}
                                            placeholder="User phone number"
                                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        <label className="block text-sm font-medium text-gray-700 mt-4">Parent Phone Number</label>
                                        <input
                                            type="tel"
                                            name="parentPhoneNumber"
                                            value={formData.parentPhoneNumber}
                                            onChange={handleChange}
                                            placeholder="Parent phone number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        </div>

                                        {/* Column 2 */}
                                        <div>
                                        <label className="block text-sm font-medium text-gray-700">E-Mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="E-mail"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        <label className="block text-sm font-medium text-gray-700 mt-4">Residential Area</label>
                                           <div className="flex gap-4 mt-3 items-center">
                                              {/* <div className="flex items-center">
                                              <input
                                                type="radio"
                                                id="village"
                                                name="residentialArea"
                                                value="Village"
                                                className="hidden peer"
                                                defaultChecked={true}
                                              />
                                            <div className="w-4 h-4 border-2  border-blue-400 rounded-full flex items-center justify-center peer-checked:border-blue-600 peer-checked:bg-blue-600">
                                                <div className="w-2 h-2 rounded-full bg-blue-600 hidden peer-checked:block"></div>
                                              </div>
                                            <label htmlFor="village" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                                              Village
                                            </label>
                                            </div> */}
                                            {/* <CheckboxFourCopy type1="Village" value={isChecked} id="1" name="location" onchange={()=>setIsChecked(!isChecked)} />
                                            <CheckboxFourCopy type1="City" value={isChecked} id="2" name="location" onchange={(e)=>handleChangeCheck(e)} />
                                            <CheckboxFourCopy type1="Town" value={isChecked} id="3" name="location" onchange={(e)=>handleChangeCheck(e)}  /> */}
                                               <label
                                                  htmlFor="checkboxLabelFour"
                                                  className="flex cursor-pointer select-none items-center"
                                                >
                                                  <div className="relative">
                                                    <input
                                                      type="checkbox"
                                                      id="checkboxLabelFour"
                                                      className="sr-only"
                                                      checked={selectedOption === 'option1'}
                                                      onChange={() => handleChangeCheck('option1')}
                                                    />
                                                    <div
                                                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                                                        selectedOption === 'option1' ? 'border-primary' : 'border-gray-300'
                                                      }`}
                                                    >
                                                      <span
                                                        className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                                          selectedOption === 'option1' ? '!bg-primary' : ''
                                                        }`}
                                                      >
                                                        {' '}
                                                      </span>
                                                    </div>
                                                  </div>
                                              Village
                                                </label>

                                                <label
                                                  htmlFor="checkboxLabelFour2"
                                                  className="flex cursor-pointer select-none items-center"
                                                >
                                                  <div className="relative">
                                                    <input
                                                      type="checkbox"
                                                      id="checkboxLabelFour2"
                                                      className="sr-only"
                                                      checked={selectedOption === 'option2'}
                                                      onChange={() => handleChangeCheck('option2')}
                                                    />
                                                    <div
                                                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                                                        selectedOption === 'option2' ? 'border-primary' : 'border-gray-300'
                                                      }`}
                                                    >
                                                      <span
                                                        className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                                          selectedOption === 'option2' ? '!bg-primary' : ''
                                                        }`}
                                                      >
                                                        {' '}
                                                      </span>
                                                    </div>
                                                  </div>
                                                  City
                                                </label>

                                                <label
                                                  htmlFor="checkboxLabelFour1"
                                                  className="flex cursor-pointer select-none items-center"
                                                >
                                                  <div className="relative">
                                                    <input
                                                      type="checkbox"
                                                      id="checkboxLabelFour1"
                                                      className="sr-only"
                                                      checked={selectedOption === 'option3'}
                                                      onChange={() => handleChangeCheck('option3')}
                                                    />
                                                    <div
                                                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                                                        selectedOption === 'option3' ? 'border-primary' : 'border-gray-300'
                                                      }`}
                                                    >
                                                      <span
                                                        className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                                          selectedOption === 'option3' ? '!bg-primary' : ''
                                                        }`}
                                                      >
                                                        {' '}
                                                      </span>
                                                    </div>
                                                  </div>
                                                  Town
                                                </label>
                                            {/* <CheckboxFourCopy type1="Village" value={formData.villageName} id="1" name="location" onchange={()=>setIsChecked(!isChecked)} />
                                            <CheckboxFourCopy type1="City" value={formData.villageName} id="2" name="location" onchange={(e)=>handleChangeCheck(e)} />
                                            <CheckboxFourCopy type1="Town" value={formData.villageName} id="3" name="location" onchange={(e)=>handleChangeCheck(e)}  /> */}
                                            {/* <div className="flex items-center">
                                              <input
                                                type="radio"
                                                id="town"
                                                name="residentialArea"
                                                value="Town"
                                                className="hidden peer"
                                              />
                                              <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center peer-checked:border-blue-600 peer-checked:bg-blue-600">
                                                <div className="w-2 h-2 rounded-full bg-blue-600 hidden peer-checked:block"></div>
                                              </div>
                                              <label htmlFor="town" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                                                Town
                                              </label>
                                            </div>

                                            <div className="flex items-center">
                                              <input
                                                type="radio"
                                                id="city"
                                                name="residentialArea"
                                                value="City"
                                                className="hidden peer"
                                              />
                                              <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center peer-checked:border-blue-600 peer-checked:bg-blue-600">
                                                <div className="w-2 h-2 rounded-full bg-blue-600 hidden peer-checked:block"></div>
                                              </div>
                                              <label htmlFor="city" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                                                City
                                              </label>
                                            </div> */}
                                          </div>
                                        
                                        </div> 

                                      
                                    </div> 
                                </div>
                              </>
                              )}  
                
                            {/* Step 3: Address Information */}
                            {step === 3 && (
                              <>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">Village Name</label>
                                  <input
                                    type="text"
                                    name="villageName"
                                    value={formData.villageName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">Taluk Name</label>
                                  <input
                                    type="text"
                                    name="talukName"
                                    value={formData.talukName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">District</label>
                                  <input
                                    type="text"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">State</label>
                                  <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">Pincode</label>
                                  <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </>
                            )}

        <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep((prev) => Math.min(prev + 1, steps.length))}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Next
                  </button>
                </div>
            </form>        
      </div>
    </div>
  </div>
  );
};



//     const [activeStep, setActiveStep] = React.useState(0);

//     const steps = ["Step 1", "Step 2", "Step 3"]; // Define step titles here
  
//     const isLastStep = activeStep === steps.length - 1;
//     const isFirstStep = activeStep === 0;
  
//     const handleNext = () => {
//       if (!isLastStep) {
//         setActiveStep((cur) => cur + 1);
//       }
//     };
  
//     const handlePrev = () => {
//       if (!isFirstStep) {
//         setActiveStep((cur) => cur - 1);
//       }
//     };
//   return (
//     <>
//       <Breadcrumb pageName="Step Form" />

//       <div className="w-full mx-auto pb-2 bg-white shadow-lg rounded-lg">
//         <div className="flex justify-between items-center mb-6 p-3">
//           {steps.map((step, index) => (
//             <React.Fragment key={index}>
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                     index === activeStep
//                       ? "bg-blue-500 text-white" // Active step
//                       : index < activeStep
//                       ? "bg-green-500 text-white" // Completed step
//                       : "bg-gray-300" // Upcoming steps
//                   }`}
//                 >
//                   {index + 1}
//                 </div>
//                 <span className="text-sm mt-2">{step}</span>
//               </div>

//               {index !== steps.length - 1 && (
//                 <div className="flex-auto border-t-4 justufy-center items-center border-gray-300"></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         <div className="mb-6">
//           {activeStep === 0 && (
//               <div className="grid grid-cols-1 gap-9">
//               <div className="flex flex-col gap-9">
//                 {/* <!-- Contact Form --> */}
//                 <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                   <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//                     <h3 className="font-medium text-black dark:text-white">
//                       Contact Form
//                     </h3>
//                   </div>
//                   <form action="#">
//                     <div className="p-6.5">
//                       <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                         <div className="w-full xl:w-1/2">
//                           <label className="mb-2.5 block text-black dark:text-white">
//                             First name
//                           </label>
//                           <input
//                             type="text"
//                             placeholder="Enter your first name"
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                           />
//                         </div>
      
//                         <div className="w-full xl:w-1/2">
//                           <label className="mb-2.5 block text-black dark:text-white">
//                             Last name
//                           </label>
//                           <input
//                             type="text"
//                             placeholder="Enter your last name"
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                           />
//                         </div>
//                       </div>
      
      
//                       <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                         <div className="w-full xl:w-1/2">
//                           <label className="mb-2.5 block text-black dark:text-white">
//                           Email<span className="text-meta-1">*</span>
//                           </label>
//                           <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                           />
//                         </div>
      
//                         <div className="w-full xl:w-1/2">
//                           <label className="mb-2.5 block text-black dark:text-white">
//                             Phone Number
//                           </label>
//                           <input
//                             type="number"
//                             placeholder="Enter your phone number"
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                           />
//                         </div>
//                       </div>
      
//                       <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                         <div className="w-full xl:w-1/2">
//                           <label className="mb-2.5 block text-black dark:text-white">
//                           Subject
//                           </label>
//                           <input
//                             type="text"
//                             placeholder="Enter your email"
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                           />
//                         </div>
      
//                         <div className="w-full xl:w-1/2">
//                           <label className="mb-2.5 block text-black dark:text-white">
//                            Parent Number 
//                           </label>
//                           <input
//                             type="number"
//                             placeholder="Enter your phone number"
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                           />
//                         </div>
//                       </div>
      
//                       {/* <div className="mb-4.5">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                           Email <span className="text-meta-1">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           placeholder="Enter your email address"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div> */}
      
//                       {/* <div className="mb-4.5">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                           Subject
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Select subject"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div> */}
      
//                       {/* <SelectGroupOne /> */}
//                       <SelectGroupThree />
      
//                       <div className="mb-6">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                           Message
//                         </label>
//                         <textarea
//                           rows={6}
//                           placeholder="Type your message"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         ></textarea>
//                       </div>
      
//                       {/* <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
//                         Send Message
//                       </button> */}
//                     </div>
//                   </form>
//                 </div>
//               </div>      
//             </div>
//           )}
//           {activeStep === 1 && (
//              <div className="grid grid-cols-1 gap-9">
//              <div className="flex flex-col gap-9">
//                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//                    <h3 className="font-medium text-black dark:text-white">
//                      Contact Form
//                    </h3>
//                  </div>
//                  <form action="#">
//                    <div className="p-6.5">
//                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                        <div className="w-full xl:w-1/2">
//                          <label className="mb-2.5 block text-black dark:text-white">
//                            First name
//                          </label>
//                          <input
//                            type="text"
//                            placeholder="Enter your first name"
//                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                          />
//                        </div>
     
//                        <div className="w-full xl:w-1/2">
//                          <label className="mb-2.5 block text-black dark:text-white">
//                            Last name
//                          </label>
//                          <input
//                            type="text"
//                            placeholder="Enter your last name"
//                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                          />
//                        </div>
//                      </div>
     
     
//                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                        <div className="w-full xl:w-1/2">
//                          <label className="mb-2.5 block text-black dark:text-white">
//                          Email<span className="text-meta-1">*</span>
//                          </label>
//                          <input
//                            type="email"
//                            placeholder="Enter your email"
//                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                          />
//                        </div>
     
//                        <div className="w-full xl:w-1/2">
//                          <label className="mb-2.5 block text-black dark:text-white">
//                            Phone Number
//                          </label>
//                          <input
//                            type="number"
//                            placeholder="Enter your phone number"
//                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                          />
//                        </div>
//                      </div>
     
//                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                        <div className="w-full xl:w-1/2">
//                          <label className="mb-2.5 block text-black dark:text-white">
//                          Subject
//                          </label>
//                          <input
//                            type="text"
//                            placeholder="Enter your email"
//                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                          />
//                        </div>
     
//                        <div className="w-full xl:w-1/2">
//                          <label className="mb-2.5 block text-black dark:text-white">
//                           Parent Number 
//                          </label>
//                          <input
//                            type="number"
//                            placeholder="Enter your phone number"
//                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                          />
//                        </div>
//                      </div>
     
//                      <SelectGroupThree />
     
//                      <div className="mb-6">
//                        <label className="mb-2.5 block text-black dark:text-white">
//                          Message
//                        </label>
//                        <textarea
//                          rows={6}
//                          placeholder="Type your message"
//                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                        ></textarea>
//                      </div>
//                    </div>
//                  </form>
//                </div>
//              </div>      
//            </div>
//           )}
//           {activeStep === 2 && (
//             <div className="grid grid-cols-1 gap-9">
//             <div className="flex flex-col gap-9">
//               <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                 <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//                   <h3 className="font-medium text-black dark:text-white">
//                     Contact Form
//                   </h3>
//                 </div>
//                 <form action="#">
//                   <div className="p-6.5">
//                     <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                       <div className="w-full xl:w-1/2">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                           First name
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Enter your first name"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div>
    
//                       <div className="w-full xl:w-1/2">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                           Last name
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Enter your last name"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div>
//                     </div>
    
    
//                     <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                       <div className="w-full xl:w-1/2">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                         Email<span className="text-meta-1">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           placeholder="Enter your email"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div>
    
//                       <div className="w-full xl:w-1/2">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                           Phone Number
//                         </label>
//                         <input
//                           type="number"
//                           placeholder="Enter your phone number"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div>
//                     </div>
    
//                     <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                       <div className="w-full xl:w-1/2">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                         Subject
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Enter your email"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div>
    
//                       <div className="w-full xl:w-1/2">
//                         <label className="mb-2.5 block text-black dark:text-white">
//                          Parent Number 
//                         </label>
//                         <input
//                           type="number"
//                           placeholder="Enter your phone number"
//                           className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                         />
//                       </div>
//                     </div>
    
                 
//                     <SelectGroupThree />
    
//                     <div className="mb-6">
//                       <label className="mb-2.5 block text-black dark:text-white">
//                         Message
//                       </label>
//                       <textarea
//                         rows={6}
//                         placeholder="Type your message"
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                       ></textarea>
//                     </div>
    
                    
//                   </div>
//                 </form>
//               </div>
//             </div>      
//           </div>
//           )}
//         </div>

//         <div className="flex justify-between">
//           <button
//             className={`bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 ${
//               isFirstStep ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={handlePrev}
//             disabled={isFirstStep}
//           >
//             Previous
//           </button>
//           <button
//             className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
//               isLastStep ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={handleNext}
//             disabled={isLastStep}
//           >
//             Next
//           </button>
//         </div>
//       </div>

//     </>
//   );
// };

export default Form;





{/* <div className="flex flex-col gap-9">
{/* <!-- Sign In Form --> */}
<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
    <h3 className="font-medium text-black dark:text-white">
      Sign In Form
    </h3>
  </div>
  <form action="#">
    <div className="p-6.5">
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-2.5 block text-black dark:text-white">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <div className="mt-5 mb-5.5 flex items-center justify-between">
        <label htmlFor="formCheckbox" className="flex cursor-pointer">
          <div className="relative pt-0.5">
            <input
              type="checkbox"
              id="formCheckbox"
              className="taskCheckbox sr-only"
            />
            <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
              <span className="text-white opacity-0">
                <svg
                  className="fill-current"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>
          <p>Remember me</p>
        </label>

        <Link to="#" className="text-sm text-primary hover:underline">
          Forget password?
        </Link>
      </div>

      <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
        Sign In
      </button>
    </div>
  </form>
</div>

{/* <!-- Sign Up Form --> */}
<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
    <h3 className="font-medium text-black dark:text-white">
      Sign Up Form
    </h3>
  </div>
  <form action="#">
    <div className="p-6.5">
      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <div className="mb-4.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <div className="mb-5.5">
        <label className="mb-2.5 block text-black dark:text-white">
          Re-type Password
        </label>
        <input
          type="password"
          placeholder="Re-enter password"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
        Sign Up
      </button>
    </div>
  </form>
</div>
// </div> */}