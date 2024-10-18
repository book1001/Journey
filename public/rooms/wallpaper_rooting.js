const root = document.documentElement;

if (roomLink.includes("color1")) {
  root.style.setProperty("--floor", "red");
} else if (roomLink.includes("color2")) {
  root.style.setProperty("--floor", "green");
} else if (roomLink.includes("color3")) {
  root.style.setProperty("--floor", "blue");
}

if (roomLink.includes("roof1")) {
  root.style.setProperty("--roof", "var(--floor)");
  root.style.setProperty("--roofBg1", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--roofPattern1", "url(wallpaper/pattern_roof1.svg)");
  root.style.setProperty("--roofBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--roofPattern2", "url(wallpaper/pattern_roof1.svg)");
} else if (roomLink.includes("roof2")) {
  root.style.setProperty("--roof", "var(--floor)");
  root.style.setProperty("--roofBg1", "rgba(255, 255, 255, 1)");
  root.style.setProperty("--roofPattern1", "url(wallpaper/pattern_roof2.svg)");
  root.style.setProperty("--roofBg2", "rgba(255, 255, 255, 1)");
  root.style.setProperty("--roofPattern2", "url(wallpaper/pattern_roof2.svg)");
} else if (roomLink.includes("roof3-R")) {
  root.style.setProperty("--roof", "red");
  root.style.setProperty("--roofBg1", "transparent");
  root.style.setProperty("--roofPattern1", "url(wallpaper/pattern_T.svg)");
  root.style.setProperty("--roofBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--roofPattern2", "url(wallpaper/pattern_roof3.svg)");
} else if (roomLink.includes("roof3-G")) {
  root.style.setProperty("--roof", "green");
  root.style.setProperty("--roofBg1", "transparent");
  root.style.setProperty("--roofPattern1", "url(wallpaper/pattern_T.svg)");
  root.style.setProperty("--roofBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--roofPattern2", "url(wallpaper/pattern_roof3.svg)");
} else if (roomLink.includes("roof3-B")) {
  root.style.setProperty("--roof", "blue");
  root.style.setProperty("--roofBg1", "transparent");
  root.style.setProperty("--roofPattern1", "url(wallpaper/pattern_T.svg)");
  root.style.setProperty("--roofBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--roofPattern2", "url(wallpaper/pattern_roof3.svg)");
}

if (roomLink.includes("wall1")) {
  root.style.setProperty("--floorBg1", "transparent");
  root.style.setProperty("--floorPattern1", "url(wallpaper/pattern_T.svg)");
  root.style.setProperty("--floorBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--floorPattern2", "url(wallpaper/pattern_wall1.svg)");
} else if (roomLink.includes("wall2")) {
  root.style.setProperty("--floorBg1", "transparent");
  root.style.setProperty("--floorPattern1", "url(wallpaper/pattern_T.svg)");
  root.style.setProperty("--floorBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--floorPattern2", "url(wallpaper/pattern_wall2.svg)");
} else if (roomLink.includes("wall3")) {
  root.style.setProperty("--floorBg1", "transparent");
  root.style.setProperty("--floorPattern1", "url(wallpaper/pattern_T.svg)");
  root.style.setProperty("--floorBg2", "rgba(255, 255, 255, 0.6)");
  root.style.setProperty("--floorPattern2", "url(wallpaper/pattern_wall3.svg)");
}

