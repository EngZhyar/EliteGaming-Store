const imagesPerPage = 12;
let currentPage = 1;

// Array to simulate images in the "PS2 COVER" folder (replace with actual paths)
const imagePaths = [
  "PS2 COVER/007 agent under fire ps2 cover image.jpg",
  "PS2 COVER/007 from russia with love ps2 cover image.jpg",
  "PS2 COVER/007 quantum of solace ps2 cover image.jpg",
  "PS2 COVER/24 the game ps2 cover image.jpg",
  "PS2 COVER/25 to life ps2 cover image.png",
  "PS2 COVER/50 cent bullet proof ps2 cover image.jpg",
  "PS2 COVER/aardman flushed away ps2 cover image.jpeg",
  "PS2 COVER/Adnan w lina.jpg",
  "PS2 COVER/age of empires 2 the age of kings.jpg",
  "PS2 COVER/altered beast ps2 cover image.jpg",
  "PS2 COVER/avatar the burning earth.jpg",
  "PS2 COVER/avatar the last airbender intothe inferno ps2 cover image.jpg",
  "PS2 COVER/Bad boys miami tackdown.jpg",
  "PS2 COVER/Barbie Horse adventure.jpg",
  "PS2 COVER/barnyard ps2 cover image.jpg",
  "PS2 COVER/batman begins ps2 cover image.png",
  "PS2 COVER/batman rise of sintzu ps2 cover image.png",
  "PS2 COVER/batman vengeance ps2 cover image.jpeg",
  "PS2 COVER/battlefield 2 modern combat.jpg",
  "PS2 COVER/bee movie ps2 cover image.jpg",
  "PS2 COVER/ben 10 alien force ps2 cover image.jpg",
  "PS2 COVER/ben 10 alien force vilgax attack ps2 cover image.jpg",
  "PS2 COVER/ben 10 protector of earth ps2 cover image.jpg",
  "PS2 COVER/ben 10 ultimate alien ps2 cover image.jpg",
  "PS2 COVER/black ps2 cover image.jpeg",
  "PS2 COVER/brothers in arm earn blood ps2 cover image.jpeg",
  "PS2 COVER/brothers in arm road to hill 30 ps2 cover image.jpg",
  "PS2 COVER/bully ps2 cover image.jpeg",
  "PS2 COVER/burnout 3 takedown ps2 cover image.jpeg",
  "PS2 COVER/burnout revenge ps2 cover image.jpg",
  "PS2 COVER/call of duty 2 big red one ps2 cover image.jpg",
  "PS2 COVER/call of duty 3 ps2 cover image.jpg",
  "PS2 COVER/call of duty finest hour ps2 cover image.jpeg",
  "PS2 COVER/call of duty world war ps2 cover image.jpg",
  "PS2 COVER/cars mater national ps2 cover image.jpg",
  "PS2 COVER/cars ps2 cover image.jpg",
  "PS2 COVER/cars race o rama ps2 cover image.jpeg",
  "PS2 COVER/cold fear ps2 cover image.jpg",
  "PS2 COVER/commandos strike force ps2 cover image.jpeg",
  "PS2 COVER/conflict desert storm 1.jpg",
  "PS2 COVER/conflict desert storm 2 ps2 cover image.jpg",
  "PS2 COVER/conflict desert storm global terror ps2 cover image.jpg",
 
  "PS2 COVER/conflict vietnam ps2 cover image.jpeg",
  "PS2 COVER/crash bandicoot wrath of cortex ps2 cover image.jpeg",
  "PS2 COVER/crash mind of mutant ps2 cover image.jpg",
  "PS2 COVER/crash nitro kart ps2 cover image.jpg",
  "PS2 COVER/crash of titans ps2 cover image.jpg",
  "PS2 COVER/crash tag team racing ps2 cover image.jpg",
  "PS2 COVER/crash twinstanty ps2 cover image.jpeg",
  "PS2 COVER/darkwatch ps2 cover image.jpg",
  "PS2 COVER/dead to rights 2 ps2 cover image.jpg",
  "PS2 COVER/Dead to rights.jpg",
  "PS2 COVER/Destroy all humans 2.jpg",
  "PS2 COVER/Destroy all Humans.jpg",
  "PS2 COVER/Devil may cry 2.jpg",
  "PS2 COVER/devil may cry ps2 cover image.jpg",
  "PS2 COVER/disney bolt ps2 cover image.jpg",
  "PS2 COVER/downhill ps2 cover image.jpg",
  "PS2 COVER/driver.jpeg",
  "PS2 COVER/Dynasty warriors 2.jpg",
  "PS2 COVER/Dynasty warriors 3 xtrem legends.jpg",
  "PS2 COVER/Dynasty warriors 3.jpg",
  "PS2 COVER/Dynasty warriors 4 xtrem legends.jpg",
  "PS2 COVER/Dynasty warriors 4.jpg",
  "PS2 COVER/Dynasty warriors 5 empires.jpg",
  "PS2 COVER/Dynasty warriors 5 xtrem legends.jpg",
  "PS2 COVER/Dynasty warriors 5.jpg",
  "PS2 COVER/Dynasty warriors 6.jpg",
  "PS2 COVER/Eragon.jpg",
  "PS2 COVER/evil dead regeneration ps2 cover image.jpg",
  "PS2 COVER/fantastic 4 ps2 cover image.jpeg",
  "PS2 COVER/Faxir.png",
  "PS2 COVER/FIFA 06.png",
  "PS2 COVER/fifa 13.jpg",
  "PS2 COVER/fifa 14.jpg",
 
  "PS2 COVER/ford racing 2 ps2 cover image.jpeg",
  "PS2 COVER/ford racing 3 ps2 cover image.jpg",
  "PS2 COVER/formula 1 06 ps2 cover image.jpeg",
  "PS2 COVER/full spectrum ps2 cover image.jpeg",
  "PS2 COVER/ghost rider ps2 cover image.jpeg",
  "PS2 COVER/gladiator sword of veneance ps2 cover image.jpeg",
  "PS2 COVER/god of war ps2 cover image.jpeg",
  "PS2 COVER/god of war 2.jpg",

  "PS2 COVER/Godhand.jpg",
  "PS2 COVER/Goldeneye Rogue agent.jpg",
  "PS2 COVER/gran turismo 4 ps2 cover image.jpeg",
  "PS2 COVER/gt 3 ps2 cover image.jpg",
  "PS2 COVER/gta 3 ps2 cover image.jpeg",
  "PS2 COVER/Gta liberty city stories.jpg",
  "PS2 COVER/gta san andreas ps2 cover image.jpeg",
  "PS2 COVER/gta vice city ps2 cover image.jpg",
  "PS2 COVER/Gta vice city stories.jpg",
  "PS2 COVER/gun ps2 cover image.jpg",
  "PS2 COVER/harley davidson ps2 cover image.jpg",
  "PS2 COVER/Harry potter and the goblet of fire.jpg",
  "PS2 COVER/history civil war secret mission.jpg",
  "PS2 COVER/Hitman 2 silent assassin.jpg",
  "PS2 COVER/Hitman blood money.jpg",
  "PS2 COVER/Hitman contracts.jpg",
  "PS2 COVER/Hulk.jpg",
  "PS2 COVER/ice age  ps2 cover image.jpg",
  "PS2 COVER/ice age 2 ps2 cover image.jpg",
  "PS2 COVER/Indiana jones and the staff of kings.jpg",
  "PS2 COVER/Iron man.jpg",

  "PS2 COVER/jetli ps2 cover image.jpg",
  "PS2 COVER/justice league heroes  ps2 cover image.jpg",
  "PS2 COVER/killzone ps2 cover image.jpeg",
  "PS2 COVER/King kong.jpg",
  "PS2 COVER/kung fu panda ps2 cover image.jpg",
  "PS2 COVER/lego batman the video game ps2 cover image.jpg",
  "PS2 COVER/Looney tunes acme arsenal.jpg",
  "PS2 COVER/loony toons back in action ps2 cover image.jpeg",
  "PS2 COVER/madagascar 2 ps2 cover image.jpg",
  "PS2 COVER/madagascar ps2 cover image.jpg",
  "PS2 COVER/made man ps2 cover image.jpg",
  "PS2 COVER/Mafia.jpg",
  "PS2 COVER/manhunt 2 ps2 cover image.jpeg",
  "PS2 COVER/manhunt ps2 cover image.jpeg",
  "PS2 COVER/Max payne 2.jpg",
  "PS2 COVER/Maximo.jpg",
  "PS2 COVER/Maxpayne.jpg",
  "PS2 COVER/medal of honor eropean assualt ps2 cover image.jpeg",
  "PS2 COVER/medal of honor frontline ps2 cover image.jpg",
  "PS2 COVER/medal of honor rising sun ps2 cover image.jpg",
  "PS2 COVER/medal of honor vanguard ps2 cover image.jpg",
  "PS2 COVER/Mercenaries.png",
  "PS2 COVER/Metal gear solid 2.jpg",
  "PS2 COVER/Metal gear solid 3 snake eater.jpg",
  "PS2 COVER/Metal gear solid 3 subsistence.jpg",
  "PS2 COVER/Midnight club 3.jpg",
  "PS2 COVER/monster inc ps2 cover image.jpg",
  "PS2 COVER/monster vs alien ps2 cover image.jpeg",
  "PS2 COVER/Mortal kombat armageddon.jpg",
  "PS2 COVER/Mortal kombat deadly alliance.jpg",
  "PS2 COVER/Mortal kombat deception.jpg",
  "PS2 COVER/mortal kombat shaolin monks ps2 cover image.jpg",
  "PS2 COVER/mr bean.jpg",

  "PS2 COVER/nfs hot pursuit 2 ps2 cover image.jpeg",
  "PS2 COVER/Nicktoons attack of the toybots.png",
  "PS2 COVER/Nicktoons battle for volcano island.jpg",
  "PS2 COVER/onimusha dawn of dream ps2 cover image.jpg",
  "PS2 COVER/open season ps2 cover image.jpg",
  "PS2 COVER/over the hedge ps2 cover image.jpeg",
  "PS2 COVER/Pes 2008.jpg",
  "PS2 COVER/pes 2009.jpg",
  "PS2 COVER/PES 2010.jpg",
  "PS2 COVER/pes 2012 jalal.png",
  "PS2 COVER/pes 2012.jpg",
  "PS2 COVER/Pes 2013.jpg",
  "PS2 COVER/pes 2025.png",
  "PS2 COVER/Pirates of the caribbean at worlds end.jpg",
  "PS2 COVER/pk out of the shadow.jpeg",
  "PS2 COVER/predetor concrete jungle ps2 cover image.jpg",
  "PS2 COVER/Prince of persia the sands of time.jpg",
  "PS2 COVER/Prince of persia the two thrones.jpg",
  "PS2 COVER/Pro evolution soccer 2.jpg",
  "PS2 COVER/Pro evolution soccer 3.jpg",
  "PS2 COVER/Pro evolution soccer 4.png",
  "PS2 COVER/Pro evolution soccer 5.jpg",
  "PS2 COVER/Pro evolution soccer 6.jpg",
  "PS2 COVER/pro evolution soccer 2011 ps2 cover image.jpg",
  "PS2 COVER/pro evolution soccer 2014 ps2 cover image.jpg",
  "PS2 COVER/pro evolution soccer 2024 ps2 cover image.jpeg",
  "PS2 COVER/Pro evolution soccer.jpg",
  "PS2 COVER/psi ops ps2 cover image.jpeg",
  "PS2 COVER/rainbow six 3ps2 cover image.jpeg",
  "PS2 COVER/rainbow six lockdown ps2 cover image.jpeg",
  "PS2 COVER/ratatouille ps2 cover image.jpeg",
  "PS2 COVER/red dead revolver.jpg",
  "PS2 COVER/Red faction 2.jpg",
  "PS2 COVER/Red faction.jpg",
  "PS2 COVER/reign of fire ps2 cover image.jpg",
  "PS2 COVER/Reservoir Dogs.jpg",
  "PS2 COVER/resident evil 4 ps2 cover image.jpg",
  "PS2 COVER/Resident evil code veronica.jpg",
  "PS2 COVER/Resident evil outbreak file 2.jpg",
  "PS2 COVER/Resident evil outbreak.jpg",
  "PS2 COVER/return to castle.jpg",
  "PS2 COVER/Robots.jpg",
  "PS2 COVER/Samurai jack ris of aku.jpg",
  "PS2 COVER/Samurai_Western.jpg",
  "PS2 COVER/Secret service.jpg",
  "PS2 COVER/Serious sam next encounter.jpg",
  "PS2 COVER/Shadow of Colossus.jpg",
  "PS2 COVER/shadow of rome.jpeg",
  "PS2 COVER/shark tale ps2 cover image.jpg",
  "PS2 COVER/shellshock nam 67 ps2 cover image.jpeg",
  "PS2 COVER/Shrek 2.jpg",
  "PS2 COVER/Shrek carnival craze party games.jpg",
  "PS2 COVER/Shrek smash n.jpg",
  "PS2 COVER/Shrek super slam.jpg",
  "PS2 COVER/Shrek the third.jpg",
  "PS2 COVER/sims 2 pets.jpg",
  "PS2 COVER/sims 2.jpg",
  "PS2 COVER/sly 1 ps2 cover image.jpg",
  "PS2 COVER/sly 2 ps2 cover image.jpg",
  "PS2 COVER/sly 3 ps2 cover image.jpg",
  "PS2 COVER/sniper elite ps2 cover image.jpeg",
  "PS2 COVER/Socom 1.jpg",
  "PS2 COVER/socom 2.jpg",
  "PS2 COVER/Socom 3.jpg",
  "PS2 COVER/spartan total warrior ps2 cover image.jpeg",
  "PS2 COVER/spider man 1 ps2 cover image.jpeg",
  "PS2 COVER/spider man 2 ps2 cover image.jpg",
  "PS2 COVER/spider man 3 ps2 cover image.jpg",
  "PS2 COVER/Spiderman firend or foe.jpg",
  "PS2 COVER/Spiderman web of shadows.jpg",
  "PS2 COVER/splinter cell chaos theory ps2 cover image.jpg",
  "PS2 COVER/Sponge bob from the krusty krab.jpg",
  "PS2 COVER/Sponge bob lights camera pants.jpg",
  "PS2 COVER/sponge bob revenge.jpg",
  "PS2 COVER/Sponge bob squarepants battle for bikini bottom.jpg",
  "PS2 COVER/Sponge bob the movie.jpg",
  "PS2 COVER/Spongebob atlantis squarepants.jpg",
  "PS2 COVER/Stuart little 3 big photo adventure.jpg",
  "PS2 COVER/Superman return.jpg",
  "PS2 COVER/Superman Shadow of apokolips.jpg",
  "PS2 COVER/syphon filter dark mirror ps2 cover image.png",
  "PS2 COVER/tarazan ps2 cover image.jpg",
  "PS2 COVER/teen titans.jpeg",
  "PS2 COVER/Teenage mutant ninja turtles mutant melee.jpg",
  "PS2 COVER/Teenage mutant ninja turtles mutant nightmare 3.jpg",
  "PS2 COVER/teenage mutant ninja turtles ps2 cover image.jpeg",
  "PS2 COVER/Teenage mutant ninja turtles smash up.jpg",
  "PS2 COVER/tekken 4 ps2 cover image.jpg",
  "PS2 COVER/tekken 5 ps2 cover image.jpg",
  "PS2 COVER/tekken tag tournament ps2 cover image.jpg",
  "PS2 COVER/terminator 3 the redemption ps2 cover image.jpg",
  "PS2 COVER/The cat in the hat.jpg",
  "PS2 COVER/the chronicles of narmia the ps2 cover image.jpeg",
  "PS2 COVER/The godfather.jpg",
  "PS2 COVER/The history channel civil war a nation divided.jpg",
  "PS2 COVER/the history channel of battle ps2 cover image.png",
  "PS2 COVER/the incredible hulk ps2 cover image.jpg",
  "PS2 COVER/The incredible hulk ultimate destruction.jpg",
  "PS2 COVER/the lord of rings fellowship ps2 cover image.jpeg",
  "PS2 COVER/the lord of rings the return of kings ps2 cover image.jpg",
  "PS2 COVER/the lord of rings two towers ps2 cover image.jpg",
  "PS2 COVER/The lord of the rings aragons quest.jpg",
  "PS2 COVER/The lord of the rings the third age.jpg",
  "PS2 COVER/the punisher ps2 cover image.jpg",
  "PS2 COVER/the sopranos road to respect ps2 cover image.png",
  "PS2 COVER/time splitters ps2 cover image.jpeg",
  "PS2 COVER/TMNT 2 battle nexus.jpg",
  "PS2 COVER/TMNT.png",
  "PS2 COVER/tom and jerry ps2 cover image.jpg",
  "PS2 COVER/Tomb raider anniversary.jpg",
  "PS2 COVER/Tomb raider legends.jpg",
  "PS2 COVER/Tomb raider underworld.jpg",
  "PS2 COVER/trigger man ps2 cover image.jpeg",
  "PS2 COVER/True crime new york city.jpg",
  "PS2 COVER/true crime streets of la.jpg",
  "PS2 COVER/Twisted_Metal_Black.jpg",
  "PS2 COVER/ultimate alliance 2.jpg",
  "PS2 COVER/Ultimate alliance.jpg",
  "PS2 COVER/ultimate spider man.jpg",
  "PS2 COVER/Up.jpg",
  "PS2 COVER/Urban Reign.jpg",
  "PS2 COVER/Vampire_Night.jpg",
  "PS2 COVER/vietcong purple haze.jpg",
  "PS2 COVER/virtua tennis 2 ps2 cover image.jpeg",
  "PS2 COVER/Wall e.png",
  "PS2 COVER/wallace and gromit ps2 cover image.jpg",
  "PS2 COVER/winning eleven 49.jpg",
  "PS2 COVER/Winning eleven pro evolution soccer 2007.jpg",
  "PS2 COVER/X- men Origins Woverine.jpg",
  "PS2 COVER/X2_-_Wolverine's_Revenge_Coverart.jpg",
  "PS2 COVER/Xena.jpg",
  "PS2 COVER/xmen official game ps2 cover image.jpg",
  "PS2 COVER/yakuza 2 ps2 cover image.jpeg",
  "PS2 COVER/yakuza ps2 cover image.jpg"  ,
   "PS2 COVER/007 night fire ps2 cover image.jpg",
"PS2 COVER/007 everything or nothing ps2 cover image.jpg"

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
