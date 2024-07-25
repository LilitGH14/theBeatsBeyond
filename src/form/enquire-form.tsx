import NiceSelect from '@/components/common/NiceSelect';
import { enquireForm } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';

const EnquireFormList = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                number: "",
                eventLocation: "",
                writeSomething: "",
                termsAndConditions: isChecked,
            },
            validationSchema: enquireForm,
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                toast.success("Form Submitted Successfully!");
                resetForm();
            },
        });
    const EnquirySelectOption = [
        { id: 1, optionName: "Choose Event" },
        { id: 2, optionName: "Clare Culture Night" },
        { id: 3, optionName: "Ensemble Cupar" },
        { id: 4, optionName: "Live Music" },
    ]

    const selectHandler = (selectedOption: any) => {
        handleChange({ target: { name: "eventType", value: selectedOption.optionName } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="First name"
                            />
                            {touched.firstName && <ErrorMsg error={errors.firstName} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Last name"
                            />
                            {touched.lastName && <ErrorMsg error={errors.lastName} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Email"
                            />
                            {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Phone Number</label>
                            <input
                                name="number"
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Your Phone"
                                id="number"
                            />
                            {touched.number && <ErrorMsg error={errors.number} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Event Date</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Event Type</label>
                            <NiceSelect
                                options={EnquirySelectOption}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name="eventType"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Event Location</label>
                            <textarea cols={30} rows={10}
                                name="eventLocation"
                                value={values.eventLocation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="unction Central, 86-90 Paul Street, London, EC2A 4NE United State of America."></textarea>
                            {touched.eventLocation && <ErrorMsg error={errors.eventLocation} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box">
                            <label>Write Something</label>
                            <textarea cols={30} rows={10}
                                name="writeSomething"
                                value={values.writeSomething}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Outstanding wedd ing band playing chart, indie, rock anthems."></textarea>
                            {touched.writeSomething && <ErrorMsg error={errors.writeSomething} />}
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <label className="bb-checkbox">
                                    <span>I Read Your <Link href="/terms-condition">Terms And Conditions</Link>
                                        {" "} Also {" "}
                                        <Link href="/privacy-policy">Privacy
                                            Policy</Link></span>
                                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <div className="bb-submit-btn text-lg-end mb-10">
                                    <button type="submit" className="unfill__btn">Send
                                        enquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EnquireFormList;