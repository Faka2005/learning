function Images({ name }: { name: string }) {
    const apiImages = 'https://files-m1jd.onrender.com/images/';

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src={`${apiImages}${name}`} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
    );
}

export default Images;
