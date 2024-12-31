const images = {};
const context = require.context('../assets', false, /\.(png|jpe?g|svg)$/);

// Loop through all image files and dynamically import them
context.keys().forEach((key) => {
  // Remove '../assets/images/' from the start and file extension from the end
  const imageName = key.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '').trim();
  images[imageName] = context(key);
});

export default images;