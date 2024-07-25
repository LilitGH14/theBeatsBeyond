
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import GenresImg from '../../public/assets/img/genres/genres-01.jpg';
import NiceSelect from '@/components/common/NiceSelect';
import { locationSelect, serviceCategory, serviceSelectData, startingSelect, totalTeamSelect } from '../data/nice-select-data';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { joinInformationForm } from '@/utils/validation-schema';
import ErrorMsg from './error-msg';

const JoinInformationForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched, setFieldValue } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                agencyName: "",
                aboutAgency: "",
                serviceType: "",
                serviceCategoryType: "",
                startingMoney: "",
                teamMember: "",
                location: "",
                selectedFile: null,
            },
            validationSchema: joinInformationForm,
            onSubmit: (values, { resetForm }) => {
                toast.success("Your information has been successfully added!");
                resetForm();
            },
        });
    const selectHandler = (selectedOption: { optionName: string }, fieldName: string) => {
        handleChange({ target: { name: fieldName, value: selectedOption.optionName } });
    };
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
        setFieldValue('selectedFile', file);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bb-input-box style-2">
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
                        <div className="bb-input-box style-2">
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
                        <div className="bb-input-box style-2">
                            <label>Agency Name *</label>
                            <input
                                type="text"
                                name="agencyName"
                                value={values.agencyName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Last name"
                            />
                            {touched.agencyName && <ErrorMsg error={errors.agencyName} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box style-2">
                            <label>Service Type *</label>
                            <NiceSelect
                                options={serviceSelectData}
                                defaultCurrent={0}
                                onChange={(selectedOption) => selectHandler(selectedOption, "serviceType")}
                                name="serviceType"
                                className=""
                            />
                            {touched.serviceType && <ErrorMsg error={errors.serviceType} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box style-2">
                            <label>Service Category *</label>
                            <NiceSelect
                                options={serviceCategory}
                                defaultCurrent={0}
                                onChange={(selectedOption) => selectHandler(selectedOption, "serviceCategoryType")}
                                name="serviceCategoryType"
                                className=""
                            />
                            {touched.serviceCategoryType && <ErrorMsg error={errors.serviceCategoryType} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box style-2">
                            <label>Starting From</label>
                            <NiceSelect
                                options={startingSelect}
                                defaultCurrent={0}
                                onChange={(selectedOption) => selectHandler(selectedOption, "startingMoney")}
                                name="startingMoney"
                                className=""
                            />
                            {touched.startingMoney && <ErrorMsg error={errors.startingMoney} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box style-2">
                            <label>Total Team Member</label>
                            <NiceSelect
                                options={totalTeamSelect}
                                defaultCurrent={0}
                                onChange={(selectedOption) => selectHandler(selectedOption, "teamMember")}
                                name="teamMember"
                                className=""
                            />
                            {touched.teamMember && <ErrorMsg error={errors.teamMember} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bb-input-box style-2">
                            <label>Location</label>
                            <NiceSelect
                                options={locationSelect}
                                defaultCurrent={0}
                                onChange={(selectedOption) => selectHandler(selectedOption, "location")}
                                name="location"
                                className=""
                            />
                            {touched.location && <ErrorMsg error={errors.location} />}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="bb-input-box style-2">
                            <label>About Agency</label>
                            <textarea cols={30} rows={10}
                                name="aboutAgency"
                                value={values.aboutAgency}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="We do not charge for leads. The only money you’ll..."></textarea>
                            {touched.aboutAgency && <ErrorMsg error={errors.aboutAgency} />}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="bb-input-box-file style-2">
                            <label>Attach Cover Photo</label>
                            <div className="bb-upload-img">
                                <div className="bb-upload-item ms-br-15">
                                    {selectedFile ? (
                                        <Image src={URL.createObjectURL(selectedFile)} width={90} height={83} alt="uploaded image" />
                                    ) :
                                        <Image src={GenresImg} width={90} height={83} alt="default image" />
                                    }
                                </div>
                                <div className="bb-upload-file">
                                    <input type="file" onChange={handleFileChange} />
                                    <i className="fas fa-plus"></i>
                                </div>
                                {touched.selectedFile && <ErrorMsg error={errors.selectedFile} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="bb-submit-btn mt-70">
                            <button className="unfill__btn" type="submit">Post
                                Comment</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default JoinInformationForm;