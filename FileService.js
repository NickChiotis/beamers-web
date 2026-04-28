const API_URL = "https://cloud.thebeamersprojectv1.com/api";
const TOKEN = "ΕΔΩ_ΒΑΖΕΙΣ_ΤΟ_TOKEN_ΤΟΥ_GUEST"; // Πάρε το token του website_guest με curl

export const getGalleryImages = async () => {
  try {
    const response = await fetch(`${API_URL}/resources/`, {
      method: 'GET',
      headers: { 'X-Auth': TOKEN }
    });
    const data = await response.json();
    
    // Φιλτράρουμε μόνο τα αρχεία που είναι εικόνες
    return data.items.filter(item => 
      item.extension === '.jpg' || item.extension === '.png' || item.extension === '.jpeg'
    ).map(img => ({
      name: img.name,
      url: `${API_URL}/raw${img.path}?auth=${TOKEN}` // Direct link για το <img src>
    }));
  } catch (error) {
    console.error("Syndicate Cloud Error:", error);
    return [];
  }
};
