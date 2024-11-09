var skillsSection = document.getElementById("skills");
var toggleSkillsButton = document.getElementById("toggle-skills");
if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener("click", function () {
        if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none" || (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "") {
            skillsSection.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
}