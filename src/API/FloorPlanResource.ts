import { API_URL } from './Resource';

interface FloorPlan {
  dataURL: string;
  w: number;
  h: number;
}

export async function loadFloorPlan(): Promise<FloorPlan> {
  const imgURL = `${API_URL}/get_floorplan`;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      resolve({
        dataURL: imgURL,
        w: img.naturalWidth || img.width,
        h: img.naturalHeight || img.height
      });
    img.onerror = reject;
    img.src = imgURL;
  });
}
