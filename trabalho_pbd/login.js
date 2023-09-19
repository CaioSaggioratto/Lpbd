document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openModalBtn').addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'block';
    });

    document.getElementById('closeModalBtn').addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('loginModal')) {
            document.getElementById('loginModal').style.display = 'none';
        }
    });
});