const imagesPerPage = 12;
let currentPage = 1;

// Array to simulate images in the "PS2 COVER" folder (replace with actual paths)
const imagePaths = [
"Resident evil 4 remake.jpg",
"Resident evil 4 remake.jpg"
];
// Function to display images for the current page
function displayImages() {
  const start = (currentPage - 1) * imagesPerPage;
  const end = start + imagesPerPage;
  const imagesToShow = imagePaths.slice(start, end);

  const gameGrid = document.getElementById("game-grid");
  gameGrid.innerHTML = ""; // Clear existing images

  imagesToShow.forEach((imagePath) => {
    const gameItem = document.createElement("div");
    gameItem.classList.add("game-item");
    
    // Create image element
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Game Cover";
    
    // Create download button
    const downloadBtn = document.createElement("button");
    downloadBtn.classList.add("download-btn");
    downloadBtn.textContent = "Download ⬇️";
    
    // Add click event to download the image
    downloadBtn.onclick = function() {
      const link = document.createElement("a");
      link.href = imagePath;
      // Extract filename from path
      const filename = imagePath.split('/').pop();
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
    // Create container for image and button
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.appendChild(img);
    container.appendChild(downloadBtn);
    
    gameItem.appendChild(container);
    gameGrid.appendChild(gameItem);
  });

  // Update page number
  document.getElementById("page-number").textContent = `${currentPage}`;
}
// Function to handle page change (next/previous)
function changePage(direction) {
  const totalPages = Math.ceil(imagePaths.length / imagesPerPage);
  currentPage += direction;

  // Prevent going below 1 or above total pages
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  displayImages();
}

// Initial call to display images
displayImages();
