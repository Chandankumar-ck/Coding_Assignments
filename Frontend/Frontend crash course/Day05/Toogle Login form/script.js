function toggleForm() {
    const card = document.getElementById('card');
    const loginContent = document.getElementById('login-content');
    const signupInfo = document.getElementById('signup-info');
    const signupContent = document.getElementById('signup-content');
    const loginInfo = document.getElementById('login-info');
    
    // Toggle the form visibility
    loginContent.classList.toggle('hidden');
    signupInfo.classList.toggle('hidden');
    signupContent.classList.toggle('hidden');
    loginInfo.classList.toggle('hidden');
}
