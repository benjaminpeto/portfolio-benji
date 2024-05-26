import { ContactFormData } from "../../../components/Contact";

export function sendEmail(data: ContactFormData) {
    const apiEndpoint = "/api/send";

    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .catch((err) => {
            alert(err);
        });
}
