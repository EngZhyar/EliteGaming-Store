const imagesPerPage = 12;
let currentPage = 1;

// Array to simulate images in the "PS2_COVER" folder (replace with actual paths)
const imagePaths = [
  "PS2_COVER/SCES_014.20_COV.jpg",
  "PS2_COVER/SCUS_941.54_COV.jpg",
  "PS2_COVER/SCUS_942.49_COV.jpg",
  "PS2_COVER/SCUS_943.04_COV.jpg",
  "PS2_COVER/SCUS_943.06_COV.jpg",
  "PS2_COVER/SCUS_944.26_COV.jpg",
  "PS2_COVER/SCUS_944.56_COV.jpg",
  "PS2_COVER/SCUS_945.55_COV.jpg",
  "PS2_COVER/SCUS_945.60_COV.jpg",
  "PS2_COVER/SCUS_945.69_COV.jpg",
  "PS2_COVER/SCUS_945.71_COV.jpg",
  "PS2_COVER/SCUS_946.43_COV.jpg",
  "PS2_COVER/SCUS_946.69_COV.jpg",
  "PS2_COVER/SCUS_949.00_COV.jpg",
  "PS2_COVER/SLES_009.95_COV.jpg",
  "PS2_COVER/SLES_012.46_COV.jpg",
  "PS2_COVER/SLES_018.16_COV.jpg",
  "PS2_COVER/SLES_019.60_COV.jpg",
  "PS2_COVER/SLES_019.80_COV.jpg",
  "PS2_COVER/SLES_023.43_COV.jpg",
  "PS2_COVER/SLES_024.68_COV.jpg",
  "PS2_COVER/SLPM_861.62_COV.jpg",
  "PS2_COVER/SLPM_870.56_COV.jpg",
  "PS2_COVER/SLPS_014.41_COV.jpg",
  "PS2_COVER/SLPS_017.62_COV.jpg",
  "PS2_COVER/SLUS_000.06_COV.jpg",
  "PS2_COVER/SLUS_000.13_COV.jpg",
  "PS2_COVER/SLUS_000.38_COV.jpg",
  "PS2_COVER/SLUS_002.13_COV.jpg",
  "PS2_COVER/SLUS_002.39_COV.jpg",
  "PS2_COVER/SLUS_002.88_COV.jpg",
  "PS2_COVER/SLUS_002.93_COV.jpg",
  "PS2_COVER/SLUS_002.98_COV.jpg",
  "PS2_COVER/SLUS_003.00_COV.jpg",
  "PS2_COVER/SLUS_003.13_COV.jpg",
  "PS2_COVER/SLUS_004.33_COV.jpg",
  "PS2_COVER/SLUS_004.91_COV.jpg",
  "PS2_COVER/SLUS_004.98_COV.jpg",
  "PS2_COVER/SLUS_005.10_COV.jpg",
  "PS2_COVER/SLUS_005.15_COV.jpg",
  "PS2_COVER/SLUS_005.20_COV.jpg",
  "PS2_COVER/SLUS_005.29_COV.jpg",
  "PS2_COVER/SLUS_006.05_COV.jpg",
  "PS2_COVER/SLUS_006.62_COV.jpg",
  "PS2_COVER/SLUS_006.84_COV.jpg",
  "PS2_COVER/SLUS_006.96_COV.jpg",
  "PS2_COVER/SLUS_007.07_COV.jpg",
  "PS2_COVER/SLUS_007.38_COV.jpg",
  "PS2_COVER/SLUS_007.90_COV.jpg",
  "PS2_COVER/SLUS_008.00_COV.jpg",
  "PS2_COVER/SLUS_008.24_COV.jpg",
  "PS2_COVER/SLUS_008.26_COV.jpg",
  "PS2_COVER/SLUS_008.68_COV.jpg",
  "PS2_COVER/SLUS_009.14_COV.jpg",
  "PS2_COVER/SLUS_009.20_COV.jpg",
  "PS2_COVER/SLUS_009.22_COV.jpg",
  "PS2_COVER/SLUS_009.23_COV.jpg",
  "PS2_COVER/SLUS_009.34_COV.jpg",
  "PS2_COVER/SLUS_009.74_COV.jpg",
  "PS2_COVER/SLUS_009.75_COV.jpg",
  "PS2_COVER/SLUS_009.77_COV.jpg",
  "PS2_COVER/SLUS_010.44_COV.jpg",
  "PS2_COVER/SLUS_010.53_COV.jpg",
  "PS2_COVER/SLUS_011.44_COV.jpg",
  "PS2_COVER/SLUS_011.47_COV.jpg",
  "PS2_COVER/SLUS_011.61_COV.jpg",
  "PS2_COVER/SLUS_011.89_COV.jpg",
  "PS2_COVER/SLUS_011.91_COV.jpg",
  "PS2_COVER/SLUS_011.97_COV.jpg",
  "PS2_COVER/SLUS_012.01_COV.jpg",
  "PS2_COVER/SLUS_012.02_COV.jpg",
  "PS2_COVER/SLUS_012.03_COV.jpg",
  "PS2_COVER/SLUS_012.30_COV.jpg",
  "PS2_COVER/SLUS_012.67_COV.jpg",
  "PS2_COVER/SLUS_012.70_COV.jpg",
  "PS2_COVER/SLUS_012.79_COV.jpg",
  "PS2_COVER/SLUS_012.82_COV.jpg",
  "PS2_COVER/SLUS_013.11_COV.jpg",
  "PS2_COVER/SLUS_013.12_COV.jpg",
  "PS2_COVER/SLUS_013.19_COV.jpg",
  "PS2_COVER/SLUS_013.21_COV.jpg",
  "PS2_COVER/SLUS_013.27_COV.jpg",
  "PS2_COVER/SLUS_013.30_COV.jpg",
  "PS2_COVER/SLUS_013.57_COV.jpg",
  "PS2_COVER/SLUS_013.69_COV.jpg",
  "PS2_COVER/SLUS_013.98_COV.jpg",
  "PS2_COVER/SLUS_014.49_COV.jpg",
  "PS2_COVER/SLUS_014.51_COV.jpg",
  "PS2_COVER/SLUS_015.06_COV.jpg",
  "PS2_COVER/SLUS_015.85_COV.jpg"
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
