export const getSystemsStatus = async () => {
  try {
    // Διαβάζουμε το έτοιμο status που φτιάχνει ο Ryzen server μας τοπικά
    // Χρησιμοποιούμε σχετικό path αν το αρχείο είναι στο ίδιο domain
    const response = await fetch("/status.json"); 
    
    if (!response.ok) throw new Error("Status file not found");
    
    const data = await response.json();

    return {
      minecraft: {
        online: data.minecraft.online,
        // Αν ο server είναι online, δείχνουμε "LIVE" ή τον αριθμό παικτών
        players: data.minecraft.online ? "ONLINE" : 0 
      },
      cloud: {
        online: data.cloud.online
      }
    };
  } catch (error) {
    console.error("Syndicate Status Error:", error);
    // Σε περίπτωση αποτυχίας, τα δείχνουμε offline για να μην δίνουμε ψεύτικα δεδομένα
    return {
      minecraft: { online: false, players: 0 },
      cloud: { online: false }
    };
  }
};