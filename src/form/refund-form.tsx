"use client"
import { refundSchema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';

const RefundForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                phone: "",
                paymentId: "",
                productId: "",
                productName: "",
                massage: "",
            },
            validationSchema: refundSchema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Your refund has been processed successfully. Thank you for your patience!")
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bb-input2-box mb-30">
                            <input type="text" placeholder="Name" name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required />
                            {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bb-input2-box mb-30">
                            <input type="text"
                                placeholder="Enter product id"
                                name="productId"
                                value={values.productId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="productid"
                                required />
                            {touched.productId && <ErrorMsg error={errors.productId} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bb-input2-box mb-30">
                            <input type="text"
                                placeholder="Enter payment id"
                                name="paymentId"
                                value={values.paymentId}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="paymentId"
                                required />
                            {touched.paymentId && <ErrorMsg error={errors.paymentId} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bb-input2-box mb-30">
                            <input type="text"
                                placeholder="Product Name"
                                name="productName"
                                value={values.productName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="productName"
                                required
                            />
                            {touched.productName && <ErrorMsg error={errors.productName} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bb-input2-box mb-30">
                            <input type="text" name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Phone Number"
                                required
                            />
                            {touched.phone && <ErrorMsg error={errors.phone} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bb-input2-box mb-30">
                            <input name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                id="email"
                                required
                                placeholder="Email" />
                            {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="bb-input2-box mb-30">
                            <textarea cols={30} rows={10}
                                name='massage'
                                value={values.massage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="What is Reason For Refund  ...?"
                                required
                            ></textarea>
                            {touched.massage && <ErrorMsg error={errors.massage} />}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="bb-submit-btn">
                            <button className="unfill__btn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default RefundForm;