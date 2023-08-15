document.addEventListener('DOMContentLoaded', function() {
    const downloadLink = document.getElementById('resumeDownloadLink');
    const downloadCountDisplay = document.getElementById('downloadCount');

    // Load the download count from local storage
    let downloadCount = localStorage.getItem('resumeDownloadCount') || 0;
    downloadCountDisplay.textContent = downloadCount;

    downloadLink.addEventListener('click', function(event) {
        // Prevent the default behavior momentarily
        event.preventDefault();

        // Increment and save the download count
        downloadCount++;
        localStorage.setItem('resumeDownloadCount', downloadCount);
        downloadCountDisplay.textContent = downloadCount;

        // Download the resume
        setTimeout(function() {
            window.open(downloadLink.href, '_blank');
        }, 500);
    });
});
