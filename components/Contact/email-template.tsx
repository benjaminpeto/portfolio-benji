import * as React from "react";
import { ContactFormData } from ".";

export const EmailTemplate: React.FC<Readonly<ContactFormData>> = ({ name, email, message }) => (
    <div>
        <h1>{name} sent you a message!</h1>
        <h3>Email: {email}</h3>
        <p>Message: {message}</p>
    </div>
);
