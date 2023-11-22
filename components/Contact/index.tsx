"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../src/app/utils/send-email";
import { Input, Textarea } from "@nextui-org/react";
import { FieldConfig, useFieldValidation } from "../../hooks/useFieldValidation";
import Heading2 from "../Text/Heading2";
import Paragraphs from "../Text/Paragraphs";
import CustomModal from "../CustomModal";
import PrimaryButton from "../Buttons/PrimaryButton";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isShowModal, setIsShowModal] = useState(false);

    const NAME_REGEX = /^([a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+)*[.]{0,1}){1,2}$/;
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const nameConfig: FieldConfig = {
        regex: NAME_REGEX,
        validator: (value: string) => value.match(NAME_REGEX) !== null,
    };
    const emailConfig: FieldConfig = {
        regex: EMAIL_REGEX,
        validator: (value: string) => value.match(EMAIL_REGEX) !== null,
    };
    const messageConfig: FieldConfig = {
        validator: (value: string) => value.length > 0,
    };

    const name = useFieldValidation("", nameConfig);
    const email = useFieldValidation("", emailConfig);
    const message = useFieldValidation("", messageConfig);

    function onSubmit(data: Record<string, any>) {
        if (name.isInvalid || email.isInvalid || message.isInvalid) return;
        setIsShowModal(true);
        sendEmail(data as FormData);
        reset();
    }

    return (
        <section className='flex justify-center align-middle flex-col items-center sm:mt-32 mb-20 px-6 md:px-12 lg:px-24 xl:px-32 relative'>
            <div className='blob4'></div>
            <div className='blob5'></div>
            <Heading2 text="Let's have a coffee!" />
            <Paragraphs
                classNames='mt-4 w-2/3 md:!leading-loose mb-14'
                text="Lost in code like a missing semicolon? Let's chat! I'll respond faster than a new JS framework could see the light..."
            />
            {isShowModal && (
                <CustomModal
                    message='Your message has been sent successfully! I will get back to you shortly.'
                    message2='Have an amazing day!'
                    isOpen={true}
                    onClose={() => setIsShowModal(false)}
                />
            )}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2'>
                <div className='mb-5'>
                    <Input
                        className='glassing'
                        variant='bordered'
                        label='Full Name'
                        isInvalid={name.isInvalid}
                        color={name.isInvalid ? "danger" : "success"}
                        errorMessage={name.isInvalid && "Please enter your name"}
                        onValueChange={(value) => name.setValue(value)}
                        isRequired
                        classNames={{
                            inputWrapper: ["border"],
                        }}
                        {...register("name", { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <Input
                        className='glassing'
                        variant='bordered'
                        label='Email Address'
                        isInvalid={email.isInvalid}
                        color={email.isInvalid ? "danger" : "success"}
                        errorMessage={email.isInvalid && "Please enter a valid email"}
                        onValueChange={(value) => email.setValue(value)}
                        isRequired
                        classNames={{
                            inputWrapper: ["border"],
                        }}
                        {...register("email", { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <Textarea
                        className='glassing'
                        variant='bordered'
                        minRows={3}
                        label='Message'
                        isInvalid={message.isInvalid}
                        color={message.isInvalid ? "danger" : "success"}
                        errorMessage={message.isInvalid && "Please don't leave the message empty"}
                        onValueChange={(value) => message.setValue(value)}
                        isRequired
                        classNames={{
                            inputWrapper: ["border"],
                        }}
                        {...register("message", { required: true })}
                    />
                </div>
                <div className='text-center'>
                    <PrimaryButton>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 mr-2'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='1'
                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                        </svg>
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default Contact;
