fetch('get_papers.php')
  .then(res => res.json())
  .then(data => {
    data.forEach(paper => {
      // Display on your page
      document.body.innerHTML += `
        <div>
          <strong>${paper.subject} (${paper.year})</strong><br>
          <a href="${paper.paper_link}" target="_blank">Download</a>
        </div><hr>
      `;
    });
  });
