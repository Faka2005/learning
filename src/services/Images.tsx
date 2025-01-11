function Images({ name }: { name: string }) {
    const apiImages = 'https://files-m1jd.onrender.com/images/';

    return (
        <img src={`${apiImages}${name}`} alt={name} />
    );
}

export default Images;
