
const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink  = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', () => {
  container.classList.add('active');
});

LoginLink.addEventListener('click', () => {
  container.classList.remove('active');
});

// Register
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    // تخزين
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // تعبئة تلقائي للـ Login (من غير Refresh)
    loginUsername.value = username;
    loginPassword.value = password;

    // تحويل للـ Login
    container.classList.remove('active');

    // مسح فورم التسجيل
    registerForm.reset();
  });
}


// Login Auto Fill
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

if (loginUsername && loginPassword) {
  loginUsername.value = localStorage.getItem("username") || "";
  loginPassword.value = localStorage.getItem("password") || "";
}

// Clear data after login
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  });
}


window.addEventListener("load", () => {
  if (loginUsername) loginUsername.value = "";
  if (loginPassword) loginPassword.value = "";
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // هنا ممكن تحط أي تحقق قبل الدخول (اختياري)
    
    // نضيف كلاس لتفعيل الترانزشن
    container.classList.add('transition-out');

    // تأخير 1.5 ثانية قبل الانتقال للصفحة الثانية
    setTimeout(() => {
        // بعد التأخير، انتقل للصفحة الثانية
        window.location.href = "index2.html"; // غير الاسم للصفحة الثانية عندك
    }, 1500);
});






