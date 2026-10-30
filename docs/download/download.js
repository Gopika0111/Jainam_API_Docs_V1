function downloadFiles() {
    const files = [
        '/Jainam_Collections/JAINAM_ODIN.postman_environment.json',
        '/Jainam_Collections/JAINAM_TR.postman_environment.json',
        '/Jainam_Collections/Middleware-Jainam.postman_collection.json',
    ];

    files.forEach((file) => {
        const a = document.createElement('a');
        a.href = file;
        a.download = file.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

