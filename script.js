function order(service) {
    const phone = "91XXXXXXXXXX";

    const message =
        "Hello! I am interested in your " +
        service +
        ". Please tell me the details.";

    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}