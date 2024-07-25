import React from 'react';
import ErrorMsg from './error-msg';
import { teamContact } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const TeamForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                massage: "",
            },
            validationSchema: teamContact,
            onSubmit: (values, { resetForm }) => {
                toast.success("Contact succussfully")
                resetForm();
            },
        });
    return (
        <>
            <div className="bb-contact-wrap ms-contact-space ms-bg-2">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bb-input2-box mb-30">
                                <input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Name'
                                    type="text"
                                    id="name"
                                    required />
                                {touched.name && <ErrorMsg error={errors.name} />}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bb-input2-box mb-30">
                                <input name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Email'
                                    type="email"
                                    id="email"
                                    required />
                                {touched.email && <ErrorMsg error={errors.email} />}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="bb-input2-box mb-30">
                                <textarea cols={30} rows={10}
                                    name="massage"
                                    value={values.massage}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="massage"
                                    placeholder="Write Message . . .">
                                </textarea>
                                {touched.massage && <ErrorMsg error={errors.massage} />}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="bb-submit-btn mt-20">
                                <button className="unfill__btn" type="submit">Send
                                    Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TeamForm;