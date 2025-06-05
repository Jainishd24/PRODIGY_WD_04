fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // About
    document.getElementById('about-content').textContent = data.about;

    // Projects
    const projectList = document.getElementById('project-list');
    data.projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `<strong><a href="${project.link}" target="_blank">${project.title}</a></strong> – ${project.description}<br/><em>Tech Stack:</em> ${project.tech}`;
      projectList.appendChild(li);
    });

    // Skills
    const skillsList = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Contact
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML = `
      <h2>Contact</h2>
      <p>Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
      <p>LinkedIn: <a href="${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a></p>
      <p>GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a></p>
      <p>Phone: ${data.contact.phone}</p>
    `;
  });
