// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Profile Picture Preview
function previewProfilePic() {
    const file = document.getElementById("profilePic").files[0];
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("profilePreview").src = reader.result;
        document.getElementById("profilePreview").style.display = "block";
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Generate AI Resume
function generateAIResume() {
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;

    if (!name || !jobTitle || !skills || !experience) {
        alert("Please fill all fields to generate a resume.");
        return;
    }

    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;

    document.getElementById("resumeMaker").innerHTML = resumeContent;
}

// AI-Powered Cover Letter
function generateAICoverLetter() {
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("jobTitle").value;

    if (!name || !jobTitle) {
        alert("Please enter your name and job title.");
        return;
    }

    const coverLetter = `
        Dear Hiring Manager,

        I am writing to express my interest in the ${jobTitle} position. With my skills and experience, I am confident in my ability to contribute effectively to your team.

        Looking forward to the opportunity to discuss further.

        Best regards,
        ${name}
    `;

    document.getElementById("coverLetterPreview").innerText = coverLetter;
}

// AI Resume Rating
function rateResume() {
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;

    let rating = 0;
    if (skills.split(",").length >= 5) rating += 50;
    if (experience.length > 100) rating += 50;

    document.getElementById("resumeRating").innerHTML = `<strong>Resume Score:</strong> ${rating}/100`;
}

// Download Resume as PDF
function downloadResume() {
    const resumeContent = document.getElementById("resumeMaker").innerHTML;
    const blob = new Blob([resumeContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.html";
    link.click();
}

// Share Resume (Simulated)
function shareResume() {
    alert("Your resume link has been copied. Share it anywhere!");
}

// Fetch LinkedIn Data (Simulated)
function fetchFromLinkedIn() {
    document.getElementById("name").value = "John Doe";
    document.getElementById("jobTitle").value = "Software Engineer";
    document.getElementById("skills").value = "JavaScript, HTML, CSS, React, Node.js";
    document.getElementById("experience").value = "5 years experience in web development.";
}

// Fetch GitHub Data (Simulated)
function fetchFromGitHub() {
    document.getElementById("skills").value += ", Git, GitHub, Open Source Contributions";
}

// Job Search Based on Skills (Simulated API Call)
function searchJobs() {
    const skills = document.getElementById("skills").value.split(",")[0]; // Use first skill
    const jobResults = `
        <ul>
            <li>${skills} Developer at Google</li>
            <li>${skills} Engineer at Microsoft</li>
            <li>${skills} Specialist at Amazon</li>
        </ul>
    `;
    document.getElementById("jobResults").innerHTML = jobResults;
}
