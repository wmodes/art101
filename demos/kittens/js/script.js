// Constants for estimated kitten dimensions
const kittenWidth = 339;
const kittenHeight = 278;

// Get the dimensions of the content area
const containerWidth = $("#content").width();
const containerHeight = $("#content").height();

// Track the last kitten position to avoid overlaps
let lastKittenX = null;
let lastKittenY = null;

/**
 * Generates a valid screen position for a new kitten
 * Ensures the position is not too close to the previous one
 * @returns {{x: number, y: number}} Random coordinates
 */
function getKittenPosition() {
  let x, y;
  do {
    x = Math.random() * (containerWidth - kittenWidth);
    y = Math.random() * (containerHeight - kittenHeight);
  } while (
    lastKittenX !== null &&
    Math.abs(x - lastKittenX) < containerWidth * 0.25 &&
    Math.abs(y - lastKittenY) < containerHeight * 0.25
  );
  return { x, y };
}

/**
 * Creates a new kitten DOM element and appends it to the page
 * @param {string} label - Text to show on the kitten's button
 * @param {number} [x] - Optional x-position
 * @param {number} [y] - Optional y-position
 */
function spawnKitten(label, x, y) {
  // If no position provided, generate one
  if (x === undefined || y === undefined) {
    const pos = getKittenPosition();
    x = pos.x;
    y = pos.y;
  }

  // Create new DOM elements
  let $newKitten = $("<div class='kitten'>");
  let $img = $("<img src='img/kitten.png'>");
  let $button = $("<button class='spawn'>").text(label);

  // Style and attach
  $newKitten.css({ top: y + "px", left: x + "px" });
  $newKitten.append($img, $button);
  $("#content").append($newKitten);

  // Make draggable
  $newKitten.draggable();

  // Update last position
  lastKittenX = x;
  lastKittenY = y;
}

/**
 * Event listener for any kitten click
 * Adds a visual button press, then spawns a new kitten
 */
$(document).on("click", ".kitten", function () {
  let $button = $(this).find("button");

  // Add press animation
  $button.addClass("pressed");

  // Delay before spawning new kitten
  setTimeout(function () {
    const labels = [
      "No, press me",
      "This one!",
      "No, click here!",
      "Click me!",
      "No, here!"
    ];
    let label = labels[Math.floor(Math.random() * labels.length)];

    spawnKitten(label); // Will use random location
    $button.removeClass("pressed");
  }, 100);
});

// Create first kitten centered on the screen
spawnKitten(
  "Press me",
  containerWidth / 2 - kittenWidth / 2,
  containerHeight / 2 - kittenHeight / 2
);
